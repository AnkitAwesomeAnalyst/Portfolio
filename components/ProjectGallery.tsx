"use client";

import { motion } from "framer-motion";
import { data } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export default function ProjectGallery() {
    return (
        <section className="py-20 px-6 lg:px-20 bg-slate-950">
            <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
                <span className="w-8 h-1 bg-electric-blue" />
                Analytic Deployments
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {data.projects.map((project, i) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="group relative bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-electric-blue/50 transition-colors"
                    >
                        {/* CSS Chart Thumbnail */}
                        <div className="h-48 bg-slate-800/50 relative p-6 flex items-end justify-center gap-2 overflow-hidden">
                            <div className="absolute inset-0 bg-slate-900/40 z-0" />

                            {/* Variant 1: Bar Chart */}
                            {i === 0 && (
                                <>
                                    <div className="w-4 h-12 bg-blue-500/30 rounded-t z-10" />
                                    <div className="w-4 h-20 bg-blue-500/50 rounded-t z-10" />
                                    <div className="w-4 h-16 bg-blue-500/40 rounded-t z-10" />
                                    <div className="w-4 h-24 bg-electric-blue rounded-t z-10 animate-pulse" />
                                    <div className="w-4 h-10 bg-blue-500/20 rounded-t z-10" />
                                </>
                            )}

                            {/* Variant 2: Line Chart Area */}
                            {i === 1 && (
                                <div className="absolute inset-0 z-10 flex items-end">
                                    <svg className="w-full h-full p-4" viewBox="0 0 100 50" preserveAspectRatio="none">
                                        <path d="M0,50 L20,30 L40,40 L60,10 L80,20 L100,5" stroke="#10b981" strokeWidth="2" fill="none" />
                                        <path d="M0,50 L20,30 L40,40 L60,10 L80,20 L100,5 V50 H0" fill="url(#grad)" opacity="0.2" />
                                        <defs>
                                            <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                                                <stop offset="0%" style={{ stopColor: "#10b981", stopOpacity: 1 }} />
                                                <stop offset="100%" style={{ stopColor: "#10b981", stopOpacity: 0 }} />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            )}

                            {/* Variant 3: Pie/Donut (Abstract) */}
                            {i === 2 && (
                                <div className="w-24 h-24 rounded-full border-8 border-purple-500/20 border-t-purple-500 z-10 animate-spin-slow relative">
                                    <div className="absolute inset-2 rounded-full border-4 border-purple-400/10 border-r-purple-400" />
                                </div>
                            )}

                            <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                                <ArrowUpRight className="text-white" size={20} />
                            </div>
                        </div>

                        <div className="p-6">
                            <div className="text-xs font-mono text-slate-500 mb-2 uppercase tracking-wider">{project.type}</div>
                            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                            <div className="font-mono text-electric-cyan font-bold">{project.metric}</div>
                        </div>

                    </motion.div>
                ))}
            </div>
        </section>
    );
}
