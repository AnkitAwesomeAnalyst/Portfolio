"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { data } from "@/lib/data";

export default function Hero() {
    const [displayText, setDisplayText] = useState("");
    const tagline = data.profile.tagline;

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setDisplayText(tagline.substring(0, index));
            index++;
            if (index > tagline.length) {
                clearInterval(interval);
            }
        }, 50); // Typing speed

        return () => clearInterval(interval);
    }, [tagline]);

    return (
        <section className="min-h-[80vh] flex flex-col justify-center px-6 lg:px-20 py-20 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric-blue/10 rounded-full blur-3xl -z-10" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <span className="text-electric-blue font-mono text-sm tracking-widest uppercase mb-4 block">
                    {data.profile.title}
                </span>
                <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
                    {data.profile.name}
                </h1>

                <div className="h-20 lg:h-24">
                    <h2 className="text-2xl lg:text-4xl text-slate-400 font-light flex items-center">
                        {displayText}
                        <span className="w-1 h-8 lg:h-10 bg-electric-cyan ml-2 animate-pulse" />
                    </h2>
                </div>

                <p className="mt-8 text-slate-400 max-w-2xl text-lg leading-relaxed">
                    {data.profile.summary}
                </p>

                <div className="mt-12 flex gap-6">
                    <a
                        href={`mailto:${data.profile.contact.email}`}
                        className="px-8 py-3 bg-electric-blue text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors shadow-[0_0_20px_rgba(59,130,246,0.5)] border border-blue-400/20"
                    >
                        Contact Me
                    </a>
                    <a
                        href={`https://${data.profile.contact.linkedin}`}
                        target="_blank"
                        rel="noreferrer"
                        className="px-8 py-3 bg-transparent border border-slate-700 text-slate-300 font-semibold rounded-lg hover:border-electric-blue hover:text-white transition-all glass"
                    >
                        LinkedIn
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
