"use client";

import React, { useState } from 'react';
import { Card, Button } from "@heroui/react";
import { Check, Star, Sparkles, Suitcase, ChevronDown, Factory, Thunderbolt } from '@gravity-ui/icons';
import Link from 'next/link';

export default function PricingPage() {
    const [billingTarget, setBillingTarget] = useState("seekers"); // "seekers" or "recruiters"
    const [openFaq, setOpenFaq] = useState(null);

    // Toggle Accordion Handler
    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    // Seeker Plans Dataset
    const seekerPlans = [
        {
            name: "Free",
            planId: "seeker_free",
            price: "$0",
            period: "/forever",
            description: "Essential tools to kickstart your career tracking journey.",
            features: [
                "Browse & save up to 10 jobs",
                "Apply to up to 3 jobs per month",
                "Basic candidate profile visibility",
                "Standard automated email alerts"
            ],
            cta: "Get Started Free",
            variant: "bordered",
            badge: null
        },
        {
            name: "Pro",
            planId: "seeker_pro",
            price: "$19",
            period: "/month",
            description: "Perfect for active candidates pushing for a career pivot.",
            features: [
                "Apply to up to 30 jobs per month",
                "Unlimited saved jobs tracking",
                "Advanced application analytics loop",
                "Comprehensive salary market insights"
            ],
            cta: "Upgrade to Pro",
            variant: "solid",
            badge: "Most Popular",
            icon: <Thunderbolt className="text-purple-400" />
        },
        {
            name: "Premium",
            planId: "seeker_premium",
            price: "$39",
            period: "/month",
            description: "Maximum tracking tools with dedicated institutional visibility.",
            features: [
                "Everything in Pro tier included",
                "Unlimited job applications",
                "Profile boost direct to top recruiters",
                "Early access to newly opened jobs",
                "Priority 24/7 technical support"
            ],
            cta: "Go Premium",
            variant: "bordered",
            badge: "Elite Access",
            icon: <Sparkles className="text-amber-400" />
        }
    ];

    // Recruiter Plans Dataset
    const recruiterPlans = [
        {
            name: "Free",
            planId: "recruiter_free",
            price: "$0",
            period: "/forever",
            description: "Great for a company's first year of tracking and hiring talent.",
            features: [
                "Up to 3 active job posts",
                "Basic applicant management pipeline",
                "Standard listing visibility layout"
            ],
            cta: "Post Free Job",
            variant: "bordered",
            badge: null
        },
        {
            name: "Growth",
            planId: "recruiter_growth",
            price: "$49",
            period: "/month",
            description: "Scale up your active hiring team with built-in analytics loop.",
            features: [
                "Up to 10 active job posts",
                "Full applicant tracking system (ATS)",
                "Basic workflow usage analytics",
                "Standard email support turnarounds"
            ],
            cta: "Unlock Growth",
            variant: "solid",
            badge: "Best Value",
            icon: <Thunderbolt className="text-purple-400" />
        },
        {
            name: "Enterprise",
            planId: "recruiter_enterprise",
            price: "$149",
            period: "/month",
            description: "Complete corporate infrastructure optimization management.",
            features: [
                "Up to 50 active job posts",
                "Advanced analytics dashboard analytics",
                "Featured job listings visibility boost",
                "Multi-member team collaboration workflows",
                "Custom branding employer profile layout",
                "Priority 24/7 technical assistance"
            ],
            cta: "Deploy Enterprise",
            variant: "bordered",
            badge: "Corporate",
            icon: <Factory className="text-sky-400" />
        }
    ];

    // FAQ Dataset
    const faqData = [
        {
            question: "Can I switch between plans at any point?",
            answer: "Absolutely. You can upgrade, downgrade, or change your billing parameters instantly from your account dashboard. Upgrades take effect immediately with prorated credits applied."
        },
        {
            question: "What payment methods do you support?",
            answer: "We securely handle transactions using all major international credit and debit cards (Visa, Mastercard, American Express), along with Apple Pay and Google Pay through encrypted processing channels."
        },
        {
            question: "How do cancellations work?",
            answer: "You can cancel your active subscription at any time. Your workspace premium privileges will remain completely active until the final day of your current paid tracking period cycle."
        },
        {
            question: "What is your refund policy?",
            answer: "If you are unsatisified with your experience, reach out within 14 days of a subscription transaction. We will evaluate usage metrics to process standard refunds, no questions asked."
        }
    ];

    const activePlans = billingTarget === "seekers" ? seekerPlans : recruiterPlans;

    return (
        <div className="min-h-screen bg-[#0f0f11] text-white p-6 md:p-12 font-sans antialiased selection:bg-purple-500/30">
            <div className="max-w-6xl mx-auto flex flex-col items-center gap-12">

                {/* --- HEADER TITLE ZONE --- */}
                <div className="text-center flex flex-col gap-3 max-w-xl">
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                        Simple, transparent pricing
                    </h1>
                    <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                        Choose the specific workspace performance tier built around your professional career trajectory or organizational pipeline.
                    </p>
                </div>

                {/* --- INTERACTIVE STATE SWITCH TOGGLE --- */}
                <div className="bg-[#141416] p-1.5 rounded-2xl border border-neutral-900 flex items-center gap-1 shadow-inner select-none">
                    <button
                        type="button"
                        onClick={() => setBillingTarget("seekers")}
                        className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${billingTarget === "seekers"
                            ? "bg-[#222226] text-white shadow"
                            : "text-neutral-400 hover:text-neutral-200"
                            }`}
                    >
                        <Suitcase className="text-[14px]" />
                        For Job Seekers
                    </button>
                    <button
                        type="button"
                        onClick={() => setBillingTarget("recruiters")}
                        className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${billingTarget === "recruiters"
                            ? "bg-[#222226] text-white shadow"
                            : "text-neutral-400 hover:text-neutral-200"
                            }`}
                    >
                        <Factory className="text-[14px]" />
                        For Recruiters
                    </button>
                </div>

                {/* --- PRICING GRID LAYOUT --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-stretch mt-2">
                    {activePlans.map((plan, index) => {
                        const isFeatured = plan.variant === "solid";

                        return (
                            <Card
                                key={index}
                                className={`relative flex flex-col justify-between rounded-2xl p-6 shadow-xl select-none transition-all duration-300 ${isFeatured
                                    ? "bg-[#18181b] border-2 border-purple-500/80 -translate-y-1 shadow-purple-950/10 shadow-2xl"
                                    : "bg-[#141416] border border-neutral-900 hover:border-neutral-800"
                                    }`}
                            >
                                {/* Top Badge Overlay */}
                                {plan.badge && (
                                    <div className={`absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider rounded-full px-2.5 py-1 flex items-center gap-1 ${isFeatured ? "bg-purple-500 text-white" : "bg-neutral-800 text-neutral-300 border border-neutral-700"
                                        }`}>
                                        {plan.icon}
                                        {plan.badge}
                                    </div>
                                )}

                                {/* --- CARD HEADER --- */}
                                <Card.Header className="p-0 flex flex-col items-start gap-1 bg-transparent">
                                    <Card.Title className="text-xl font-bold tracking-tight text-neutral-100">
                                        {plan.name}
                                    </Card.Title>
                                    <Card.Description className="text-neutral-500 text-xs min-h-[32px] mt-1 leading-normal">
                                        {plan.description}
                                    </Card.Description>

                                    {/* Financial Matrix Layout */}
                                    <div className="flex items-baseline gap-1 mt-3 mb-4">
                                        <span className="text-4xl font-extrabold text-white tracking-tight">{plan.price}</span>
                                        <span className="text-xs text-neutral-500 font-medium">{plan.period}</span>
                                    </div>
                                </Card.Header>

                                {/* --- CARD CONTENT (FEATURE LISTS) --- */}
                                <Card.Content className="p-0 flex-1 flex flex-col gap-3 bg-transparent border-t border-neutral-900 pt-4">
                                    {plan.features.map((feature, fIndex) => (
                                        <div key={fIndex} className="flex items-start gap-2.5 text-sm text-neutral-400">
                                            <div className={`p-0.5 rounded-full mt-0.5 shrink-0 ${isFeatured ? "bg-purple-500/10 text-purple-400" : "bg-neutral-900 text-neutral-500"
                                                }`}>
                                                <Check className="text-[12px] stroke-[3]" />
                                            </div>
                                            <span className="leading-snug">{feature}</span>
                                        </div>
                                    ))}
                                </Card.Content>

                                {/* --- CARD FOOTER --- */}
                                <Card.Footer className="p-0 mt-6 bg-transparent border-0">
                                    <form action="/api/checkout_sessions" method="POST">
                                        <input type="hidden" name="planId" value={plan.planId} />
                                        <section>
                                            <button type="submit" role="link" className={`w-full font-semibold text-sm h-11 rounded-xl transition-all px-3 ${isFeatured
                                                ? "bg-purple-600 text-white hover:bg-purple-500 shadow-md shadow-purple-950/40"
                                                : "bg-neutral-800/80 text-neutral-200 hover:bg-neutral-800 hover:text-white border border-neutral-800"
                                                }`}>
                                                {plan.cta}
                                            </button>
                                        </section>
                                    </form>
                                </Card.Footer>
                            </Card>
                        );
                    })}
                </div>

                {/* --- FAQ ACCORDION SECTION --- */}
                <div className="w-full max-w-3xl mt-16 flex flex-col gap-6">
                    <div className="text-center flex flex-col gap-1.5 mb-2">
                        <h2 className="text-2xl font-bold tracking-tight text-white">Frequently Asked Questions</h2>
                        <p className="text-xs text-neutral-500">Everything you need to know about billing infrastructure setups.</p>
                    </div>

                    <div className="flex flex-col gap-3">
                        {faqData.map((faq, index) => {
                            const isOpen = openFaq === index;

                            return (
                                <div
                                    key={index}
                                    className="bg-[#141416] border border-neutral-900/60 rounded-xl overflow-hidden transition-colors duration-200"
                                >
                                    <button
                                        type="button"
                                        onClick={() => toggleFaq(index)}
                                        className="w-full px-5 py-4 flex items-center justify-between text-left font-medium text-sm text-neutral-200 hover:text-white transition-colors select-none"
                                    >
                                        <span>{faq.question}</span>
                                        <ChevronDown className={`text-[16px] text-neutral-500 transition-transform duration-200 ${isOpen ? "transform rotate-180 text-white" : ""}`} />
                                    </button>

                                    {/* Smooth Content Drawer */}
                                    <div className={`transition-all duration-200 ease-in-out ${isOpen ? "max-h-[200px] border-t border-neutral-900/40" : "max-h-0"} overflow-hidden`}>
                                        <p className="p-5 text-xs text-neutral-400 leading-relaxed whitespace-pre-line bg-[#111113]/40">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </div>
    );
}