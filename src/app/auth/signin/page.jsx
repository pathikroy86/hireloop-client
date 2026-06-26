"use client";

import { authClient } from "@/lib/auth-client";
import { ArrowRight, Check, Envelope, Lock, Person } from "@gravity-ui/icons";
import { Button, Card, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

export default function SigninPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const redirectTo = searchParams.get("redirect") || '/';
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signIn.email({
            email: user.email,
            password: user.password,
        })
        console.log(data)

        if (!error) {
            toast.success("Logged In Successfully");
            router.push(redirectTo);
        } else {
            toast.error("Email and Password doesn't match");
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
          h-125
          w-125
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
          bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)]
          bg-size-[30px_30px]
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

                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-white">
                        Login to your account
                    </h1>
                </div>
                <form onSubmit={onSubmit} className="space-y-5">
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
                            Login

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
                    Don&apos;t have an account?{" "}
                    <Link
                        href={`/auth/signup?redirect=${redirectTo}`}
                        className="
              font-medium
              text-violet-400
              hover:text-violet-300
            "
                    >
                        Sign up
                    </Link>
                </p>
            </Card>
        </div>

    )
}
