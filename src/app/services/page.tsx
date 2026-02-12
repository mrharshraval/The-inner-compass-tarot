import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/ui/CTASection";
import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContentCard } from "@/components/ui/ContentCard";

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-brand-moonlight text-brand-black selection:bg-brand-lavender/30">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-6 bg-brand-moonlight relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[image:var(--image-grid-pattern)] opacity-50 pointer-events-none" />
                <div className="container mx-auto text-center max-w-4xl relative z-10">
                    <SectionHeader
                        subheading="Our Offerings"
                        heading="Tarot Readings"
                        description="Select the guidance that speaks to your soul. Each session is a sacred container for clarity."
                    />
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 px-6 bg-white border-t border-brand-black/5">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <ContentCard
                            imageSrc="/images/service-clarity.jpg"
                            imageAlt="Crystal Light"
                            heading="The Clarity Reading"
                            description="A 30-minute session focused on a specific question or dilemma. Perfect for quick guidance and decision-making."
                            price="$45"
                            actionLabel="Book Now"
                            actionLink="/booking?type=clarity"
                            align="left"
                        />

                        <ContentCard
                            imageSrc="/images/service-deep-dive.jpg"
                            imageAlt="Nebula"
                            heading="The Deep Dive"
                            description="A 60-minute comprehensive reading covering your past/present/future dynamics. Includes natal chart insights if requested."
                            price="$80"
                            actionLabel="Book Now"
                            actionLink="/booking?type=deep-dive"
                            variant="featured"
                            align="left"
                        />
                    </div>
                </div>
            </section>

            <CTASection />
            <Footer />
        </main>
    );
}
