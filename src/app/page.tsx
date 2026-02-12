import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/ui/Hero";
import { Footer } from "@/components/layout/Footer";
import { GoogleReviews } from "@/components/ui/GoogleReviews";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/ui/CTASection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContentCard } from "@/components/ui/ContentCard";
import Link from "next/link";
import Image from "next/image";
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
          <SectionHeader
            subheading="Our Offerings"
            heading="Illuminated Readings"
            description="Select the guidance that speaks to your soul. Each session is a sacred container for clarity."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ContentCard
              imageSrc="/images/service-clarity.jpg"
              imageAlt="Crystal Light"
              heading="The Clarity"
              description="Swift insight for pressing questions. A flash of lightning in the dark."
              actionLink="/services"
            />

            <ContentCard
              imageSrc="/images/service-deep-dive.jpg"
              imageAlt="Nebula"
              heading="The Deep Dive"
              description="Comprehensive soul-mapping. Uncover the roots of your path."
              actionLink="/services"
              variant="featured"
            />

            <ContentCard
              imageSrc="/images/service-year-ahead.jpg"
              imageAlt="Moon Phases"
              heading="The Year Ahead"
              description="Twelve months of guidance. Prepare for the cycles to come."
              actionLink="/services"
            />
          </div>
        </div>
      </section>

      {/* Section 3: About / Philosophy */}
      <section className="py-32 px-6 bg-brand-moonlight border-t border-brand-black/5">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            {/* Decorative Image Placeholder Area */}
            <div className="aspect-[4/5] bg-brand-gray rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-brand-indigo/10 z-10" />
              <Image
                src="/images/about-preeti.jpg"
                alt="Preeti Jain - Spiritual Guide"
                fill
                className="object-cover"
              />
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

      <CTASection />
      <Footer />
    </main>
  );
}
