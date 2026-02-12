import { GlassPanel } from "@/components/ui/GlassPanel";
import { Section } from "@/components/layout/Section";
import Link from "next/link";
import { ArrowLeft, HelpCircle } from "lucide-react";

export default function FAQPage() {
    const faqs = [
        {
            q: "Do I need to believe in 'magic' for this to work?",
            a: "Not at all. Tarot is a system of archetypes (like the Hero's Journey) that helps structure your thoughts. Reiki is a relaxation technique for your nervous system. You only need an open mind, not a specific belief system."
        },
        {
            q: "Is Reiki safe if I have a medical condition?",
            a: "Yes, Reiki is non-invasive and gentle. However, it is a complementary therapy, not a substitute for medical treatment. Always consult your doctor for medical concerns."
        },
        {
            q: "What if the Tarot cards predict something bad?",
            a: "My philosophy is that the future is not fixed. The cards show the likely outcome of *current* patterns. If you don't like what you see, the reading empowers you to change those patterns."
        },
        {
            q: "How does a remote Reiki session work?",
            a: "Energy is not bound by physical proximity (similar to how a phone signal connects us invisibly). We connect via voice/video, set an intention, and you relax in your own space while I perform the clearing."
        }
    ];

    return (
        <main className="min-h-screen pt-24 pb-12">
            <div className="container mx-auto px-6 mb-8">
                <Link href="/" className="inline-flex items-center text-text-secondary hover:text-white transition-colors text-xs uppercase tracking-widest gap-2">
                    <ArrowLeft className="w-4 h-4" /> Back to Void
                </Link>
            </div>

            <Section className="py-0">
                <div className="max-w-3xl mx-auto space-y-12">
                    <div className="text-center space-y-4">
                        <h1 className="font-cinzel text-4xl text-text-primary">Frequently Asked</h1>
                        <p className="text-text-secondary">Answers to common curiosities.</p>
                    </div>

                    <div className="space-y-6">
                        {faqs.map((faq, i) => (
                            <GlassPanel key={i} className="p-8 space-y-4">
                                <h3 className="font-cinzel text-lg text-accent-blue flex items-start gap-3">
                                    <HelpCircle className="w-5 h-5 shrink-0 mt-1 opacity-50" />
                                    {faq.q}
                                </h3>
                                <p className="text-text-secondary text-sm leading-relaxed pl-8">
                                    {faq.a}
                                </p>
                            </GlassPanel>
                        ))}
                    </div>

                    <div className="text-center pt-12">
                        <p className="text-text-muted text-sm mb-4">Still have questions?</p>
                        <Link href="/contact" className="text-accent-blue border-b border-accent-blue/30 hover:text-white hover:border-white transition-colors pb-1 text-sm uppercase tracking-widest">
                            Contact Support
                        </Link>
                    </div>
                </div>
            </Section>
        </main>
    );
}
