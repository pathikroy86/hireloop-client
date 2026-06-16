"use client";

import Link from "next/link";
import { useState } from "react";

import {
    Bars,
    Xmark,
} from "@gravity-ui/icons";

const navLinks = [
    {
        name: "Browse Jobs",
        href: "#",
    },
    {
        name: "Company",
        href: "#",
    },
    {
        name: "Pricing",
        href: "#",
    },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="container mx-auto rounded-4xl border-b border-white/10 bg-[#121212] text-white mt-2">
            <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

                {/* LOGO */}
                <Link
                    href="/"
                    className="flex items-center gap-1"
                >
                    <span className="text-3xl font-bold text-sky-500">
                        hire
                    </span>

                    <span className="text-3xl font-bold text-orange-500">
                        loop
                    </span>
                </Link>

                {/* DESKTOP MENU */}
                <div className="hidden items-center gap-10 lg:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-300 transition hover:text-white"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* DESKTOP BUTTONS */}
                <div className="hidden items-center gap-5 lg:flex">
                    <Link
                        href="#"
                        className="text-sm font-medium text-violet-400 transition hover:text-white"
                    >
                        Sign In
                    </Link>

                    <button
                        className="
              rounded-xl
              bg-violet-600
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              transition
              hover:bg-violet-500
            "
                    >
                        Get Started
                    </button>
                </div>

                {/* MOBILE MENU BUTTON */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="lg:hidden"
                >
                    {menuOpen ? (
                        <Xmark className="h-7 w-7" />
                    ) : (
                        <Bars className="h-7 w-7" />
                    )}
                </button>
            </nav>

            {/* MOBILE / TABLET MENU */}
            <div
                className={`
          overflow-hidden
          transition-all
          duration-300
          lg:hidden
          ${menuOpen
                        ? "max-h-[500px] border-t border-white/10"
                        : "max-h-0"
                    }
        `}
            >
                <div className="space-y-5 px-6 py-6">

                    {/* LINKS */}
                    <div className="flex flex-col gap-5">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-300 transition hover:text-white"
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* ACTIONS */}
                    <div className="flex flex-col gap-4 border-t border-white/10 pt-5">
                        <Link
                            href="#"
                            className="font-medium text-violet-400"
                        >
                            Sign In
                        </Link>

                        <button
                            className="
                w-full
                rounded-xl
                bg-violet-600
                py-3
                font-semibold
                text-white
                transition
                hover:bg-violet-500
              "
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}