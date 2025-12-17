import Hero from "@/components/Hero";
import TechTicker from "@/components/TechTicker";
import Experience from "@/components/Experience";
import ArhamFarms from "@/components/ArhamFarms";
import ProjectGallery from "@/components/ProjectGallery";

export default function Home() {
    return (
        <main className="min-h-screen bg-slate-900 text-slate-100 overflow-x-hidden selection:bg-electric-blue/30 selection:text-white">
            <Hero />
            <TechTicker />
            <Experience />
            <ArhamFarms />
            <ProjectGallery />

            {/* Footer */}
            <footer className="py-8 text-center text-slate-600 text-sm">
                <p>© {new Date().getFullYear()} Ankit Raikwar. Built with Next.js, Tailwind & Data.</p>
            </footer>
        </main>
    );
}
