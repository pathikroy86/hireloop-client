"use client";

import Image from "next/image";

import {
    Briefcase,
    Factory,
    Persons,
    Star,
} from "@gravity-ui/icons";

const statsData = [
    {
        id: 1,
        icon: Briefcase,
        value: "50K",
        label: "Active Jobs",
    },
    {
        id: 2,
        icon: Factory,
        value: "12K",
        label: "Companies",
    },
    {
        id: 3,
        icon: Persons,
        value: "2M",
        label: "Job Seekers",
    },
    {
        id: 4,
        icon: Star,
        value: "97%",
        label: "Satisfaction Rate",
    },
];

export default function Stats() {
    return (
        <section
            className="
        relative
        overflow-hidden
        bg-black
        px-4
        pt-20
        pb-24
        sm:px-6
        lg:px-8
      "
        >
            {/* STARS BACKGROUND */}
            <div
                className="
    absolute
    inset-0
    opacity-20
    bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]
  "
            />
            {/* PURPLE GLOW */}
            <div
                className="
          absolute
          left-1/2
          top-0
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-violet-700/40
          blur-[140px]
        "
            />

            {/* GLOBE IMAGE */}
            <div
                className="
          absolute
          left-1/2
          top-16
          z-0
          h-[420px]
          w-[900px]
          -translate-x-1/2
          sm:top-10
          sm:h-[500px]
          sm:w-[1000px]
          lg:top-0
          lg:h-[650px]
          lg:w-[1300px]
        "
            >
                <Image
                    src="https://i.ibb.co.com/n2YXfhq/globe.png"
                    alt="Globe"
                    fill
                    priority
                    className="
            object-contain
            object-top
            opacity-90
          "
                />
            </div>

            {/* CONTENT */}
            <div className="relative z-10 mx-auto max-w-7xl">

                {/* TITLE */}
                <div className="pt-32 text-center sm:pt-40 lg:pt-52">
                    <h2
                        className="
              mx-auto
              max-w-3xl
              text-3xl
              font-semibold
              leading-tight
              text-white
              sm:text-4xl
              lg:text-5xl
            "
                    >
                        Assisting over 15,000 job seekers
                        <br />
                        find their dream positions.
                    </h2>
                </div>

                {/* STATS */}
                <div
                    className="
            mt-16
            grid
            gap-5
            sm:grid-cols-2
            lg:grid-cols-4
          "
                >
                    {statsData.map((stat) => {
                        const Icon = stat.icon;

                        return (
                            <div
                                key={stat.id}
                                className="
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-black/60
                  p-7
                  backdrop-blur-xl
                  transition
                  duration-300
                  hover:border-violet-500/40
                  hover:bg-black/70
                "
                            >
                                {/* CARD OVERLAY */}
                                <div
                                    className="
                    absolute
                    inset-0
                    bg-gradient-to-b
                    from-transparent
                    to-white/[0.03]
                  "
                                />

                                {/* ICON */}
                                <div
                                    className="
                    relative
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-lg
                    bg-white/5
                    text-white
                  "
                                >
                                    <Icon className="h-5 w-5" />
                                </div>

                                {/* VALUE */}
                                <h3
                                    className="
                    relative
                    mt-12
                    text-4xl
                    font-bold
                    text-white
                    sm:text-5xl
                  "
                                >
                                    {stat.value}
                                </h3>

                                {/* LABEL */}
                                <p
                                    className="
                    relative
                    mt-3
                    text-sm
                    text-gray-400
                  "
                                >
                                    {stat.label}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
