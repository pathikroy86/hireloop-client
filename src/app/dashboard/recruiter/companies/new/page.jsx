"use client";

import React, { useState } from 'react';
import {
    Form,
    TextArea,
    Select,
    ListBox,
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
    Button,
    Input
} from '@heroui/react';
import { Xmark, Pin, ArrowUpToLine } from '@gravity-ui/icons';
import { createCompanies } from '@/lib/actions/jobs';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation'; // Use useRouter for client-side navigation instead of redirect

export default function RegisterCompanyForm() {
    const [logoFile, setLogoFile] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();

    // Replace this string with your real ImgBB API key or use process.env.NEXT_PUBLIC_IMGBB_API_KEY
    const IMGBB_API_KEY = process.env.NEXT_PUBLIC_IMGBB_API_KEY;

    const handleLogoChange = (e) => {
        if (e.target.files?.[0]) {
            setLogoFile(e.target.files[0]);
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        let uploadedLogoUrl = "";
        const convertToBase64 = (file) => {
            return new Promise((resolve, reject) => {
                const fileReader = new FileReader();
                fileReader.readAsDataURL(file);
                fileReader.onload = () => {
                    // Strips the "data:image/png;base64," prefix for the API query body requirements
                    const base64String = fileReader.result.split(',')[1];
                    resolve(base64String);
                };
                fileReader.onerror = (error) => reject(error);
            });
        };

        // 1. Handle ImgBB Upload if a file is selected
        if (logoFile) {
            try {
                const base64Image = await convertToBase64(logoFile);

                const imgbbFormData = new FormData();
                imgbbFormData.append("image", base64Image);

                // Ensure you use your valid 32-character token here
                const imgbbResponse = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
                    method: "POST",
                    body: imgbbFormData,
                });

                const imgbbData = await imgbbResponse.json();

                if (imgbbData && imgbbData.success) {
                    uploadedLogoUrl = imgbbData.data.url;
                } else {
                    console.error("ImgBB API Rejected Request:", imgbbData);
                    toast.error(imgbbData?.error?.message || "Failed to upload image to ImgBB");
                    setIsSubmitting(false);
                    return;
                }
            } catch (error) {
                console.error("ImgBB Upload Exception:", error);
                toast.error("Image upload service encountered an error");
                setIsSubmitting(false);
                return;
            }
        }

        // 2. Prepare Payload with the clean image URL string for your database
        const payload = {
            companyName: data.companyName,
            industryCategory: data.industryCategory,
            websiteUrl: `https://${data.websiteUrl}`,
            location: data.location,
            employeeCount: data.employeeCount,
            shortDescription: data.shortDescription,
            companyLogo: uploadedLogoUrl
        };

        // 3. Save payload to your database via Server Action
        try {
            const res = await createCompanies(payload);
            if (res?.insertedId) {
                toast.success("Company created successfully");
                e.target.reset();
                setLogoFile(null);
                router.push('/dashboard/recruiter/companies');
            } else {
                toast.error("Give Valid Information");
            }
        } catch (error) {
            console.error("Database submission error:", error);
            toast.error("Something went wrong saving the company profile");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#0f0f11] py-12 px-4 flex justify-center items-center">
            <Card variant="default" className="w-full max-w-2xl bg-[#18181b] border border-neutral-800 rounded-xl overflow-hidden shadow-2xl">

                <CardHeader className="p-6 border-b border-neutral-800 flex justify-between items-start">
                    <div className="flex flex-col gap-1">
                        <CardTitle className="text-xl font-semibold text-white tracking-tight">
                            Register New Company
                        </CardTitle>
                        <p className="text-sm text-neutral-400">
                            Enter your business details to start hiring on HireLoop.
                        </p>
                    </div>
                    <button type="button" className="text-neutral-400 hover:text-white transition-colors p-1">
                        <Xmark width="20" height="20" />
                    </button>
                </CardHeader>

                <Form validationBehavior="native" onSubmit={handleFormSubmit} className="flex flex-col">
                    <CardContent className="p-6 flex flex-col gap-5">

                        {/* ROW 1: Company Name & Industry/Category */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-medium text-neutral-300">Company Name</label>
                                <Input
                                    name="companyName"
                                    placeholder="e.g. Acme Corp"
                                    required
                                    className="w-full"
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-medium text-neutral-300">Industry / Category</label>
                                <Select
                                    name="industryCategory"
                                    aria-label="Industry or category"
                                    placeholder="Technology"
                                    required
                                    className="w-full"
                                    disabled={isSubmitting}
                                >
                                    <Select.Trigger>
                                        <Select.Value />
                                        <Select.Indicator />
                                    </Select.Trigger>
                                    <Select.Popover>
                                        <ListBox>
                                            <ListBox.Item id="technology" textValue="Technology">Technology</ListBox.Item>
                                            <ListBox.Item id="design" textValue="Design & Creative">Design & Creative</ListBox.Item>
                                            <ListBox.Item id="marketing" textValue="Marketing & Sales">Marketing & Sales</ListBox.Item>
                                            <ListBox.Item id="finance" textValue="Finance & Legal">Finance & Legal</ListBox.Item>
                                        </ListBox>
                                    </Select.Popover>
                                </Select>
                            </div>
                        </div>

                        {/* ROW 2: Website URL & Location */}
                        {/* ROW 2: Website URL & Location */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-medium text-neutral-300">Website URL</label>
                                <div className="flex rounded-lg overflow-hidden border border-neutral-800 focus-within:border-neutral-700 transition-colors bg-[#222226]">
                                    <span className="bg-[#2a2a30] text-neutral-400 px-3 py-2 text-sm flex items-center border-r border-neutral-800 select-none">
                                        https://
                                    </span>
                                    <input
                                        type="text"
                                        name="websiteUrl"
                                        placeholder="www.company.com"
                                        required
                                        aria-label="Company website address URL"
                                        disabled={isSubmitting}
                                        className="w-full bg-transparent px-3 py-2 text-sm text-white placeholder-neutral-500 outline-none disabled:opacity-50"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-medium text-neutral-300">Location</label>
                                <div className="flex items-center rounded-lg border border-neutral-800 focus-within:border-neutral-700 transition-colors bg-[#222226] px-3">
                                    <Pin className="text-neutral-500 mr-2" width="16" height="16" />
                                    <input
                                        type="text"
                                        name="location"
                                        placeholder="City, Country"
                                        required
                                        aria-label="Company headquarters location"
                                        disabled={isSubmitting}
                                        className="w-full bg-transparent py-2 text-sm text-white placeholder-neutral-500 outline-none disabled:opacity-50"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* ROW 3: Employee Count Range & Company Logo */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-medium text-neutral-300">Employee Count Range</label>
                                <Select
                                    name="employeeCount"
                                    aria-label="Employee count range"
                                    placeholder="1-10 employees"
                                    required
                                    className="w-full"
                                    disabled={isSubmitting}
                                >
                                    <Select.Trigger>
                                        <Select.Value />
                                        <Select.Indicator />
                                    </Select.Trigger>
                                    <Select.Popover>
                                        <ListBox>
                                            <ListBox.Item id="1-10" textValue="1-10 employees">1-10 employees</ListBox.Item>
                                            <ListBox.Item id="11-50" textValue="11-50 employees">11-50 employees</ListBox.Item>
                                            <ListBox.Item id="51-200" textValue="51-200 employees">51-200 employees</ListBox.Item>
                                            <ListBox.Item id="201+" textValue="201+ employees">201+ employees</ListBox.Item>
                                        </ListBox>
                                    </Select.Popover>
                                </Select>
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-medium text-neutral-300">Company Logo</label>
                                <label className={`flex items-center gap-3 p-3 rounded-lg border border-dashed border-neutral-700 bg-[#222226]/50 transition-colors group ${isSubmitting ? 'pointer-events-none opacity-50' : 'cursor-pointer hover:bg-[#222226]'}`}>
                                    <input
                                        type="file"
                                        accept="image/png, image/jpeg"
                                        aria-label="Company logo image"
                                        className="hidden"
                                        onChange={handleLogoChange}
                                        disabled={isSubmitting}
                                    />
                                    <div className="p-2.5 bg-[#2a2a30] rounded-lg text-neutral-400 group-hover:text-white transition-colors border border-neutral-700">
                                        <ArrowUpToLine width="18" height="18" />
                                    </div>
                                    <div className="flex flex-col text-left">
                                        <span className="text-sm font-medium text-white max-w-[180px] truncate">
                                            {logoFile ? logoFile.name : "Upload image"}
                                        </span>
                                        <span className="text-xs text-neutral-500">PNG, JPG up to 5MB</span>
                                    </div>
                                </label>
                            </div>
                        </div>

                        {/* ROW 4: Short Description Box */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-neutral-300">Brief Description</label>
                            <TextArea
                                name="shortDescription"
                                placeholder="Tell us about your company's mission and culture..."
                                rows={4}
                                required
                                className="w-full"
                                disabled={isSubmitting}
                            />
                        </div>

                    </CardContent>

                    <CardFooter className="p-6 border-t border-neutral-800 bg-[#141416] flex justify-end gap-3">
                        <Button
                            type="button"
                            variant="bordered"
                            className="border-neutral-700 text-white hover:bg-neutral-800 font-medium px-5"
                            disabled={isSubmitting}
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            isLoading={isSubmitting}
                            className="bg-white text-black font-semibold hover:bg-neutral-200 transition-colors px-6"
                        >
                            {isSubmitting ? "Uploading..." : "Register Company"}
                        </Button>
                    </CardFooter>
                </Form>

            </Card>
        </div>
    );
}
