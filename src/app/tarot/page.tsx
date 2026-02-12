import { Button } from "@/components/ui/Button";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Section } from "@/components/layout/Section";
import { FloatingElement } from "@/components/visual/FloatingElement";
import Link from "next/link";
import { Sparkles, ArrowLeft, Clock, Eye, MessageCircle } from "lucide-react";

export default function TarotPage() {
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
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-purple/10 border border-accent-purple/20">
                            <Sparkles className="w-3 h-3 text-accent-purple" />
                            <span className="text-[10px] uppercase tracking-[0.2em] text-accent-purple">Archetypal Mirroring</span>
                        </div>
                        <h1 className="font-cinzel text-5xl md:text-6xl text-text-primary leading-tight">
                            Tarot <br /><span className="text-accent-blue">Analysis</span>
                        </h1>
                        <p className="text-text-secondary text-lg leading-relaxed max-w-md font-cormorant italic">
                            "The cards do not predict the future. They reveal the hidden architecture of the present, allowing you to build the future you desire."
                        </p>
                        <div className="pt-4 flex gap-4">
                            <Link href="/booking?service=tarot">
                                <Button>Book Reading</Button>
                            </Link>
                        </div>
                    </div>

                    <div className="relative h-[400px] flex items-center justify-center">
                        {/* Abstract Card Floater */}
                        <FloatingElement duration={6} yOffset={20} className="relative z-10">
                            <div className="w-64 h-96 bg-space-surface border border-white/10 rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/20 to-transparent opacity-50" />
                                <div className="absolute inset-2 border border-white/5 rounded-xl" />
                                <Sparkles className="w-12 h-12 text-accent-blue/50 group-hover:text-accent-blue transition-colors duration-700" />
                            </div>
                        </FloatingElement>
                        {/* Background Glow */}
                        <div className="absolute inset-0 bg-accent-purple/20 blur-[100px] rounded-full pointer-events-none" />
                    </div>
                </div>
            </Section>

            {/* DETAILS */}
            <Section className="bg-white/5 backdrop-blur-sm border-y border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                        <Clock className="w-8 h-8 text-accent-blue" />
                        <h3 className="font-cinzel text-xl text-text-primary">60 Minutes</h3>
                        <p className="text-text-secondary text-sm leading-relaxed">
                            A focused hour dedicated to untangling one or two complex life areas. Sufficient time for deep exploration without fatigue.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <Eye className="w-8 h-8 text-accent-blue" />
                        <h3 className="font-cinzel text-xl text-text-primary">Clarity Over Hype</h3>
                        <p className="text-text-secondary text-sm leading-relaxed">
                            We avoid "doom and gloom" or "tall dark strangers". This is strategic guidance for relationships, career, and self-growth.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <MessageCircle className="w-8 h-8 text-accent-blue" />
                        <h3 className="font-cinzel text-xl text-text-primary">Actionable</h3>
                        <p className="text-text-secondary text-sm leading-relaxed">
                            You leave with a recording of the session and a set of practical "soul-tasks" to integrate the guidance.
                        </p>
                    </div>
                </div>
            </Section>

            {/* PRICING / STRUCTURE */}
            <Section>
                <div className="max-w-3xl mx-auto space-y-12">
                    <div className="text-center space-y-4">
                        <h2 className="font-cinzel text-3xl text-text-primary">The Reading</h2>
                        <p className="text-text-secondary">USD $120 • Virtual via Zoom</p>
                    </div>

                    <GlassPanel className="p-8 md:p-12 space-y-8">
                        <div className="space-y-4">
                            <h4 className="font-cinzel text-lg text-accent-blue">01. Calibration</h4>
                            <p className="text-text-secondary text-sm leading-relaxed">
                                We begin by grounding. You share your context, but you don't need to "feed" me information. The cards will do the heavy lifting.
                            </p>
                        </div>
                        <div className="w-full h-px bg-white/5" />
                        <div className="space-y-4">
                            <h4 className="font-cinzel text-lg text-accent-blue">02. The Spread</h4>
                            <p className="text-text-secondary text-sm leading-relaxed">
                                I use a custom 10-card "Celtic Cross" variation to map the visible and invisible influences on your situation.
                            </p>
                        </div>
                        <div className="w-full h-px bg-white/5" />
                        <div className="space-y-4">
                            <h4 className="font-cinzel text-lg text-accent-blue">03. Verification</h4>
                            <p className="text-text-secondary text-sm leading-relaxed">
                                We test the guidance against your reality. Does it resonate? Does it empower? We adjust the lens until the picture is sharp.
                            </p>
                        </div>

                        <div className="pt-8 text-center">
                            <Link href="/booking?service=tarot">
                                <Button size="lg" className="w-full md:w-auto">Secure Your Space</Button>
                            </Link>
                        </div>
                    </GlassPanel>
                </div>
            </Section>

        </main>
    );
}
