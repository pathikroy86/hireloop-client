import Link from "next/link";
import Image from "next/image";
import { Building2, Globe, MapPin, Users } from "lucide-react";

const CompanyProfile = ({ recruiterCompany }) => {
    const {
        companyName,
        industryCategory,
        websiteUrl,
        location,
        employeeCount,
        shortDescription,
        companyLogo,
        recruiterName,
        recruiterEmail,
    } = recruiterCompany;

    return (
        <div className="min-h-screen bg-[#0f0f11] text-white px-4 py-8">
            <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
                <header className="flex flex-col gap-4 border-b border-neutral-900 pb-6 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-4">
                        <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-lg border border-neutral-800 bg-[#18181b]">
                            {companyLogo ? (
                                <Image
                                    src={companyLogo}
                                    alt={`${companyName} logo`}
                                    width={64}
                                    height={64}
                                    className="h-full w-full object-cover"
                                />
                            ) : (
                                <Building2 className="h-8 w-8 text-neutral-500" />
                            )}
                        </div>
                        <div>
                            <h1 className="text-2xl font-semibold tracking-tight">{companyName}</h1>
                            <p className="text-sm text-neutral-400">{industryCategory}</p>
                        </div>
                    </div>

                    <Link
                        href="/dashboard/recruiter/jobs/new"
                        className="inline-flex h-10 items-center justify-center rounded-lg bg-white px-5 text-sm font-semibold text-black transition-colors hover:bg-neutral-200"
                    >
                        Post a job
                    </Link>
                </header>

                <section className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-lg border border-neutral-800 bg-[#18181b] p-4">
                        <Globe className="mb-3 h-5 w-5 text-sky-400" />
                        <p className="text-xs uppercase tracking-wide text-neutral-500">Website</p>
                        <a
                            href={websiteUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-1 block break-all text-sm text-neutral-100 hover:text-sky-300"
                        >
                            {websiteUrl}
                        </a>
                    </div>

                    <div className="rounded-lg border border-neutral-800 bg-[#18181b] p-4">
                        <MapPin className="mb-3 h-5 w-5 text-orange-400" />
                        <p className="text-xs uppercase tracking-wide text-neutral-500">Location</p>
                        <p className="mt-1 text-sm text-neutral-100">{location}</p>
                    </div>

                    <div className="rounded-lg border border-neutral-800 bg-[#18181b] p-4">
                        <Users className="mb-3 h-5 w-5 text-emerald-400" />
                        <p className="text-xs uppercase tracking-wide text-neutral-500">Team Size</p>
                        <p className="mt-1 text-sm text-neutral-100">{employeeCount}</p>
                    </div>
                </section>

                <section className="rounded-lg border border-neutral-800 bg-[#18181b] p-6">
                    <h2 className="text-lg font-semibold">About the company</h2>
                    <p className="mt-3 leading-7 text-neutral-300">{shortDescription}</p>
                </section>

                <section className="rounded-lg border border-neutral-800 bg-[#18181b] p-6">
                    <h2 className="text-lg font-semibold">Registered recruiter</h2>
                    <div className="mt-3 text-sm text-neutral-300">
                        <p>{recruiterName || "Recruiter"}</p>
                        {recruiterEmail && <p className="text-neutral-500">{recruiterEmail}</p>}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CompanyProfile;
