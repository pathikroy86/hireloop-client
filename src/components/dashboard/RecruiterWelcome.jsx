"use client";

import { authClient } from "@/lib/auth-client";

export default function RecruiterWelcome() {
    const { data: session } = authClient.useSession();
    const user = session?.user;

    return (
        <h1 className="text-2xl md:text-3xl mb-5">
            Welcome back, {user?.name || "Recruiter"}
        </h1>
    );
}

