import React from 'react';
import StatCard from './StatCard';
import {
    Briefcase,
    FileText,
    Eye,
    CircleCheck,
    Persons,
    Person,
    Layers,
    CircleExclamation
} from '@gravity-ui/icons';

export default function DashboardStats() {

    // 1. Job Seeker Stats
    const seekerStats = [
        { title: "Applied Jobs", value: "12", icon: Briefcase, description: "3 applied this week" },
        { title: "Interviews", value: "2", icon: Person, description: "Next one on Thursday" },
        { title: "Profile Views", value: "148", icon: Eye, description: "+12% from last month" },
        { title: "Shortlisted", value: "4", icon: CircleCheck, description: "Pending review" },
    ];

    // 2. Recruiter Stats
    const recruiterStats = [
        { title: "Active Jobs", value: "8", icon: Briefcase, description: "2 expiring soon" },
        { title: "Total Applicants", value: "342", icon: Persons, description: "+45 new today" },
        { title: "Interviews Slotted", value: "18", icon: Person, description: "8 scheduled for today" },
        { title: "Filled Roles", value: "24", icon: CircleCheck, description: "Target: 30 this quarter" },
    ];

    // 3. Admin Stats
    const adminStats = [
        { title: "Total Users", value: "14,250", icon: Persons, description: "Seekers + Recruiters" },
        { title: "Total Companies", value: "840", icon: Layers, description: "42 pending verification" },
        { title: "Live Job Posts", value: "3,120", icon: Briefcase, description: "Active globally" },
        { title: "Flagged Content", value: "7", icon: CircleExclamation, description: "Requires immediate review" },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {seekerStats.map((stat, index) => (
                <StatCard
                    key={index}
                    title={stat.title}
                    value={stat.value}
                    icon={stat.icon}
                    description={stat.description}
                    variant="default" // You can set this to "secondary" or "tertiary" based on your theme choice
                />
            ))}
        </div>
    );
}