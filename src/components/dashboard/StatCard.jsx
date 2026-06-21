import React from 'react';
import { Card } from '@heroui/react';

export default function StatCard({ title, value, icon: Icon }) {
    return (
        // Matching the dark, subtly bordered styling from dashboardstats.PNG
        <Card variant="default" className="bg-[#18181b] border border-neutral-800 p-5 rounded-xl flex flex-col gap-5 justify-between min-h-[160px] w-full">
            <Card.Header className="p-0 flex items-start justify-between">
                {Icon && (
                    <div className="p-2.5 rounded-lg bg-neutral-800 text-neutral-300 flex items-center justify-center">
                        <Icon width="18" height="18" />
                    </div>
                )}
            </Card.Header>

            <Card.Content className="p-0 flex flex-col gap-2">
                <p className="text-xs font-normal text-neutral-400 tracking-wide">
                    {title}
                </p>
                <span className="text-2xl font-semibold text-white tracking-tight">
                    {value}
                </span>
            </Card.Content>
        </Card>
    );
}