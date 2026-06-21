"use client";
import DashboardStats from '@/components/dashboard/DashboardStats';
import { authClient } from '@/lib/auth-client';
import React from 'react';

const RecruiterDashboard = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    return (
        <div className='py-5 ps-5'>
            <h1 className='text-2xl md:text-3xl mb-5'>Welcome back, {user?.name}</h1>
            <DashboardStats></DashboardStats>
        </div>
    );
};

export default RecruiterDashboard;