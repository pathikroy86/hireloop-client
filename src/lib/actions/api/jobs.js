import { getApiBaseUrl } from "./base-url";

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
