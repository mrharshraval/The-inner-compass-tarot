import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/ui/CTASection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContentCard } from "@/components/ui/ContentCard";
import Image from "next/image";

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-brand-moonlight text-brand-black selection:bg-brand-lavender/30">
            <Navbar />

            <section className="pt-32 pb-16 px-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[image:var(--image-grid-pattern)] opacity-50 pointer-events-none" />
                <div className="container mx-auto max-w-6xl relative z-10">
                    <SectionHeader
                        subheading="Blog"
                        heading="Insights"
                        description="Moonlight reflections and tarot wisdom."
                        align="left"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ContentCard
                            imageSrc="/images/blog-rituals.jpg"
                            imageAlt="Tarot & Candles"
                            subheading="Rituals"
                            heading="Creating Sacred Space"
                            description="Simple practices to cleanse your energy and prepare for a reading."
                            actionLink="/blog/rituals"
                            actionLabel="Read Article"
                            align="left"
                        />
                        <ContentCard
                            imageSrc="/images/blog-crystals.jpg"
                            imageAlt="Crystals"
                            subheading="Crystals"
                            heading="Stones for Clarity"
                            description="Which crystals amplify intuition and ground your energy during a session?"
                            actionLink="/blog/crystals"
                            actionLabel="Read Article"
                            align="left"
                        />
                        <ContentCard
                            imageSrc="/images/blog-cleansing.jpg"
                            imageAlt="Smoke Cleansing"
                            subheading="Cleansing"
                            heading="The Art of Smudging"
                            description="Using sage, palo santo, and herbs to clear stagnation from your deck."
                            actionLink="/blog/cleansing"
                            actionLabel="Read Article"
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
