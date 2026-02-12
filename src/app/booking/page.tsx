import { Button } from "@/components/ui/Button";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Section } from "@/components/layout/Section";
import Link from "next/link";
import { Calendar, ArrowLeft, CheckCircle2 } from "lucide-react";

export default function BookingPage() {
    return (
        <main className="min-h-screen pt-24 pb-12">
            <div className="container mx-auto px-6 mb-8">
                <Link href="/" className="inline-flex items-center text-text-secondary hover:text-white transition-colors text-xs uppercase tracking-widest gap-2">
                    <ArrowLeft className="w-4 h-4" /> Back to Void
                </Link>
            </div>

            <Section className="py-0">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12 space-y-4">
                        <h1 className="font-cinzel text-4xl text-text-primary">Secure a Session</h1>
                        <p className="text-text-secondary">Choose your time. Set your intention. The rest will follow.</p>
                    </div>

                    <GlassPanel className="p-8 md:p-12 min-h-[600px] flex items-center justify-center border-accent-blue/20 relative overflow-hidden">
                        {/* Placeholder for Scheduling Widget (e.g. Calendly/Acuity) */}
                        <div className="text-center space-y-6 max-w-md relative z-10">
                            <div className="w-16 h-16 bg-accent-blue/10 rounded-full flex items-center justify-center mx-auto text-accent-blue">
                                <Calendar className="w-8 h-8" />
                            </div>
                            <h3 className="font-cinzel text-xl text-text-primary">Booking System Integration</h3>
                            <p className="text-text-secondary text-sm leading-relaxed">
                                This area is ready for your scheduling widget (Calendly, Acuity, Square).
                                It will seamlessly load your available slots here.
                            </p>
                            <div className="pt-4">
                                <Button variant="outline">Simulate Booking Flow</Button>
                            </div>
                        </div>

                        {/* Background Decor */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-blue/5 to-transparent pointer-events-none" />
                    </GlassPanel>

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        <div className="space-y-2">
                            <CheckCircle2 className="w-5 h-5 text-accent-blue mx-auto" />
                            <h4 className="font-cinzel text-sm text-text-primary">Instant Confirmation</h4>
                            <p className="text-xs text-text-muted">You'll receive a Google Meet link immediately.</p>
                        </div>
                        <div className="space-y-2">
                            <CheckCircle2 className="w-5 h-5 text-accent-blue mx-auto" />
                            <h4 className="font-cinzel text-sm text-text-primary">Secure Payment</h4>
                            <p className="text-xs text-text-muted">Encrypted processing via Stripe/Square.</p>
                        </div>
                        <div className="space-y-2">
                            <CheckCircle2 className="w-5 h-5 text-accent-blue mx-auto" />
                            <h4 className="font-cinzel text-sm text-text-primary">Easy Rescheduling</h4>
                            <p className="text-xs text-text-muted">Life happens. Move your slot up to 24h prior.</p>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}
