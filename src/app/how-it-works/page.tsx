import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/ui/SectionHeader";

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

                <div className="container mx-auto text-center max-w-4xl relative z-10">
                    <SectionHeader
                        subheading="Process"
                        heading="The Journey"
                        description="Every reading follows a sacred path from intention to integration."
                    />
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
                                <div className="bg-brand-moonlight p-10 rounded-[2rem] border border-brand-purple/10 h-full hover:border-brand-purple/30 hover:shadow-lg hover:shadow-brand-purple/5 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <h3 className="font-serif text-2xl mb-4 text-brand-indigo relative z-10">{step.title}</h3>
                                    <p className="text-brand-black/70 leading-relaxed font-light relative z-10">{step.description}</p>
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
