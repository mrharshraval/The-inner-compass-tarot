import { Button } from "@/components/ui/Button";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Section } from "@/components/layout/Section";
import { FloatingElement } from "@/components/visual/FloatingElement";
import Link from "next/link";
import { ArrowLeft, BookOpen, Star, Sparkles } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-24">
            <div className="container mx-auto px-6 mb-8">
                <Link href="/" className="inline-flex items-center text-text-secondary hover:text-white transition-colors text-xs uppercase tracking-widest gap-2">
                    <ArrowLeft className="w-4 h-4" /> Back to Void
                </Link>
            </div>

            <Section className="py-12 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

                    {/* Image Area */}
                    <div className="relative">
                        <FloatingElement duration={8} yOffset={10}>
                            <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 relative group">
                                {/* Placeholder for Preeti's Portrait */}
                                <div className="absolute inset-0 bg-space-surface flex items-center justify-center text-text-muted">
                                    <span className="font-cinzel tracking-widest">[Preeti Portrait]</span>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-space-black/80 to-transparent" />

                                {/* Overlay Details */}
                                <div className="absolute bottom-0 left-0 p-8">
                                    <h2 className="font-cinzel text-3xl text-white mb-2">Preeti Jain</h2>
                                    <p className="text-accent-blue text-xs uppercase tracking-widest">Founder & Lead Practitioner</p>
                                </div>
                            </div>
                        </FloatingElement>

                        {/* Decorative Elements */}
                        <div className="absolute -z-10 top-10 -right-10 w-full h-full border border-white/5 rounded-2xl" />
                    </div>

                    {/* Content Area */}
                    <div className="space-y-8">
                        <h1 className="font-cinzel text-4xl md:text-5xl text-text-primary leading-tight">
                            Bridging the <br /> <span className="text-accent-purple">Esoteric</span> & The <span className="text-accent-blue">Real</span>
                        </h1>

                        <div className="space-y-6 text-text-secondary text-lg leading-relaxed font-cormorant">
                            <p>
                                "I spent years in the corporate world, relying on data and logic. But I always felt a hum—a subtle frequency that logic couldn't explain. I turned to Tarot not to escape reality, but to understand it more deeply."
                            </p>
                            <p>
                                My approach is grounded. I don't use crystal balls or dramatic costumes. I use archetypes (Tarot) and nervous system regulation (Reiki) to help high-performing individuals find their center in a chaotic world.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                            <GlassPanel className="p-4 flex items-center gap-4">
                                <div className="p-2 bg-accent-blue/10 rounded-full text-accent-blue"><BookOpen className="w-4 h-4" /></div>
                                <div>
                                    <h4 className="font-cinzel text-sm text-text-primary">Certified</h4>
                                    <p className="text-[10px] text-text-secondary uppercase tracking-widest">Reiki Master L3</p>
                                </div>
                            </GlassPanel>
                            <GlassPanel className="p-4 flex items-center gap-4">
                                <div className="p-2 bg-accent-purple/10 rounded-full text-accent-purple"><Star className="w-4 h-4" /></div>
                                <div>
                                    <h4 className="font-cinzel text-sm text-text-primary">Experienced</h4>
                                    <p className="text-[10px] text-text-secondary uppercase tracking-widest">500+ Readings</p>
                                </div>
                            </GlassPanel>
                        </div>

                        <div className="pt-8">
                            <Link href="/contact">
                                <Button variant="outline">Get in Touch</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}
