import { Button } from "@/components/ui/Button";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Section } from "@/components/layout/Section";
import { FloatingElement } from "@/components/visual/FloatingElement";
import Link from "next/link";
import { User, ArrowLeft, Star, Gem } from "lucide-react";

export default function CombinedPage() {
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
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20">
                            <Star className="w-3 h-3 text-accent-blue" />
                            <span className="text-[10px] uppercase tracking-[0.2em] text-accent-blue">Signature Experience</span>
                        </div>
                        <h1 className="font-cinzel text-5xl md:text-6xl text-text-primary leading-tight">
                            The <br /><span className="text-accent-blue">Alignment</span>
                        </h1>
                        <p className="text-text-secondary text-lg leading-relaxed max-w-md font-cormorant italic">
                            "Mind and body are not separate. The Alignment addresses the intellectual questions via Tarot, then integrates the answers somatically via Reiki."
                        </p>
                        <div className="pt-4 flex gap-4">
                            <Link href="/booking?service=combined">
                                <Button>Book Alignment</Button>
                            </Link>
                        </div>
                    </div>

                    <div className="relative h-[400px] flex items-center justify-center">
                        {/* Sacred Geometry / Alignment Visual */}
                        <FloatingElement duration={10} yOffset={20} className="relative z-10">
                            <div className="relative w-72 h-72">
                                <div className="absolute inset-0 border border-accent-blue/20 rotate-45" />
                                <div className="absolute inset-0 border border-accent-blue/20 rotate-12" />
                                <div className="absolute inset-4 border border-accent-blue/40 rounded-full" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Gem className="w-16 h-16 text-accent-blue animate-pulse-slow" />
                                </div>
                            </div>
                        </FloatingElement>
                        {/* Background Glow */}
                        <div className="absolute inset-0 bg-accent-blue/10 blur-[100px] rounded-full pointer-events-none" />
                    </div>
                </div>
            </Section>

            {/* WHY COMBINE? */}
            <Section className="bg-white/5 backdrop-blur-sm border-y border-white/5">
                <div className="max-w-4xl mx-auto text-center space-y-12">
                    <h3 className="font-cinzel text-2xl text-text-primary">Why Combine Them?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                        <div>
                            <h4 className="font-cinzel text-lg text-accent-purple mb-4">The Information</h4>
                            <p className="text-text-secondary text-sm leading-relaxed">
                                Tarot gives us the "What" and the "Why". It illuminates the path and brings hidden dynamics to the surface. But information alone can sometimes leave us feeling "heady" or ungrounded.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-cinzel text-lg text-accent-cyan mb-4">The Integration</h4>
                            <p className="text-text-secondary text-sm leading-relaxed">
                                Reiki provides the "How". It takes the insights from the reading and helps your nervous system process them. It settles the energy so you walk away not just knowing the path, but feeling ready to walk it.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* PRICING / STRUCTURE */}
            <Section>
                <div className="max-w-3xl mx-auto space-y-12">
                    <div className="text-center space-y-4">
                        <h2 className="font-cinzel text-3xl text-text-primary">The Journey</h2>
                        <p className="text-text-secondary">USD $195 • 90 Minutes • Comprehensive</p>
                    </div>

                    <GlassPanel className="p-8 md:p-12 space-y-8 border-accent-blue/20 bg-accent-blue/5">
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <h4 className="font-cinzel text-lg text-accent-blue">Part 1: The Reading</h4>
                                <span className="text-xs uppercase tracking-widest text-text-muted">45 Mins</span>
                            </div>
                            <p className="text-text-secondary text-sm leading-relaxed">
                                We tackle your primary questions with a full Celtic Cross spread. We hunt for clarity and truth.
                            </p>
                        </div>
                        <div className="w-full h-px bg-white/5" />
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <h4 className="font-cinzel text-lg text-accent-cyan">Part 2: The Clearing</h4>
                                <span className="text-xs uppercase tracking-widest text-text-muted">30 Mins</span>
                            </div>
                            <p className="text-text-secondary text-sm leading-relaxed">
                                We transition into a Reiki session to clear any resistance or anxiety unearthed by the readings.
                            </p>
                        </div>
                        <div className="w-full h-px bg-white/5" />
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <h4 className="font-cinzel text-lg text-text-primary">Part 3: Synthesis</h4>
                                <span className="text-xs uppercase tracking-widest text-text-muted">15 Mins</span>
                            </div>
                            <p className="text-text-secondary text-sm leading-relaxed">
                                We seal the practice. You leave with a unified state of mind and body.
                            </p>
                        </div>

                        <div className="pt-8 text-center">
                            <Link href="/booking?service=combined">
                                <Button size="lg" className="w-full md:w-auto shadow-[0_0_30px_rgba(66,133,244,0.2)]">Book The Alignment</Button>
                            </Link>
                        </div>
                    </GlassPanel>
                </div>
            </Section>

        </main>
    );
}
