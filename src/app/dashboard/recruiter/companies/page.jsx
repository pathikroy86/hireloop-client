
import { getRecruiterCompany } from "@/lib/actions/api/companies";
import { getUserSession } from "@/lib/core/session";
import CompanyProfile from "./CompanyProfile";
import NoCompany from "@/components/NoCompany";

export const dynamic = 'force-dynamic';

const CompanyPage = async () => {
    const user = await getUserSession();
    const company = await getRecruiterCompany(user?.id);

    if (!company) {
        return <NoCompany />;
    }

    return <CompanyProfile recruiter={user} recruiterCompany={company} />;
};

export default CompanyPage;
