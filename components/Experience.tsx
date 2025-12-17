"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { data } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Experience() {
    const [selectedJob, setSelectedJob] = useState(data.experience[0]);

    return (
        <section className="py-20 px-6 lg:px-20 bg-slate-900">
            <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
                <span className="w-8 h-1 bg-electric-blue" />
                Experience Protocol
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[600px]">
                {/* Timeline Navigator */}
                <div className="lg:col-span-1 border-l border-slate-700 space-y-2">
                    {data.experience.map((job, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedJob(job)}
                            className={cn(
                                "w-full text-left p-6 transition-all duration-300 relative group",
                                selectedJob.company === job.company
                                    ? "bg-electric-blue/10 border-r-4 border-electric-blue"
                                    : "hover:bg-slate-800/50"
                            )}
                        >
                            <h3 className={cn(
                                "font-bold text-lg",
                                selectedJob.company === job.company ? "text-white" : "text-slate-400 group-hover:text-slate-200"
                            )}>
                                {job.company}
                            </h3>
                            <p className="text-sm text-slate-500">{job.period}</p>

                            {/* Active Indicator Arrow */}
                            {selectedJob.company === job.company && (
                                <motion.div
                                    layoutId="active-indicator"
                                    className="absolute inset-y-0 left-0 w-1 bg-electric-blue"
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Data Card Details */}
                <div className="lg:col-span-2 relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedJob.company}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="glass-card h-full p-8 rounded-2xl overflow-hidden relative"
                        >
                            {/* Decorative Data Lines */}
                            <div className="absolute top-0 right-0 p-4 opacity-20">
                                <div className="flex gap-1">
                                    <div className="h-2 w-2 bg-electric-cyan rounded-full animate-pulse" />
                                    <div className="h-2 w-2 bg-electric-blue rounded-full animate-pulse delay-75" />
                                    <div className="h-2 w-2 bg-white rounded-full animate-pulse delay-150" />
                                </div>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    {selectedJob.role}
                                </h3>
                                <div className="flex justify-between items-center text-electric-cyan font-mono text-sm">
                                    <span>@{selectedJob.company}</span>
                                    <span>{selectedJob.period}</span>
                                </div>
                            </div>

                            <ul className="space-y-4">
                                {selectedJob.highlights.map((point, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex gap-4 text-slate-300 leading-relaxed"
                                    >
                                        <span className="text-electric-blue mt-1">▹</span>
                                        {point}
                                    </motion.li>
                                ))}
                            </ul>

                            {/* Entrepreneur Tag for Arham Farms */}
                            {selectedJob.company === 'Arham Farms' && (
                                <div className="absolute bottom-6 right-6 px-4 py-2 bg-yellow-500/20 text-yellow-400 border border-yellow-500/50 rounded-full text-xs font-bold uppercase tracking-wider">
                                    Entrepreneurial Venture
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
