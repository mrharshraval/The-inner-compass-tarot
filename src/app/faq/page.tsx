import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/ui/CTASection";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function FAQPage() {
    const faqs = [
        {
            question: "What is the difference between Tarot and Oracle cards?",
            answer: "Tarot follows a traditional structure of 78 cards with specific meanings and archetypes. Oracle decks are more free-flowing and vary greatly in structure and theme. I primarily use Tarot for deep structural analysis and Oracle cards for final clarifying messages."
        },
        {
            question: "Do I need to be present for a reading?",
            answer: "For live Zoom sessions, yes. However, I also offer recorded video readings where you send your questions, and I record the session for you to watch at your convenience. Energy transcends time and space."
        },
        {
            question: "Can Tarot predict the future?",
            answer: "Tarot reflects the current energy and likely outcomes based on your present path. It is a tool for empowerment, not fatalism. You always have free will to change your trajectory."
        },
        {
            question: "How often should I get a reading?",
            answer: "It depends on your needs. Some clients book monthly for the cycle ahead, others come only when facing a major crossroads. I generally recommend waiting at least 3-4 weeks between readings on the same topic."
        },
        {
            question: "What if I get a 'bad' card?",
            answer: "There are no bad cards, only challenging lessons. Cards like Death or The Tower often signify necessary transformation and liberation. I will guide you through the wisdom of these archetypes."
        }
    ];

    return (
        <main className="min-h-screen bg-brand-moonlight text-brand-black selection:bg-brand-lavender/30">
            <Navbar />

            <section className="pt-32 pb-16 px-6 bg-brand-moonlight relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[image:var(--image-grid-pattern)] opacity-50 pointer-events-none" />
                <div className="container mx-auto text-center max-w-4xl relative z-10">
                    <SectionHeader
                        subheading="Common Questions"
                        heading="FAQ"
                        description="Curiosity is the first step to clarity. Here are answers to common questions about my practice."
                    />
                </div>
            </section>

            <section className="py-24 px-6 bg-white border-t border-brand-black/5">
                <div className="container mx-auto max-w-3xl space-y-8">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-[#FAF9F6] p-8 rounded-[2rem] border border-black/5 hover:border-brand-purple/20 transition-colors">
                            <h3 className="font-serif text-xl md:text-2xl mb-4 text-brand-indigo">{faq.question}</h3>
                            <p className="text-brand-black/70 leading-relaxed font-light">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </section>

            <CTASection />
            <Footer />
        </main>
    );
}
