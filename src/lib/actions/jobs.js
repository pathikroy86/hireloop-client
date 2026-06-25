"use server"

import { getApiBaseUrl } from "./api/base-url";
import { getUserSession } from "@/lib/core/session";

export const createJobs = async (newJobData) => {
    const res = await fetch(`${getApiBaseUrl()}/api/jobs`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(newJobData),
    })
    return res.json();
}

export const createCompanies = async (newCompanyData) => {
    const recruiter = await getUserSession();

    if (!recruiter?.id) {
        throw new Error("You must be signed in as a recruiter to register a company.");
    }

    const companyData = {
        ...newCompanyData,
        recruiterId: recruiter.id,
        recruiterName: recruiter.name || "",
        recruiterEmail: recruiter.email || "",
    };

    const res = await fetch(`${getApiBaseUrl()}/api/companies`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(companyData),
    })

    if (!res.ok) {
        throw new Error(`Failed to create company: ${res.status}`);
    }

    return res.json();
}
