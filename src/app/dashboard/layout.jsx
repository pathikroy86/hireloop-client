const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
import React from 'react';
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
