"use client";

import { motion } from "framer-motion";
import { data } from "@/lib/data";

export default function TechTicker() {
    const allSkills = [
        ...data.skills.visualization,
        ...data.skills.engineering,
        ...data.skills.analysis,
    ];

    // Duplicate the array to create seamless loop
    const tickerItems = [...allSkills, ...allSkills];

    return (
        <div className="w-full bg-slate-950/50 py-8 border-y border-slate-800 overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-900 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-900 to-transparent z-10" />

            <motion.div
                className="flex whitespace-nowrap"
                animate={{ x: [0, -1000] }} // Adjust value based on content width
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 30, // Speed
                }}
            >
                {tickerItems.map((skill, index) => (
                    <div
                        key={`${skill}-${index}`}
                        className="inline-flex items-center mx-8"
                    >
                        <span className="text-electric-cyan text-xs mr-2">{`//`}</span>
                        <span className="text-slate-300 font-mono text-lg font-medium tracking-wide text-nowrap">
                            {skill}
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
