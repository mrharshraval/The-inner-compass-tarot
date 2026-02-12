import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function PoliciesPage() {
    return (
        <main className="min-h-screen bg-brand-moonlight text-brand-black selection:bg-brand-lavender/30">
            <Navbar />

            <section className="pt-32 pb-16 px-6 bg-brand-moonlight relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[image:var(--image-grid-pattern)] opacity-50 pointer-events-none" />
                <div className="container mx-auto text-center max-w-4xl relative z-10">
                    <SectionHeader
                        subheading="Legal & Ethical"
                        heading="Ethics & Policies"
                    />
                </div>
            </section>

            <section className="py-24 px-6 bg-white border-t border-brand-black/5">
                <div className="container mx-auto max-w-3xl space-y-12 text-brand-black/80 leading-relaxed font-light">

                    <div>
                        <h2 className="font-serif text-3xl text-brand-indigo mb-6">Code of Ethics</h2>
                        <ul className="list-disc pl-6 space-y-4">
                            <li><strong>Confidentiality:</strong> All readings are strictly confidential. Your privacy is paramount.</li>
                            <li><strong>Empowerment:</strong> I strive to empower you to make your own decisions. Tarot is a guide, not a dictator.</li>
                            <li><strong>Non-Judgment:</strong> The reading space is a safe, judgment-free zone.</li>
                            <li><strong>Medical/Legal/Financial Disclaimer:</strong> I am not a doctor, lawyer, or financial advisor. Tarot readings are for spiritual guidance and entertainment purposes only. Please consult professionals for specific advice in these areas.</li>
                        </ul>
                    </div>

                    <div className="w-full h-px bg-brand-black/10" />

                    <div>
                        <h2 className="font-serif text-3xl text-brand-indigo mb-6">Cancellation & Rescheduling</h2>
                        <p className="mb-4">
                            Life happens. If you need to reschedule, please provide at least 24 hours notice.
                        </p>
                        <p>
                            Cancellations made less than 24 hours before the session may be subject to a cancellation fee or forfeiture of the deposit.
                        </p>
                    </div>

                    <div className="w-full h-px bg-brand-black/10" />

                    <div>
                        <h2 className="font-serif text-3xl text-brand-indigo mb-6">Refund Policy</h2>
                        <p>
                            Refunds are not provided for completed readings. If you are dissatisfied with a session, please reach out so we can discuss your concerns.
                        </p>
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
}
