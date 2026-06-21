"use client";

import { authClient } from "@/lib/auth-client";
import { ArrowRight, Check, Envelope, Lock, Person } from "@gravity-ui/icons";
import { Button, Card, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import toast from "react-hot-toast";
import { Radio, RadioGroup } from "@heroui/react";

export default function SignupPage() {
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries())
        console.log(user)

        const { data, error } = await authClient.signUp.email({
            name: user.name,
            email: user.email,
            password: user.password,
            role: user.role,
            callbackURL: "/",
        })

        if (!error) {
            toast.success("Registered Successfully");
        } else {
            toast.error("Please provide valid information");
        }
    };


    return (
        <div className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        bg-black
        px-4
        py-10
      ">
            {/* PURPLE GLOW */}
            <div
                className="
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-violet-700/30
          blur-[140px]
        "
            />
            {/* GRID BACKGROUND */}
            <div
                className="
          absolute
          inset-0
          opacity-[0.04]
          [background-image:radial-gradient(circle_at_center,white_1px,transparent_1px)]
          [background-size:30px_30px]
        "
            />
            {/* CARD */}
            <Card
                shadow="none"
                className="
          relative
          z-10
          w-full
          max-w-md
          border
          border-white/10
          bg-white/[0.03]
          p-8
          backdrop-blur-xl
          sm:p-10
        "
            >
                <div className="mb-8 flex justify-center">
                    <Link
                        href="/"
                        className="flex items-center"
                    >
                        <span className="text-4xl font-bold text-sky-500">
                            hire
                        </span>

                        <span className="text-4xl font-bold text-orange-500">
                            loop
                        </span>
                    </Link>
                </div>
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-white">
                        Create Account
                    </h1>

                    <p
                        className="
              mt-3
              text-sm
              leading-6
              text-gray-400
            "
                    >
                        Join thousands of professionals
                        finding their dream jobs.
                    </p>
                </div>
                <form onSubmit={onSubmit} className="space-y-5">

                    {/* FULL NAME */}
                    <div className="group w-full">
                        <label
                            className="
        mb-2
        flex
        items-center
        gap-2
        text-sm
        font-medium
        text-gray-300
      "
                        >
                            <Person
                                className="h-4 w-4 text-violet-400" />
                            Full Name
                        </label>

                        <Input
                            name="name"
                            type="text"
                            placeholder="John Doe"
                            size="lg"
                            radius="lg"
                            variant="bordered"
                            startcontent={
                                <Person className="h-5 w-5 text-gray-500 transition group-focus-within:text-violet-400" />
                            }
                            endcontent={
                                <div
                                    className="
            h-2
            w-2
            rounded-full
            bg-violet-500
            opacity-0
            transition
            group-focus-within:opacity-100
          "
                                />
                            }
                            className="w-full"
                            classnames={{
                                base: "w-full block",
                                mainWrapper: "w-full",
                                input:
                                    "text-white placeholder:text-gray-500",
                                inputWrapper: `
          h-14
          bg-white/[0.03]
          border
          border-white/10
          transition
          duration-300
          hover:border-violet-500/50
          group-focus-within:border-violet-500
          group-focus-within:bg-violet-500/5
          group-focus-within:shadow-[0_0_25px_rgba(139,92,246,0.25)]
        `,
                            }}
                        />
                    </div>

                    {/* EMAIL */}
                    <div className="group w-full">
                        <label
                            className="
        mb-2
        flex
        items-center
        gap-2
        text-sm
        font-medium
        text-gray-300
      "
                        >
                            <Envelope className="h-4 w-4 text-violet-400" />
                            Email Address
                        </label>

                        <Input
                            type="email"
                            placeholder="you@example.com"
                            name="email"
                            size="lg"
                            radius="lg"
                            variant="bordered"
                            startcontent={
                                <Envelope className="h-5 w-5 text-gray-500 transition group-focus-within:text-violet-400" />
                            }
                            endcontent={
                                <div
                                    className="
            h-2
            w-2
            rounded-full
            bg-violet-500
            opacity-0
            transition
            group-focus-within:opacity-100
          "
                                />
                            }
                            className="w-full"
                            classnames={{
                                base: "w-full block",
                                mainWrapper: "w-full",
                                input:
                                    "text-white placeholder:text-gray-500",
                                inputWrapper: `
          h-14
          bg-white/[0.03]
          border
          border-white/10
          transition
          duration-300
          hover:border-violet-500/50
          group-focus-within:border-violet-500
          group-focus-within:bg-violet-500/5
          group-focus-within:shadow-[0_0_25px_rgba(139,92,246,0.25)]
        `,
                            }}
                        />
                    </div>

                    {/* PASSWORD */}
                    <div className="group w-full">
                        <label
                            className="
        mb-2
        flex
        items-center
        gap-2
        text-sm
        font-medium
        text-gray-300
      "
                        >
                            <Lock className="h-4 w-4 text-violet-400" />
                            Password
                        </label>

                        <Input
                            type="password"
                            placeholder="Create secure password"
                            name="password"
                            size="lg"
                            radius="lg"
                            variant="bordered"
                            startcontent={
                                <Lock className="h-5 w-5 text-gray-500 transition group-focus-within:text-violet-400" />
                            }
                            endcontent={
                                <button
                                    type="button"
                                    className="
            text-xs
            font-medium
            text-violet-400
            hover:text-violet-300
          "
                                >
                                    Show
                                </button>
                            }
                            className="w-full"
                            classnames={{
                                base: "w-full block",
                                mainWrapper: "w-full",
                                input:
                                    "text-white placeholder:text-gray-500",
                                inputWrapper: `
          h-14
          bg-white/[0.03]
          border
          border-white/10
          transition
          duration-300
          hover:border-violet-500/50
          group-focus-within:border-violet-500
          group-focus-within:bg-violet-500/5
          group-focus-within:shadow-[0_0_25px_rgba(139,92,246,0.25)]
        `,
                            }}
                        />
                    </div>

                    {/* Role auth */}
                    <div className="flex flex-col gap-4">
                        <Label>Select Role</Label>
                        <RadioGroup defaultValue="seeker" name="role" orientation="horizontal">
                            <Radio value="seeker">
                                <Radio.Content>
                                    <Radio.Control>
                                        <Radio.Indicator />
                                    </Radio.Control>
                                    Job Seeker
                                </Radio.Content>
                                <Description></Description>
                            </Radio>
                            <Radio value="recruiter">
                                <Radio.Content>
                                    <Radio.Control>
                                        <Radio.Indicator />
                                    </Radio.Control>
                                    Recruiter
                                </Radio.Content>
                                <Description></Description>
                            </Radio>
                        </RadioGroup>
                    </div>

                    {/* TERMS */}
                    <div className="flex items-start gap-3 pt-1">
                        <input
                            type="checkbox"
                            className="
        mt-1
        h-4
        w-4
        rounded
        border-white/20
        bg-transparent
        accent-violet-600
      "
                        />

                        <p className="text-sm leading-6 text-gray-400">
                            I agree to the{" "}
                            <span className="text-violet-400">
                                Terms & Conditions
                            </span>{" "}
                            and{" "}
                            <span className="text-violet-400">
                                Privacy Policy
                            </span>
                        </p>
                    </div>

                    {/* BUTTON */}
                    <Button
                        type="submit"
                        size="lg"
                        radius="lg"
                        className="
      group
      mt-3
      h-14
      w-full
      overflow-hidden
      bg-violet-600
      text-base
      font-semibold
      text-white
      transition-all
      duration-300
      hover:scale-[1.02]
      hover:bg-violet-500
      hover:shadow-[0_0_35px_rgba(139,92,246,0.45)]
    "
                    >
                        <span className="flex items-center gap-2">
                            Create Account

                            <ArrowRight
                                className="
          h-4
          w-4
          transition-transform
          duration-300
          group-hover:translate-x-1
        "
                            />
                        </span>
                    </Button>
                </form>
                <div className="my-8 flex items-center gap-4">
                    <div className="h-px flex-1 bg-white/10" />

                    <span className="text-sm text-gray-500">
                        OR
                    </span>

                    <div className="h-px flex-1 bg-white/10" />
                </div>

                {/* GOOGLE BUTTON */}
                <Button
                    variant="bordered"
                    radius="lg"
                    className="
            h-14
            w-full
            border-white/10
            bg-white/[0.03]
            text-white
            hover:bg-white/[0.05]
          "
                >
                    Continue with Google
                </Button>
                <p
                    className="
            mt-8
            text-center
            text-sm
            text-gray-400
          "
                >
                    Already have an account?{" "}
                    <Link
                        href="/auth/signin"
                        className="
              font-medium
              text-violet-400
              hover:text-violet-300
            "
                    >
                        Sign In
                    </Link>
                </p>
            </Card>
        </div>

    )
}