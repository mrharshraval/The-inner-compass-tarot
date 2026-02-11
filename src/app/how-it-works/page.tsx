import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function HowItWorksPage() {
    const steps = [
        {
            number: "01",
            title: "Set Your Intention",
            description: "Before we meet, take a moment to reflect on what seeks clarity in your life. Come with an open heart."
        },
        {
            number: "02",
            title: "The Reading",
            description: "We will shuffle the deck together, energetically connecting. I will translate the imagery into guidance."
        },
        {
            number: "03",
            title: "Integration",
            description: "You leave not just with answers, but with actionable wisdom to integrate into your daily journey."
        }
    ];

    return (
        <main className="min-h-screen bg-brand-moonlight text-brand-black selection:bg-brand-lavender/30">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-6 bg-brand-moonlight relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[image:var(--image-grid-pattern)] opacity-50 pointer-events-none" />
                <div className="container mx-auto text-center max-w-4xl relative z-10">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-black/40 mb-4 block">Process</span>
                    <h1 className="font-serif text-5xl md:text-7xl mb-6 text-brand-black leading-tight">
                        The Journey
                    </h1>
                    <p className="max-w-2xl mx-auto text-brand-black/70 text-lg leading-relaxed font-light">
                        Every reading follows a sacred path from intention to integration.
                    </p>
                </div>
            </section>

            {/* Steps Section */}
            <section className="py-24 px-6 bg-white border-t border-brand-black/5">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                        {steps.map((step, index) => (
                            <div key={step.number} className="relative group">
                                <span className="text-9xl font-serif text-brand-lavender/20 absolute -top-12 -left-6 -z-10 group-hover:text-brand-lavender/30 transition-colors">
                                    {step.number}
                                </span>
                                <div className="bg-[#FAF9F6] p-8 rounded-[2rem] border border-black/5 h-full hover:shadow-lg transition-all duration-300">
                                    <h3 className="font-serif text-2xl mb-4 text-brand-black">{step.title}</h3>
                                    <p className="text-brand-black/70 leading-relaxed font-light">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
