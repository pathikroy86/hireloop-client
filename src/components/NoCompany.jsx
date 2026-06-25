"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@heroui/react';
import { Store } from 'lucide-react';

export default function NoCompany() {
    return (
        <div className="min-h-screen bg-[#0f0f11] text-white flex flex-col justify-between p-6 select-none font-sans">

            {/* --- TOP HEADER BAR --- */}
            <header className="w-full max-w-7xl mx-auto flex items-center justify-between py-2 border-b border-neutral-900">
                <h1 className="text-base font-semibold tracking-wide text-neutral-200">
                    My Company
                </h1>

                <div className="flex items-center gap-4">
                    <div className="relative hidden sm:block">
                        <input
                            type="text"
                            placeholder="Search companies..."
                            className="bg-[#18181b] border border-neutral-800 text-xs text-white rounded-lg pl-3 pr-8 py-2 w-56 placeholder-neutral-500 outline-none focus:border-neutral-700 transition-colors"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-neutral-500 bg-neutral-800 px-1.5 py-0.5 rounded font-mono border border-neutral-700">
                            Ctrl K
                        </span>
                    </div>

                    <button type="button" className="text-neutral-400 hover:text-white transition-colors relative p-1">
                        <div className="w-2 h-2 bg-sky-500 rounded-full absolute top-1 right-1.5" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path></svg>
                    </button>
                </div>
            </header>

            {/* --- CENTER EMPTY STATE HERO ART --- */}
            <main className="flex-1 flex flex-col items-center justify-center text-center max-w-md mx-auto px-4 gap-6">

                <div className="relative flex items-center justify-center w-40 h-40 bg-[#18181b]/40 rounded-2xl border border-neutral-800/40 shadow-inner">
                    <div className="w-28 h-28 bg-[#18181b] border border-neutral-800 rounded-xl flex flex-col p-3 gap-2 shadow-xl opacity-80">
                        <div className="w-6 h-4 bg-neutral-800 rounded" />
                        <div className="w-full h-2 bg-neutral-800 rounded" />
                        <div className="w-4/5 h-2 bg-neutral-800 rounded" />
                        <div className="w-full h-10 bg-[#222226]/50 rounded-lg mt-auto border border-neutral-800/60" />
                    </div>

                    <div className="absolute -top-2 -right-2 bg-white text-black p-2.5 rounded-full shadow-lg border-4 border-[#0f0f11] flex items-center justify-center transform rotate-12">
                        <Store width="18" height="18" className="stroke-[2.5]" />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <h2 className="text-xl font-semibold tracking-tight text-neutral-100">
                        Company not registered yet
                    </h2>
                    <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
                        Set up your business profile to start posting high-performance job listings and manage your talent loop.
                    </p>
                </div>

                {/* Operational Control Triggers Using Pure Next Link Routing */}
                <div className="flex items-center justify-center gap-3 w-full mt-2">
                    <Link
                        href="/dashboard/recruiter/companies/new" // Paths directly to your application registration route
                        className="bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-colors h-11 px-6 rounded-lg shadow-sm flex-1 flex justify-center items-center"
                    >
                        Register your company
                    </Link>

                    <Button
                        as={Link}
                        href="/faq"
                        variant="bordered"
                        className="border-neutral-800 bg-[#18181b]/60 text-neutral-300 font-medium text-sm hover:bg-neutral-800 hover:text-white transition-colors h-11 px-6 rounded-lg flex-1 sm:flex-none justify-center items-center"
                    >
                        View FAQ
                    </Button>
                </div>

            </main>

            {/* --- FOOTER BANNER --- */}
            <footer className="w-full text-center py-4">
                <p className="text-xs text-neutral-600 tracking-wide flex items-center justify-center gap-1.5">
                    Need specialized assistance?
                    <a href="#" className="text-neutral-400 hover:text-white transition-colors underline underline-offset-2">
                        Contact our enterprise support team.
                    </a>
                </p>
            </footer>

        </div>
    );
}