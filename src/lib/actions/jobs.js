"use server"

import { getApiBaseUrl } from "./api/base-url";

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
    const res = await fetch(`${getApiBaseUrl()}/api/companies`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(newCompanyData),
    })
    return res.json();
}
