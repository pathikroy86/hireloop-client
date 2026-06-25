import { serverFetch } from "@/lib/core/server";
import { getApiBaseUrl } from "./base-url";

export const getJobs = async () => {
    return serverFetch('/api/jobs');
}

export const getJobsbyId = async (id) => {
    return serverFetch(`/api/jobs/${id}`);
}

export const getCompanyJobs = async (companyId, status = "active") => {
    const params = new URLSearchParams({
        companyId,
        status,
    });
    const res = await fetch(`${getApiBaseUrl()}/api/jobs?${params.toString()}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch company jobs: ${res.status}`);
    }

    return res.json();
};
