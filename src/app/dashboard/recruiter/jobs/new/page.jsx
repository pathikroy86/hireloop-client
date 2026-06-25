import React from 'react';
import PostJobPage from './PostJobPage';
import { getLoggedInRecruiterCompany } from '@/lib/actions/api/companies';

const PostJobs = async () => {
    const company = await getLoggedInRecruiterCompany();
    return (
        <div>
            <PostJobPage company={company}></PostJobPage>
        </div>
    );
};

export default PostJobs;