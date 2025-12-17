"use client";

import { motion } from "framer-motion";
import { TrendingUp, Award, Droplets } from "lucide-react";

export default function ArhamFarms() {
    return (
        <section className="py-20 px-6 lg:px-20 bg-slate-900 relative">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass-strong rounded-3xl p-1 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 shadow-2xl relative overflow-hidden"
                >
                    {/* Header */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-500 to-amber-600" />

                    <div className="p-8 lg:p-12 grid lg:grid-cols-2 gap-12 items-center">

                        {/* Content Side */}
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-900/30 border border-yellow-700/50 rounded-md text-yellow-500 text-xs font-bold uppercase tracking-widest mb-6">
                                <Award size={14} /> Entrepreneurial Highlight
                            </div>
                            <h2 className="text-4xl font-bold text-white mb-4">Arham Farms</h2>
                            <h3 className="text-xl text-slate-400 mb-6">Data-Driven Dairy Operations</h3>
                            <p className="text-slate-400 mb-8 leading-relaxed">
                                Founded a dairy enterprise and revolutionized traditional farming with data.
                                Built proprietary reporting frameworks to track production, optimize feed strategies,
                                and secure high-value partnerships.
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                                    <div className="text-slate-500 text-sm mb-1">Annual Revenue</div>
                                    <div className="text-2xl font-bold text-white">₹22 Lakhs</div>
                                </div>
                            </div>
                        </div>

                        {/* Visual Metrics Side */}
                        <div className="relative">
                            {/* Amul Partnership Card */}
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="p-6 bg-slate-800 rounded-2xl border border-slate-700 relative z-20 shadow-xl"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-blue-600/20 rounded-lg text-blue-400">
                                        <TrendingUp size={24} />
                                    </div>
                                    <span className="text-emerald-400 font-mono text-xs">+15% Efficiency</span>
                                </div>
                                <h4 className="text-white font-bold text-lg">Supply Chain Partner</h4>
                                <p className="text-slate-400 text-sm mt-2">Secured strategic partnership with <strong className="text-white">Amul</strong>, optimizing milk procurement logistics.</p>
                            </motion.div>

                            {/* Production Widget */}
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="p-6 bg-slate-800 rounded-2xl border border-slate-700 relative z-10 mt-[-20px] ml-8 shadow-xl"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-cyan-600/20 rounded-lg text-cyan-400">
                                        <Droplets size={24} />
                                    </div>
                                </div>
                                <h4 className="text-white font-bold text-lg">Yield Optimization</h4>
                                <p className="text-slate-400 text-sm mt-2">Correlated feed composition with milk output using Google Sheets regressions.</p>
                            </motion.div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}
