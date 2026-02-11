import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-brand-moonlight text-brand-black selection:bg-brand-lavender/30">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-6 bg-brand-moonlight relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[image:var(--image-grid-pattern)] opacity-50 pointer-events-none" />
                <div className="container mx-auto max-w-4xl relative z-10 text-center">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-black/40 mb-4 block">About</span>
                    <h1 className="font-serif text-5xl md:text-7xl mb-8 text-brand-black leading-tight">
                        About the Reader
                    </h1>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 px-6 bg-white border-t border-brand-black/5">
                <div className="container mx-auto max-w-3xl space-y-12 text-lg leading-relaxed text-brand-black/80 font-light">

                    {/* Intro */}
                    <div>
                        <h2 className="font-serif text-3xl text-brand-purple mb-6">Preeti Jain: Where Strategy Meets Soul</h2>
                        <p>
                            With a Master of Computer Applications (MCA) and over 15 years of corporate excellence, I spent over a decade navigating the fast-paced, high-pressure world of IT. While my career was built on logic, systems, and results, my heart was always tuned to a different frequency.
                        </p>
                    </div>

                    {/* The Spiritual Calling */}
                    <div className="bg-brand-purple/5 p-8 rounded-2xl border border-brand-purple/10">
                        <h3 className="font-serif text-2xl text-brand-indigo mb-4">The Professional Journey & Spiritual Calling</h3>
                        <p className="mb-4">
                            My journey into spirituality wasn’t a choice; it was a calling. Born in the mystical city of Udaipur, I felt a profound spiritual alignment as early as age 12. Though my path initially led me to the corporate world, that inner voice never faded.
                        </p>
                        <p>
                            Today, I have integrated those years of discipline and leadership with my gifts as an Intuitive Tarot Card Reader and Life Coach.
                        </p>
                    </div>

                    {/* Global Mission */}
                    <div>
                        <h3 className="font-serif text-2xl text-brand-indigo mb-4">A Global Mission for Wellness</h3>
                        <p className="mb-6">
                            I believe that true success is impossible without mental and physical harmony. From my base in Ahmedabad, I serve a global clientele, helping high-performers and soul-seekers alike find their "Bliss." By bridging the gap between corporate resilience and spiritual clarity, I empower you to lead a life that is as successful as it is soulful.
                        </p>
                        <blockquote className="border-l-4 border-brand-purple pl-6 py-2 italic text-xl text-brand-indigo font-serif">
                            "My mission is simple: to spread sustainable health, authentic happiness, and mental clarity to every corner of the world."
                        </blockquote>
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
}
