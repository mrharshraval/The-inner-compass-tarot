import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Star } from "lucide-react";

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-brand-moonlight text-brand-black selection:bg-brand-lavender/30">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-6 bg-brand-moonlight relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[image:var(--image-grid-pattern)] opacity-50 pointer-events-none" />
                <div className="container mx-auto text-center max-w-4xl relative z-10">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-black/40 mb-4 block">Our Offerings</span>
                    <h1 className="font-serif text-5xl md:text-7xl mb-6 text-brand-black leading-tight">
                        Tarot Readings
                    </h1>
                    <p className="max-w-2xl mx-auto text-brand-black/70 text-lg leading-relaxed font-light">
                        Select the guidance that speaks to your soul. Each session is a sacred container for clarity.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 px-6 bg-white border-t border-brand-black/5">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* Service Card 1 */}
                        <div className="bg-brand-moonlight text-brand-black p-10 rounded-[2rem] group cursor-pointer hover:-translate-y-2 transition-transform duration-500 border border-brand-purple/10 hover:border-brand-purple/30 hover:shadow-lg hover:shadow-brand-purple/5">
                            <div className="w-full h-48 bg-brand-purple/5 rounded-t-[1.5rem] mb-8 relative overflow-hidden mx-auto flex items-center justify-center">
                                <Star className="w-16 h-16 text-brand-purple opacity-20" />
                            </div>
                            <h2 className="font-serif text-3xl mb-4 text-brand-indigo">The Clarity Reading</h2>
                            <p className="text-brand-black/70 mb-6 leading-relaxed">
                                A 30-minute session focused on a specific question or dilemma. Perfect for quick guidance and decision-making.
                            </p>
                            <div className="flex items-center justify-between mt-8 pt-6 border-t border-brand-purple/10">
                                <span className="text-brand-purple font-serif text-2xl italic">$45</span>
                                <Button variant="outline" className="rounded-full border-brand-purple/20 text-brand-purple hover:bg-brand-purple hover:text-white" asChild>
                                    <Link href="/booking?type=clarity">Book Now</Link>
                                </Button>
                            </div>
                        </div>

                        {/* Service Card 2 */}
                        <div className="bg-brand-indigo text-white p-10 rounded-[2rem] group cursor-pointer hover:-translate-y-2 transition-transform duration-500 border-2 border-brand-indigo shadow-xl shadow-brand-indigo/20 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <Star className="w-32 h-32 rotate-12" />
                            </div>
                            <div className="w-full h-48 bg-white/5 rounded-t-[1.5rem] mb-8 relative overflow-hidden mx-auto border border-white/5 flex items-center justify-center">
                                <Star className="w-16 h-16 text-white opacity-30" />
                            </div>
                            <div className="flex items-center gap-2 mb-4">
                                <h2 className="font-serif text-3xl">The Deep Dive</h2>
                                <span className="text-[10px] bg-brand-gold text-brand-black px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">Popular</span>
                            </div>
                            <p className="text-white/80 mb-6 leading-relaxed">
                                A 60-minute comprehensive soul mapping. We explore your current path, hidden blockages, and future potential.
                            </p>
                            <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
                                <span className="text-brand-gold font-serif text-2xl italic">$85</span>
                                <Button className="bg-brand-gold text-brand-black hover:bg-brand-gold/90 rounded-full border-0" asChild>
                                    <Link href="/booking?type=deep-dive">Book Now</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
