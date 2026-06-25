import { serverFetch } from "@/lib/core/server";
import { getUserSession } from "@/lib/core/session";

export const getRecruiterCompany = async (recruiterId) => {
    if (!recruiterId) {
        return null;
    }

    const company = await serverFetch(`/api/my/companies?recruiterId=${encodeURIComponent(recruiterId)}`);
    return company?._id ? company : null;
}

export const getLoggedInRecruiterCompany = async () => {
    const user = await getUserSession();
    return getRecruiterCompany(user?.id);
}
