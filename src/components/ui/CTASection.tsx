import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Sparkles } from "lucide-react";

import Image from "next/image";

export function CTASection() {
    return (
        <section className="py-32 relative overflow-hidden text-white">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/service-deep-dive.jpg"
                    alt="Mystical Nebula"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-brand-indigo/90 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-indigo via-brand-indigo/50 to-transparent" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="flex justify-center mb-6">
                    <Sparkles className="w-10 h-10 text-brand-gold animate-pulse" />
                </div>
                <h2 className="font-serif text-5xl md:text-6xl mb-6 leading-tight tracking-tight">
                    Ready to Uncover Your Truth?
                </h2>
                <p className="text-white/90 text-xl md:text-2xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                    The cards are waiting to tell your story. Step into the light of clarity and let the universe speak to you.
                </p>
                <Button
                    asChild
                    size="lg"
                    className="bg-brand-gold text-brand-black hover:bg-white hover:text-brand-indigo font-bold px-12 py-8 text-xl rounded-full shadow-2xl shadow-brand-gold/30 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                >
                    <Link href="/booking">Book Your Reading</Link>
                </Button>
            </div>
        </section>
    );
}
