import { getUserSession } from '@/lib/core/session';
import { redirect } from 'next/navigation';
import React from 'react';
import JobApply from './JobApply';
import { getJobsbyId } from '@/lib/actions/api/jobs';
import { getApplicationsByApplicant } from '@/lib/actions/api/applications';
import Link from 'next/link';
// Import matching HeroUI and GravityUI components for structure
import { Card } from '@heroui/react';
import { ShieldCheck, CircleInfo, ArrowLeft, Star } from '@gravity-ui/icons';
import { ShieldX } from 'lucide-react';
import { getPlanById } from '@/lib/actions/api/plans';

const ApplyPage = async ({ params }) => {
    const { id } = await params;
    const user = await getUserSession();
    const job = await getJobsbyId(id);

    if (!user) {
        redirect(`/auth/signin?redirect=/jobs/${id}/apply`);
    }

    // --- STYLED SYSTEM RESTRICTION GUARD BLOCK ---
    if (user.role !== 'seeker') {
        return (
            <div className="min-h-[80vh] bg-[#0f0f11] text-white flex items-center justify-center p-6 select-none font-sans">
                <Card className="w-full max-w-md bg-[#141416] border border-neutral-900 rounded-2xl p-6 shadow-xl text-center flex flex-col items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                        <ShieldX className="text-[20px]" />
                    </div>
                    <Card.Header className="p-0 flex flex-col gap-1 items-center">
                        <Card.Title className="text-lg font-semibold text-neutral-100">Access Restricted</Card.Title>
                        <Card.Description className="text-neutral-400 text-sm leading-relaxed max-w-xs">
                            Only authenticated job seekers can apply for open positions. Please re-authenticate with a candidate profile.
                        </Card.Description>
                    </Card.Header>
                    <Card.Footer className="p-0 mt-2 w-full">
                        <Link
                            href="/jobs"
                            className="w-full bg-neutral-800 text-neutral-200 font-medium text-sm hover:bg-neutral-700 transition-colors h-10 rounded-xl"
                        >
                            Return to Job Board
                        </Link>
                    </Card.Footer>
                </Card>
            </div>
        );
    }

    const plan = await getPlanById(user?.plan || 'seeker_free');
    const applications = await getApplicationsByApplicant(user.id);
    const applicationCount = applications?.length || 0;
    const hasReachedLimit = applicationCount >= plan.maxApplicationPerMonth;

    return (
        <div className="min-h-screen bg-[#0f0f11] text-white p-4 md:p-8 font-sans antialiased">
            <div className="max-w-3xl mx-auto flex flex-col gap-6">

                {/* Back Navigation Bar */}
                <div className="flex items-center justify-between w-full">
                    <Link
                        href={`/jobs/${id}`}
                        className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors group"
                    >
                        <ArrowLeft className="text-[16px] group-hover:-translate-x-0.5 transition-transform" />
                        Back to job details
                    </Link>
                </div>

                {/* --- APPLICATION USAGE METRIC CARD --- */}
                <Card className="w-full bg-[#141416] border border-neutral-900 rounded-2xl p-5 md:p-6 shadow-xl overflow-visible">
                    <Card.Content className="p-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-start gap-3.5">
                            <div className={`p-2.5 rounded-xl border shrink-0 ${hasReachedLimit
                                ? 'bg-amber-500/10 border-amber-500/20 text-amber-400'
                                : 'bg-purple-500/10 border-purple-500/20 text-purple-400'
                                }`}>
                                {hasReachedLimit ? <CircleInfo className="text-[18px]" /> : <ShieldCheck className="text-[18px]" />}
                            </div>
                            <div className="flex flex-col gap-0.5">
                                <h3 className="text-sm text-neutral-400 font-medium tracking-wide">
                                    Monthly Trackers Status ({plan.name} Tier)
                                </h3>
                                <span className="text-base text-neutral-100 font-semibold">
                                    You have used {applications.length} out of {plan.maxApplicationPerMonth} submissions this month
                                </span>
                            </div>
                        </div>

                        {/* Progress Indicator Shorthand Pill */}
                        <div className="text-xs bg-[#1b1b1f] border border-neutral-800 rounded-xl px-4 py-2 self-start sm:self-auto flex items-center gap-2">
                            <span className="text-neutral-500 font-medium">Usage:</span>
                            <span className={`font-bold ${hasReachedLimit ? 'text-amber-400' : 'text-purple-400'}`}>
                                {Math.min(100, (applications.length / plan.maxApplicationPerMonth) * 100).toFixed(0)}%
                            </span>
                        </div>
                    </Card.Content>

                    {/* --- LIMIT BREACH WARNING BLOCK --- */}
                    {hasReachedLimit && (
                        <div className="mt-5 p-4 rounded-xl bg-amber-500/5 border border-amber-500/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-in fade-in duration-200">
                            <p className="text-xs text-amber-400/90 leading-relaxed max-w-md">
                                You have run out of your monthly free application pipeline capacity. Upgrade to a premium membership to unlocked limitless tracking workflows.
                            </p>
                            <Link
                                href="/plans"
                                className="bg-amber-400 hover:bg-amber-300 text-black font-semibold text-xs h-9 px-4 rounded-lg transition-colors flex items-center gap-1 shrink-0"
                            >
                                <Star className="text-[14px] fill-black" />
                                View Premium Plans
                            </Link>
                        </div>
                    )}
                </Card>

                {/* --- RENDER APPLICATION SUBMISSION FORM VIA NESTED CLIENT MOUNT --- */}
                {!hasReachedLimit && (
                    <div className="mt-2 animate-in fade-in slide-in-from-bottom-3 duration-300">
                        <JobApply applicant={user} job={job} />
                    </div>
                )}

            </div>
        </div>
    );
};

export default ApplyPage;
