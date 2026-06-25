
import React from 'react';
import Link from 'next/link';
import { Card } from '@heroui/react';
import { Pin, Suitcase, ArrowUpRight, CircleDollar } from '@gravity-ui/icons';

export default function JobCard({ job }) {
    const {
        _id,
        jobTitle = job?.jobTitle,
        responsibilities = job?.responsibilities,
        minSalary,
        maxSalary,
        currency = job?.currency,
        isRemote,
        jobType = job?.jobType,
        location = job?.location,
        logo = job?.companyLogo,
    } = job || {};

    const formatSalary = () => {
        if (!minSalary && !maxSalary) return "Salary Unspecified";
        const symbol = currency === "USD" ? "$" : currency === "EUR" ? "€" : `${currency} `;
        const formatNum = (num) => Number(num) >= 1000 ? `${(Number(num) / 1000).toFixed(0)}k` : num;

        return `${symbol}${formatNum(minSalary)}–${symbol}${formatNum(maxSalary)}/hour`;
    };

    return (
        <Card className="group/card w-full max-w-[380px] bg-[#141416] hover:bg-[#18181b] border border-neutral-900 hover:border-neutral-700/70 rounded-2xl p-5 shadow-xl transition-all duration-300 ease-out select-none hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40">

            {/* Header Block with Title and Description */}
            <Card.Header className="p-0 flex flex-col gap-2.5 items-start bg-transparent">
                <Card.Title className="text-xl font-semibold text-neutral-200 group-hover/card:text-white tracking-tight leading-snug max-w-[95%] truncate transition-colors duration-200 flex gap-2">

                    {jobTitle}
                </Card.Title>
                <Card.Description className="text-neutral-500 group-hover/card:text-neutral-400 text-sm leading-relaxed line-clamp-2 pr-1 transition-colors duration-200">
                    {responsibilities}
                </Card.Description>
            </Card.Header>

            {/* Content Block containing the Interactive Metadata Badges */}
            <Card.Content className="p-0 flex flex-wrap gap-2 mt-4 bg-transparent">
                {/* Location Badge */}
                <div className="flex items-center gap-1.5 bg-[#1b1b1f] group-hover/card:bg-[#222226] text-neutral-400 group-hover/card:text-neutral-300 border border-neutral-800/60 rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-300 hover:scale-105 hover:border-neutral-700">
                    <Pin className="text-neutral-500 group-hover/card:text-neutral-400 text-[14px] transition-colors" />
                    <span>{isRemote ? "Remote" : location}</span>
                </div>

                {/* Job Type Badge */}
                <div className="flex items-center gap-1.5 bg-[#1b1b1f] group-hover/card:bg-[#222226] text-neutral-400 group-hover/card:text-neutral-300 border border-neutral-800/60 rounded-full px-3 py-1.5 text-xs font-medium capitalize transition-all duration-300 hover:scale-105 hover:border-neutral-700">
                    <Suitcase className="text-neutral-500 group-hover/card:text-neutral-400 text-[14px] transition-colors" />
                    <span>{jobType}</span>
                </div>

                {/* Salary Badge */}
                <div className="flex items-center gap-1.5 bg-purple-950/10 group-hover/card:bg-purple-950/30 text-purple-400/80 group-hover/card:text-purple-300 border border-purple-950/30 group-hover/card:border-purple-900/40 rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-300 hover:scale-105 hover:border-purple-700/50">
                    <CircleDollar className="text-purple-500/70 group-hover/card:text-purple-400/80 text-[14px] transition-colors" />
                    <span>{formatSalary()}</span>
                </div>
            </Card.Content>

            {/* Footer Block containing the Animated Link Trigger */}
            <Card.Footer className="p-0 mt-5 pt-1 flex justify-start bg-transparent border-0">
                <Link
                    href={`/jobs/${_id || 'view'}`}
                    className="inline-flex items-center gap-1.5 text-neutral-400 group-hover/card:text-white text-sm font-medium transition-colors duration-200 relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 group-hover/card:after:w-full after:h-[1px] after:bg-white after:transition-all after:duration-300"
                >
                    Apply Now
                    <ArrowUpRight className="text-[14px] text-neutral-500 group-hover/card:text-white group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 transition-all duration-200 ease-out" />
                </Link>
            </Card.Footer>

        </Card>
    );
}