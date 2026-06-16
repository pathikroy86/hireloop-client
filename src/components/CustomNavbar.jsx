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
        <header className="w-full bg-[#111111] px-4 py-4 sm:px-6 lg:px-8">
            <nav
                className="
          mx-auto
          flex
          h-20
          max-w-7xl
          items-center
          justify-between
          rounded-2xl
          border
          border-white/10
          bg-[#171717]
          px-5
          lg:px-8
        "
            >
                {/* LEFT LOGO */}
                <Link
                    href="/"
                    className="flex items-center"
                >
                    <span className="text-3xl font-bold text-sky-500">
                        hire
                    </span>

                    <span className="text-3xl font-bold text-orange-500">
                        loop
                    </span>
                </Link>

                {/* RIGHT SIDE */}
                <div className="hidden items-center lg:flex">

                    {/* MENU ITEMS */}
                    <div
                        className="
              flex
              items-center
              gap-1
              rounded-xl
              border
              border-white/5
              bg-white/5
              p-1.5
            "
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="
                  rounded-lg
                  px-5
                  py-2.5
                  text-sm
                  font-medium
                  text-gray-300
                  transition
                  hover:bg-white/5
                  hover:text-white
                "
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* VERTICAL DIVIDER */}
                    <div className="mx-5 h-10 w-px bg-white/10" />

                    {/* BUTTON GROUP */}
                    <div
                        className="
              flex
              items-center
              gap-2
              rounded-xl
              border
              border-white/5
              bg-white/5
              p-1.5
            "
                    >
                        <Link
                            href="#"
                            className="
                rounded-lg
                px-5
                py-2.5
                text-sm
                font-medium
                text-violet-400
                transition
                hover:bg-white/5
                hover:text-white
              "
                        >
                            Sign In
                        </Link>

                        <button
                            className="
                rounded-lg
                bg-violet-600
                px-5
                py-2.5
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
          mx-auto
          mt-3
          max-w-7xl
          overflow-hidden
          rounded-2xl
          border
          border-white/10
          bg-[#171717]
          transition-all
          duration-300
          lg:hidden
          ${menuOpen
                        ? "max-h-[500px] opacity-100"
                        : "max-h-0 border-0 opacity-0"
                    }
        `}
            >
                <div className="space-y-6 p-6">

                    {/* MOBILE LINKS */}
                    <div className="flex flex-col gap-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="
                  rounded-xl
                  bg-white/5
                  px-4
                  py-3
                  text-gray-300
                  transition
                  hover:bg-white/10
                  hover:text-white
                "
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* MOBILE BUTTONS */}
                    <div className="flex flex-col gap-3 border-t border-white/10 pt-5">
                        <Link
                            href="#"
                            className="
                rounded-xl
                bg-white/5
                px-4
                py-3
                text-center
                font-medium
                text-violet-400
              "
                        >
                            Sign In
                        </Link>

                        <button
                            className="
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