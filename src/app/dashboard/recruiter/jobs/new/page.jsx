"use client";

import React, { useState } from 'react';
import {
    Form,
    TextField,
    TextArea,
    Select,
    ListBox,
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
    Button,
    Switch,
    Input
} from '@heroui/react';
import {
    Xmark
} from '@gravity-ui/icons';
import { createJobs } from '@/lib/actions/jobs';
import toast from 'react-hot-toast';
import { redirect } from 'next/navigation';

export default function PostJobPage() {
    const [isRemote, setIsRemote] = useState(false);

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        // Add remote toggle value manually to the form payload data
        data.isRemote = isRemote;
        const payload = {
            ...data,
            isRemote,
            status: "active",
            companyId: "company11"
        }
        const res = await createJobs(payload);
        if (res.insertedId) {
            toast.success("Inserted Successfully!");
            e.target.reset();
            redirect('/dashboard/recuiter/jobs');
        }
    };

    return (
        <div className="min-h-screen bg-[#0f0f11] py-12 px-4 flex justify-center items-center">
            <Card variant="default" className="w-full max-w-3xl bg-[#18181b] border border-neutral-800 rounded-xl overflow-hidden shadow-2xl">

                <CardHeader className="p-6 border-b border-neutral-800 flex justify-between items-start">
                    <div className="flex flex-col gap-1">
                        <CardTitle className="text-xl font-semibold text-white tracking-tight">
                            Post a New Job
                        </CardTitle>
                        <p className="text-sm text-neutral-400">
                            Provide the structural job specifics and descriptions below.
                        </p>
                    </div>
                    <button type="button" className="text-neutral-400 hover:text-white transition-colors p-1">
                        <Xmark width="20" height="20" />
                    </button>
                </CardHeader>

                <Form validationBehavior="native" onSubmit={handleFormSubmit} className="flex flex-col">
                    <CardContent className="p-6 flex flex-col gap-6">

                        {/* --- CORE JOB SPECIFICS --- */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                            {/* Job Title */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-medium text-neutral-400">Job Title</label>
                                <Input
                                    name="jobTitle"
                                    placeholder="e.g. Senior Frontend Developer"
                                    isRequired
                                    errorMessage="Job Title is required"
                                    className="w-full"
                                />
                            </div>

                            {/* Job Category */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-medium text-neutral-400">Job Category</label>
                                <Select
                                    name="jobCategory"
                                    placeholder="Select Category"
                                    isRequired
                                    errorMessage="Job Category is required"
                                    className="w-full"
                                >
                                    <Select.Trigger>
                                        <Select.Value />
                                        <Select.Indicator />
                                    </Select.Trigger>
                                    <Select.Popover>
                                        <ListBox>
                                            <ListBox.Item id="engineering" textValue="Engineering">Engineering</ListBox.Item>
                                            <ListBox.Item id="design" textValue="Design">Design</ListBox.Item>
                                            <ListBox.Item id="product" textValue="Product Management">Product Management</ListBox.Item>
                                            <ListBox.Item id="marketing" textValue="Marketing">Marketing</ListBox.Item>
                                        </ListBox>
                                    </Select.Popover>
                                </Select>
                            </div>

                            {/* Job Type */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-medium text-neutral-400">Job Type</label>
                                <Select
                                    name="jobType"
                                    placeholder="Select Employment Type"
                                    isRequired
                                    errorMessage="Job Type is required"
                                    className="w-full"
                                >
                                    <Select.Trigger>
                                        <Select.Value />
                                        <Select.Indicator />
                                    </Select.Trigger>
                                    <Select.Popover>
                                        <ListBox>
                                            <ListBox.Item id="full-time" textValue="Full-time">Full-time</ListBox.Item>
                                            <ListBox.Item id="part-time" textValue="Part-time">Part-time</ListBox.Item>
                                            <ListBox.Item id="contract" textValue="Contract">Contract</ListBox.Item>
                                            <ListBox.Item id="internship" textValue="Internship">Internship</ListBox.Item>
                                        </ListBox>
                                    </Select.Popover>
                                </Select>
                            </div>

                            {/* Application Deadline */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-medium text-neutral-400">Application Deadline</label>
                                <Input
                                    name="applicationDeadline"
                                    type="date"
                                    isRequired
                                    errorMessage="Application Deadline is required"
                                    className="w-full"
                                />
                            </div>

                        </div>

                        {/* --- COMPENSATION STRUCTURE --- */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                            {/* Currency */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-medium text-neutral-400">Currency</label>
                                <Select
                                    name="currency"
                                    placeholder="Currency"
                                    defaultValue="USD"
                                    className="w-full"
                                >
                                    <Select.Trigger>
                                        <Select.Value />
                                        <Select.Indicator />
                                    </Select.Trigger>
                                    <Select.Popover>
                                        <ListBox>
                                            <ListBox.Item id="USD" textValue="USD ($)">USD ($)</ListBox.Item>
                                            <ListBox.Item id="EUR" textValue="EUR (€)">EUR (€)</ListBox.Item>
                                            <ListBox.Item id="GBP" textValue="GBP (£)">GBP (£)</ListBox.Item>
                                        </ListBox>
                                    </Select.Popover>
                                </Select>
                            </div>

                            {/* Minimum Salary */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-medium text-neutral-400">Minimum Salary</label>
                                <Input
                                    name="minSalary"
                                    type="number"
                                    placeholder="Minimum"
                                    isRequired
                                    errorMessage="Minimum Salary is required"
                                    className="w-full"
                                />
                            </div>

                            {/* Maximum Salary */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-medium text-neutral-400">Maximum Salary</label>
                                <Input
                                    name="maxSalary"
                                    type="number"
                                    placeholder="Maximum"
                                    isRequired
                                    errorMessage="Maximum Salary is required"
                                    className="w-full"
                                />
                            </div>
                        </div>

                        {/* --- REMOTE STATE SWITCH (HeroUI v3 Anatomy Syntax) --- */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-medium text-neutral-400">Workplace Setting</label>
                            <Switch
                                isSelected={isRemote}
                                onChange={setIsRemote}
                                name="isRemoteJob"
                            >
                                <Switch.Content>
                                    <Switch.Control>
                                        <Switch.Thumb />
                                    </Switch.Control>
                                    <span className="text-sm text-white font-normal">Remote Job Position</span>
                                </Switch.Content>
                            </Switch>
                        </div>

                        {/* --- LOCATION FIELD --- */}
                        <div className="flex flex-col gap-1.5">
                            <label className={`text-xs font-medium transition-colors ${isRemote ? 'text-neutral-600' : 'text-neutral-400'}`}>
                                Location {isRemote && "(Disabled for Remote Roles)"}
                            </label>
                            <Input
                                name="location"
                                placeholder="e.g. San Francisco, CA"
                                disabled={isRemote}
                                isRequired={!isRemote}
                                errorMessage="Location is required for non-remote roles"
                                className={`w-full transition-opacity duration-200 ${isRemote ? 'opacity-60 cursor-not-allowed' : ''}`}
                            />
                        </div>

                        {/* --- JOB DESCRIPTION MARKUP --- */}
                        <div className="flex flex-col gap-4 pt-2 border-t border-neutral-800">

                            {/* Responsibilities */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-medium text-neutral-400">Responsibilities</label>
                                <TextArea
                                    name="responsibilities"
                                    placeholder="Outline core tasks, workflows, and deliverables..."
                                    rows={4}
                                    isRequired
                                    errorMessage="Responsibilities description block is required"
                                    className="w-full"
                                />
                            </div>

                            {/* Requirements */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-medium text-neutral-400">Requirements</label>
                                <TextArea
                                    name="requirements"
                                    placeholder="List required technical skills, experience levels, and certifications..."
                                    rows={4}
                                    isRequired
                                    errorMessage="Requirements description block is required"
                                    className="w-full"
                                />
                            </div>

                            {/* Benefits */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-medium text-neutral-400">Benefits (Optional)</label>
                                <TextArea
                                    name="benefits"
                                    placeholder="Perks, health coverage, equity options, stipends..."
                                    rows={3}
                                    className="w-full"
                                />
                            </div>

                        </div>

                    </CardContent>

                    <CardFooter className="p-6 border-t border-neutral-800 bg-[#141416] flex justify-end gap-3">
                        <Button
                            type="button"
                            variant="bordered"
                            className="border-neutral-700 text-white hover:bg-neutral-800"
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            className="bg-white text-black font-medium hover:bg-neutral-200 transition-colors"
                        >
                            Publish Job Post
                        </Button>
                    </CardFooter>
                </Form>

            </Card>
        </div>
    );
}