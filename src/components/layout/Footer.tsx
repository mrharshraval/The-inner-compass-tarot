import Link from "next/link";
import { Section } from "./Section";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-white/5 bg-space-black/50 backdrop-blur-xl">
            <Section className="py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/5 pb-12">
                    {/* Brand */}
                    <div className="md:col-span-2 space-y-4">
                        <span className="font-cinzel text-lg tracking-[0.2em] uppercase text-text-primary">
                            The Inner Compass
                        </span>
                        <p className="text-text-secondary text-sm font-inter leading-relaxed max-w-xs">
                            Guidance from the void. Grounded in reality, elevated by intuition.
                            Tarot and Reiki for the modern soul.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="font-cinzel text-xs text-accent-blue uppercase tracking-widest">Explore</h4>
                        <ul className="space-y-2 text-sm text-text-secondary font-inter">
                            <li><Link href="/tarot" className="hover:text-white transition-colors">Tarot Readings</Link></li>
                            <li><Link href="/reiki" className="hover:text-white transition-colors">Reiki Healing</Link></li>
                            <li><Link href="/about" className="hover:text-white transition-colors">About Preeti</Link></li>
                            <li><Link href="/blog" className="hover:text-white transition-colors">Journal</Link></li>
                        </ul>
                    </div>

                    {/* Legal / Contact */}
                    <div className="space-y-4">
                        <h4 className="font-cinzel text-xs text-accent-blue uppercase tracking-widest">Studio</h4>
                        <ul className="space-y-2 text-sm text-text-secondary font-inter">
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                            <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                            <li><Link href="/booking" className="hover:text-white transition-colors">Book a Session</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-muted font-inter">
                    <p>© {currentYear} The Inner Compass Tarot. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-text-secondary transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-text-secondary transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </Section>
        </footer>
    );
}
