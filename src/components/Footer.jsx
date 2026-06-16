"use client";

import Link from "next/link";

import {
    LogoFacebook,
    LogoLinkedin,
    LogoGithub,
} from "@gravity-ui/icons";

export default function Footer() {
    return (
        <footer
            className="
        relative
        overflow-hidden
        border-t
        border-white/10
        bg-[#050505]
        text-white
      "
        >
            {/* BACKGROUND GRID */}
            <div
                className="
          absolute
          inset-0
          opacity-[0.04]
          [background-image:radial-gradient(circle_at_center,white_1px,transparent_1px)]
          [background-size:32px_32px]
        "
            />

            <div
                className="
          relative
          mx-auto
          max-w-7xl
          px-5
          py-16
          sm:px-6
          lg:px-8
        "
            >
                {/* TOP SECTION */}
                <div
                    className="
            grid
            gap-14
            md:grid-cols-2
            lg:grid-cols-4
          "
                >
                    {/* LEFT CONTENT */}
                    <div className="space-y-8">
                        {/* LOGO */}
                        <Link
                            href="/"
                            className="inline-flex items-center"
                        >
                            <span className="text-4xl font-bold text-sky-500">
                                hire
                            </span>

                            <span className="text-4xl font-bold text-orange-500">
                                loop
                            </span>
                        </Link>

                        {/* DESCRIPTION */}
                        <p
                            className="
                max-w-sm
                text-sm
                leading-7
                text-gray-400
              "
                        >
                            The AI-native career platform.
                            Built for people who take
                            their work seriously.
                        </p>

                        {/* SOCIAL ICONS */}
                        <div className="flex items-center gap-3">
                            <Link
                                href="#"
                                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  bg-white/5
                  text-gray-300
                  transition
                  hover:bg-violet-600
                  hover:text-white
                "
                            >
                                <LogoFacebook className="h-5 w-5" />
                            </Link>

                            <Link
                                href="#"
                                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  bg-violet-600
                  text-white
                  transition
                  hover:bg-violet-500
                "
                            >
                                <LogoGithub className="h-5 w-5" />
                            </Link>

                            <Link
                                href="#"
                                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  bg-white/5
                  text-gray-300
                  transition
                  hover:bg-violet-600
                  hover:text-white
                "
                            >
                                <LogoLinkedin className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    {/* PRODUCT */}
                    <div>
                        <h3
                            className="
                mb-6
                text-sm
                font-semibold
                text-violet-500
              "
                        >
                            Product
                        </h3>

                        <ul className="space-y-4">
                            {[
                                "Job discovery",
                                "Worker AI",
                                "Companies",
                                "Salary data",
                            ].map((item) => (
                                <li key={item}>
                                    <Link
                                        href="#"
                                        className="
                      text-sm
                      text-gray-400
                      transition
                      hover:text-white
                    "
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* NAVIGATION */}
                    <div>
                        <h3
                            className="
                mb-6
                text-sm
                font-semibold
                text-violet-500
              "
                        >
                            Navigations
                        </h3>

                        <ul className="space-y-4">
                            {[
                                "Help center",
                                "Career library",
                                "Contact",
                            ].map((item) => (
                                <li key={item}>
                                    <Link
                                        href="#"
                                        className="
                      text-sm
                      text-gray-400
                      transition
                      hover:text-white
                    "
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* RESOURCES */}
                    <div>
                        <h3
                            className="
                mb-6
                text-sm
                font-semibold
                text-violet-500
              "
                        >
                            Resources
                        </h3>

                        <ul className="space-y-4">
                            {[
                                "Brand Guideline",
                                "Newsroom",
                            ].map((item) => (
                                <li key={item}>
                                    <Link
                                        href="#"
                                        className="
                      text-sm
                      text-gray-400
                      transition
                      hover:text-white
                    "
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* BOTTOM SECTION */}
                <div
                    className="
            mt-16
            flex
            flex-col
            gap-5
            border-t
            border-white/10
            pt-6
            text-sm
            text-gray-500
            md:flex-row
            md:items-center
            md:justify-between
          "
                >
                    <p>
                        Copyright 2026 — HireLoop
                    </p>

                    <div className="flex items-center gap-6">
                        <Link
                            href="#"
                            className="hover:text-white transition"
                        >
                            Terms & Policy
                        </Link>

                        <Link
                            href="#"
                            className="hover:text-white transition"
                        >
                            Privacy Guideline
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}