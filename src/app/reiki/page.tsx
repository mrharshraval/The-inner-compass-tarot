import { Button } from "@/components/ui/Button";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Section } from "@/components/layout/Section";
import { FloatingElement } from "@/components/visual/FloatingElement";
import Link from "next/link";
import { ShieldCheck, ArrowLeft, Zap, Heart, Sparkles } from "lucide-react";

export default function ReikiPage() {
    return (
        <main className="min-h-screen pt-24">

            {/* Back Nav */}
            <div className="container mx-auto px-6 mb-8">
                <Link href="/" className="inline-flex items-center text-text-secondary hover:text-white transition-colors text-xs uppercase tracking-widest gap-2">
                    <ArrowLeft className="w-4 h-4" /> Back to Void
                </Link>
            </div>

            {/* HERO */}
            <Section className="py-12 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-indigo/10 border border-accent-indigo/20">
                            <Zap className="w-3 h-3 text-accent-indigo" />
                            <span className="text-[10px] uppercase tracking-[0.2em] text-accent-indigo">Energy Restoration</span>
                        </div>
                        <h1 className="font-cinzel text-5xl md:text-6xl text-text-primary leading-tight">
                            Reiki <br /><span className="text-accent-cyan">Healing</span>
                        </h1>
                        <p className="text-text-secondary text-lg leading-relaxed max-w-md font-cormorant italic">
                            "Your body remembers what your mind tries to forget. Reiki is a gentle, touchless conversation with your nervous system."
                        </p>
                        <div className="pt-4 flex gap-4">
                            <Link href="/booking?service=reiki">
                                <Button>Book Healing</Button>
                            </Link>
                        </div>
                    </div>

                    <div className="relative h-[400px] flex items-center justify-center">
                        {/* Abstract Energy Ball */}
                        <FloatingElement duration={8} yOffset={-15} className="relative z-10">
                            <div className="w-64 h-64 rounded-full border border-accent-cyan/20 bg-accent-cyan/5 backdrop-blur-sm flex items-center justify-center animate-pulse-slow">
                                <div className="w-48 h-48 rounded-full border border-accent-cyan/40" />
                            </div>
                        </FloatingElement>
                        {/* Background Glow */}
                        <div className="absolute inset-0 bg-accent-cyan/10 blur-[120px] rounded-full pointer-events-none" />
                    </div>
                </div>
            </Section>

            {/* BENEFITS */}
            <Section className="bg-white/5 backdrop-blur-sm border-y border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                        <Heart className="w-8 h-8 text-accent-cyan" />
                        <h3 className="font-cinzel text-xl text-text-primary">Stress Release</h3>
                        <p className="text-text-secondary text-sm leading-relaxed">
                            Moves the body from "fight or flight" into "rest and digest". Many clients fall asleep during the session—that is a good thing.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <ShieldCheck className="w-8 h-8 text-accent-cyan" />
                        <h3 className="font-cinzel text-xl text-text-primary">Safety First</h3>
                        <p className="text-text-secondary text-sm leading-relaxed">
                            A strictly non-invasive, trauma-informed practice. You remain fully clothed and in control. Touch is optional (or distance-based).
                        </p>
                    </div>
                    <div className="space-y-4">
                        <Sparkles className="w-8 h-8 text-accent-cyan" />
                        <h3 className="font-cinzel text-xl text-text-primary">Distance Healing</h3>
                        <p className="text-text-secondary text-sm leading-relaxed">
                            Quantum physics suggests energy is not bound by space. Distance sessions are as effective as in-person adjustments.
                        </p>
                    </div>
                </div>
            </Section>

            {/* PRICING / STRUCTURE */}
            <Section>
                <div className="max-w-3xl mx-auto space-y-12">
                    <div className="text-center space-y-4">
                        <h2 className="font-cinzel text-3xl text-text-primary">The Session</h2>
                        <p className="text-text-secondary">USD $95 • 45 Minutes • Distance (Remote)</p>
                    </div>

                    <GlassPanel className="p-8 md:p-12 space-y-8 border-accent-cyan/20">
                        <div className="space-y-4">
                            <h4 className="font-cinzel text-lg text-accent-cyan">01. The Check-in</h4>
                            <p className="text-text-secondary text-sm leading-relaxed">
                                A brief 5-10 minute chat to identify where you are feeling blocked, tired, or anxious. We set the intention for the flow.
                            </p>
                        </div>
                        <div className="w-full h-px bg-white/5" />
                        <div className="space-y-4">
                            <h4 className="font-cinzel text-lg text-accent-cyan">02. The Flow</h4>
                            <p className="text-text-secondary text-sm leading-relaxed">
                                You lie down in your own safe space. I connect energetically and perform the clearing. You may feel warmth, tingling, or simple peace.
                            </p>
                        </div>
                        <div className="w-full h-px bg-white/5" />
                        <div className="space-y-4">
                            <h4 className="font-cinzel text-lg text-accent-cyan">03. Grounding</h4>
                            <p className="text-text-secondary text-sm leading-relaxed">
                                We slowly bring you back. I share any intuitive impressions I picked up during the session, and we ensure you are ready to resume your day.
                            </p>
                        </div>

                        <div className="pt-8 text-center">
                            <Link href="/booking?service=reiki">
                                <Button size="lg" className="w-full md:w-auto hover:border-accent-cyan hover:text-accent-cyan hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]">Begin Restoration</Button>
                            </Link>
                        </div>
                    </GlassPanel>
                </div>
            </Section>

        </main>
    );
}
