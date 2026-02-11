import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/ui/Hero";
import { Footer } from "@/components/layout/Footer";
import { GoogleReviews } from "@/components/ui/GoogleReviews";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-moonlight text-brand-black selection:bg-brand-lavender/30">
      <Navbar />

      {/* Section 1: Hero */}
      <Hero />

      {/* Section 2: Services */}
      <section className="py-24 px-6 bg-white relative overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-black/40 mb-4 block">Our Offerings</span>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-indigo mb-6">Illuminated Readings</h2>
            <p className="max-w-2xl mx-auto text-brand-black/70 leading-relaxed font-light text-lg">
              Select the guidance that speaks to your soul. Each session is a sacred container for clarity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-brand-moonlight text-brand-black p-8 rounded-[2rem] text-center group cursor-pointer hover:-translate-y-2 transition-transform duration-500 border border-brand-purple/10 hover:border-brand-purple/30 hover:shadow-lg hover:shadow-brand-purple/5">
              <div className="w-full h-48 bg-brand-purple/5 rounded-t-[1.5rem] mb-8 relative overflow-hidden mx-auto flex items-center justify-center">
                <Star className="w-16 h-16 text-brand-purple opacity-20" />
              </div>
              <h3 className="font-serif text-2xl mb-4 text-brand-indigo">The Clarity</h3>
              <p className="text-brand-black/70 mb-8 text-sm leading-relaxed">Swift insight for pressing questions. A flash of lightning in the dark.</p>
              <Button variant="outline" className="w-full border-brand-purple/20 text-brand-purple hover:bg-brand-purple hover:text-white">
                Book Now
              </Button>
            </div>

            {/* Card 2 - Popular */}
            <div className="bg-brand-indigo text-white p-8 rounded-[2rem] text-center group cursor-pointer hover:-translate-y-2 transition-transform duration-500 border-2 border-brand-indigo shadow-xl shadow-brand-indigo/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Star className="w-32 h-32 rotate-12" />
              </div>
              <div className="w-full h-48 bg-white/5 rounded-t-[1.5rem] mb-8 relative overflow-hidden mx-auto border border-white/5 flex items-center justify-center">
                <Star className="w-16 h-16 text-white opacity-30" />
              </div>
              <div className="flex items-center justify-center gap-2 mb-4">
                <h3 className="font-serif text-2xl">The Deep Dive</h3>
                <span className="text-[10px] bg-brand-gold text-brand-black px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">Popular</span>
              </div>
              <p className="text-white/80 mb-8 text-sm leading-relaxed">Comprehensive soul mapping. Understand the terrain of your journey.</p>
              <Button className="bg-brand-gold text-brand-black hover:bg-brand-gold/90 w-full border-0">
                Book Now
              </Button>
            </div>

            {/* Card 3 */}
            <div className="bg-brand-moonlight text-brand-black p-8 rounded-[2rem] text-center group cursor-pointer hover:-translate-y-2 transition-transform duration-500 border border-brand-purple/10 hover:border-brand-purple/30 hover:shadow-lg hover:shadow-brand-purple/5">
              <div className="w-full h-48 bg-brand-purple/5 rounded-t-[1.5rem] mb-8 relative overflow-hidden mx-auto flex items-center justify-center">
                <Star className="w-16 h-16 text-brand-purple opacity-20" />
              </div>
              <h3 className="font-serif text-2xl mb-4 text-brand-indigo">The Year Ahead</h3>
              <p className="text-brand-black/70 mb-8 text-sm leading-relaxed">Twelve months of guidance. Prepare for the cycles to come.</p>
              <Button variant="outline" className="w-full border-brand-purple/20 text-brand-purple hover:bg-brand-purple hover:text-white">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: About / Philosophy */}
      <section className="py-32 px-6 bg-brand-moonlight border-t border-brand-black/5">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            {/* Decorative Image Placeholder Area */}
            <div className="aspect-[4/5] bg-brand-gray rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-brand-indigo/10" />
              {/*  Ideally we put an image here later */}
            </div>

            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-2xl shadow-xl border border-black/5 max-w-xs">
              <p className="font-serif text-xl italic text-brand-indigo mb-2">"Preeti's readings are not just predictions; they are therapy for the soul."</p>
              <p className="text-xs font-bold uppercase tracking-widest text-brand-black/40">— Sarah J., New York</p>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="font-serif text-5xl md:text-6xl text-brand-black leading-[1.1]">
              Guidance grounded in <br /><span className="italic text-brand-purple">reality.</span>
            </h2>
            <p className="text-brand-black/70 text-lg leading-relaxed max-w-md font-light">
              We strip away the woo-woo to get to the heart of the matter. Practical, actionable, and deeply resonant advice for modern life.
            </p>

            <div className="flex gap-4 pt-4">
              <div className="flex flex-col">
                <span className="text-3xl font-serif text-brand-indigo">10+</span>
                <span className="text-xs uppercase tracking-widest text-brand-black/50">Years Exp</span>
              </div>
              <div className="w-px h-12 bg-black/10 mx-4" />
              <div className="flex flex-col">
                <span className="text-3xl font-serif text-brand-indigo">5k+</span>
                <span className="text-xs uppercase tracking-widest text-brand-black/50">Readings</span>
              </div>
            </div>

            <Button className="mt-4" size="lg">
              Read Our Philosophy
            </Button>
          </div>
        </div>
      </section>

      {/* Section 4: Google Reviews */}
      <GoogleReviews />

      <Footer />
    </main>
  );
}
