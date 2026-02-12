import { Button } from "@/components/ui/Button";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Section } from "@/components/layout/Section";
import Link from "next/link";
import { ArrowLeft, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen pt-24 pb-12">
            <div className="container mx-auto px-6 mb-8">
                <Link href="/" className="inline-flex items-center text-text-secondary hover:text-white transition-colors text-xs uppercase tracking-widest gap-2">
                    <ArrowLeft className="w-4 h-4" /> Back to Void
                </Link>
            </div>

            <Section className="py-0">
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h1 className="font-cinzel text-4xl text-text-primary">Get in Touch</h1>
                            <p className="text-text-secondary pt-2">
                                For collaborations, press inquiries, or questions about your session.
                            </p>
                        </div>

                        <div className="space-y-6 pt-8">
                            <div className="flex items-center gap-4 text-text-secondary">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                                    <Mail className="w-4 h-4 text-accent-blue" />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-text-muted">Email</p>
                                    <a href="mailto:hello@innercompass.com" className="hover:text-white transition-colors">hello@innercompass.com</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-text-secondary">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                                    <MapPin className="w-4 h-4 text-accent-blue" />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-text-muted">Studio</p>
                                    <p>Virtual (Global) • Based in San Francisco, CA</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <GlassPanel className="p-8 space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-text-muted">Name</label>
                            <input type="text" className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-text-primary focus:outline-none focus:border-accent-blue/50 transition-colors" placeholder="Your Name" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-text-muted">Email</label>
                            <input type="email" className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-text-primary focus:outline-none focus:border-accent-blue/50 transition-colors" placeholder="email@example.com" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-text-muted">Message</label>
                            <textarea className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-text-primary focus:outline-none focus:border-accent-blue/50 transition-colors min-h-[120px]" placeholder="How can we help?" />
                        </div>
                        <Button className="w-full">Send Message</Button>
                    </GlassPanel>

                </div>
            </Section>
        </main>
    );
}
