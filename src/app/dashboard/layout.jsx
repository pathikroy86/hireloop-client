import React from 'react';
import RecruiterDashboard from './recruiter/page';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';

const DashboardLayout = ({ children }) => {
    return (
        <div className='flex min-h-screen w-11/12 mx-auto'>
            <DashboardSidebar />
            <main className='flex-1'>{children}</main>
        </div>
    );
};

export default DashboardLayout;