import DashboardStats from '@/components/dashboard/DashboardStats';
import React from 'react';
import RecruiterWelcome from '@/components/dashboard/RecruiterWelcome';
import RecruiterJobsTable from '@/components/dashboard/RecruiterJobsTable';

export const dynamic = 'force-dynamic';

const RecruiterDashboard = () => {
    return (
        <div className='py-5 ps-5'>
            <RecruiterWelcome />
            <DashboardStats></DashboardStats>
            <RecruiterJobsTable />
        </div>
    );
};

export default RecruiterDashboard;
