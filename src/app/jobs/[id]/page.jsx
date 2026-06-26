import Link from 'next/link';
import { Card, Button, CloseButton } from "@heroui/react";
import { Pin, Suitcase, CircleDollar, Calendar, ArrowLeft, ShieldCheck, Star } from '@gravity-ui/icons';
import { getJobsbyId } from '@/lib/actions/api/jobs';
const JobDetailsPage = async ({ params }) => {
    const { id } = await params;
    const jobData = await getJobsbyId(id);
    const {
        jobTitle,
        jobCategory,
        jobType,
        applicationDeadline,
        currency,
        minSalary,
        maxSalary,
        location,
        isRemote,
        responsibilities,
        requirements,
        benefits,
        companyLogo,
        status
    } = jobData || {};
    const formatSalary = () => {
        const symbol = currency === "USD" ? "$" : currency === "EUR" ? "€" : `${currency} `;
        const shortNum = (num) => Number(num) >= 1000 ? `${(Number(num) / 1000).toFixed(0)}k` : num;
        return `${symbol}${shortNum(minSalary)} – ${symbol}${shortNum(maxSalary)} / year`;
    };
    const formatDate = (dateStr) => {
        return new Date(dateStr).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };
    return (
        <div className="min-h-screen bg-[#0f0f11] text-white p-4 md:p-8 font-sans antialiased selection:bg-purple-500/30">
            <div className="max-w-5xl mx-auto flex flex-col gap-6">

                {/* Navigation Action Header Bar */}
                <div className="flex items-center justify-between w-full">
                    <Link
                        href="/jobs"
                        className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors group"
                    >
                        <ArrowLeft className="text-[16px] group-hover:-translate-x-0.5 transition-transform" />
                        Back to jobs list
                    </Link>
                    <div className="flex items-center gap-1.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full px-3 py-1 text-xs font-medium capitalize">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {status}
                    </div>
                </div>

                {/* --- MAIN HERO CARD DISPLAY --- */}
                <Card className="w-full relative bg-[#141416] border border-neutral-900 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-stretch gap-6 shadow-xl overflow-visible">
                    {/* Company Identity / Graphic Banner Grid */}
                    <div className="relative h-20 w-20 md:h-24 md:w-24 shrink-0 overflow-hidden rounded-2xl border border-neutral-800 bg-[#1b1b1f] flex items-center justify-center p-2 shadow-inner">
                        <img
                            alt="Company Logo"
                            className="pointer-events-none w-full h-full object-contain select-none transition-transform duration-500 hover:scale-110"
                            loading="lazy"
                            src={companyLogo}
                        />
                    </div>

                    {/* Core Branding Headers and quick footer links */}
                    <div className="flex flex-1 flex-col gap-4 justify-between">
                        <Card.Header className="p-0 gap-1.5 items-start">
                            <Card.Title className="text-2xl md:text-3xl font-bold tracking-tight text-white pr-8">
                                {jobTitle}
                            </Card.Title>
                            <Card.Description className="text-sm font-medium text-purple-400/90 capitalize tracking-wide">
                                Category: {jobCategory}
                            </Card.Description>
                        </Card.Header>

                        <Card.Footer className="p-0 mt-auto flex w-full flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between border-t border-neutral-900/60 pt-4">
                            {/* Composite inline pills metric indicators */}
                            <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-400">
                                <div className="flex items-center gap-1.5">
                                    <Pin className="text-[15px] text-neutral-500" />
                                    <span>{isRemote ? "Remote" : location}</span>
                                </div>
                                <span className="w-1 h-1 rounded-full bg-neutral-700 hidden sm:block" />
                                <div className="flex items-center gap-1.5 capitalize">
                                    <Suitcase className="text-[15px] text-neutral-500" />
                                    <span>{jobType}</span>
                                </div>
                            </div>

                            <Link href={`/jobs/${id}/apply`} className="flex items-center w-full sm:w-auto bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all rounded-xl h-11 px-6 shadow-sm">
                                Apply for this position
                            </Link>
                        </Card.Footer>
                    </div>

                    <CloseButton aria-label="Dismiss detail context view" className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors" />
                </Card>

                {/* --- GRID BODY CONTENTS FRAMEWORK --- */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start mt-2">

                    {/* LEFT PANEL: In-depth Rich Description Fields */}
                    <div className="lg:col-span-2 flex flex-col gap-6">

                        {/* Responsibilities */}
                        <Card className="bg-[#141416]/50 border border-neutral-900/80 rounded-2xl p-6">
                            <Card.Header className="p-0 mb-3">
                                <Card.Title className="text-lg font-semibold text-neutral-100 flex items-center gap-2">
                                    <Star className="text-purple-400 text-sm" />
                                    Key Responsibilities
                                </Card.Title>
                            </Card.Header>
                            <Card.Content className="p-0">
                                <p className="text-neutral-400 text-sm leading-relaxed whitespace-pre-line">
                                    {responsibilities}
                                </p>
                            </Card.Content>
                        </Card>

                        {/* Requirements */}
                        <Card className="bg-[#141416]/50 border border-neutral-900/80 rounded-2xl p-6">
                            <Card.Header className="p-0 mb-3">
                                <Card.Title className="text-lg font-semibold text-neutral-100 flex items-center gap-2">
                                    <ShieldCheck className="text-purple-400 text-sm" />
                                    Requirements & Qualifications
                                </Card.Title>
                            </Card.Header>
                            <Card.Content className="p-0">
                                <p className="text-neutral-400 text-sm leading-relaxed whitespace-pre-line">
                                    {requirements}
                                </p>
                            </Card.Content>
                        </Card>

                        {/* Perks & Benefits */}
                        {benefits && (
                            <Card className="bg-[#141416]/50 border border-neutral-900/80 rounded-2xl p-6">
                                <Card.Header className="p-0 mb-3">
                                    <Card.Title className="text-lg font-semibold text-neutral-100">
                                        Perks & Benefits
                                    </Card.Title>
                                </Card.Header>
                                <Card.Content className="p-0">
                                    <p className="text-neutral-400 text-sm leading-relaxed whitespace-pre-line">
                                        {benefits}
                                    </p>
                                </Card.Content>
                            </Card>
                        )}
                    </div>

                    {/* RIGHT PANEL: Sticky Information Metric Snapshot */}
                    <div className="lg:col-span-1 lg:sticky lg:top-6 flex flex-col gap-4">
                        <Card className="bg-[#141416] border border-neutral-900 rounded-2xl p-5">
                            <Card.Header className="p-0 mb-4 border-b border-neutral-900 pb-3">
                                <Card.Title className="text-sm font-semibold tracking-wider text-neutral-400 uppercase">
                                    Job Snapshot
                                </Card.Title>
                            </Card.Header>

                            <Card.Content className="p-0 flex flex-col gap-4">
                                {/* Financial Metric Row */}
                                <div className="flex items-start gap-3">
                                    <div className="p-2 rounded-xl bg-[#1b1b1f] border border-neutral-800 text-neutral-400">
                                        <CircleDollar className="text-[16px]" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs text-neutral-500 font-medium">Estimated Salary Range</span>
                                        <span className="text-sm text-neutral-200 font-semibold mt-0.5">{formatSalary()}</span>
                                    </div>
                                </div>

                                {/* Deadline Clock Row */}
                                <div className="flex items-start gap-3">
                                    <div className="p-2 rounded-xl bg-[#1b1b1f] border border-neutral-800 text-neutral-400">
                                        <Calendar className="text-[16px]" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs text-neutral-500 font-medium">Application Deadline</span>
                                        <span className="text-sm text-neutral-200 font-semibold mt-0.5">{formatDate(applicationDeadline)}</span>
                                    </div>
                                </div>
                            </Card.Content>
                        </Card>

                        {/* Institutional Security Notice Card */}
                        <div className="p-4 bg-[#141416]/20 rounded-xl border border-neutral-900 text-center">
                            <p className="text-[11px] text-neutral-600 leading-normal">
                                Posted on {formatDate("2026-06-24")}. Ensure your data is fully updated inside your HireLoop workspace dashboard before finalizing application pathways.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default JobDetailsPage;