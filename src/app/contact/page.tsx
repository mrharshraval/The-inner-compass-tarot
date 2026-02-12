import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/ui/CTASection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Mail, MapPin, Instagram } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-brand-moonlight text-brand-black selection:bg-brand-lavender/30">
            <Navbar />

            <section className="pt-32 pb-16 px-6 bg-brand-moonlight relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[image:var(--image-grid-pattern)] opacity-50 pointer-events-none" />
                <div className="container mx-auto text-center max-w-4xl relative z-10">
                    <SectionHeader
                        subheading="Get in Touch"
                        heading="Contact"
                        description="Have a question before booking? Utilizing Tarot for an event? I'd love to hear from you."
                    />
                </div>
            </section>

            <section className="py-24 px-6 bg-white border-t border-brand-black/5">
                <div className="container mx-auto max-w-4xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Email */}
                        <div className="bg-[#FAF9F6] p-8 rounded-[2rem] border border-black/5 text-center hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-12 h-12 bg-brand-purple/10 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-purple">
                                <Mail className="w-6 h-6" />
                            </div>
                            <h3 className="font-serif text-xl mb-2 text-brand-black">Email</h3>
                            <p className="text-brand-black/60 mb-4 text-sm">For general inquiries</p>
                            <a href="mailto:hello@innercompass.com" className="text-brand-indigo hover:text-brand-purple transition-colors font-medium">hello@innercompass.com</a>
                        </div>

                        {/* Location */}
                        <div className="bg-[#FAF9F6] p-8 rounded-[2rem] border border-black/5 text-center hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-12 h-12 bg-brand-purple/10 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-purple">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <h3 className="font-serif text-xl mb-2 text-brand-black">Location</h3>
                            <p className="text-brand-black/60 mb-4 text-sm">Based in</p>
                            <span className="text-brand-indigo font-medium">Ahmedabad, India</span>
                        </div>

                        {/* Social */}
                        <div className="bg-[#FAF9F6] p-8 rounded-[2rem] border border-black/5 text-center hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-12 h-12 bg-brand-purple/10 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-purple">
                                <Instagram className="w-6 h-6" />
                            </div>
                            <h3 className="font-serif text-xl mb-2 text-brand-black">Social</h3>
                            <p className="text-brand-black/60 mb-4 text-sm">Follow the journey</p>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-brand-indigo hover:text-brand-purple transition-colors font-medium">@innercompass</a>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection />
            <Footer />
        </main>
    );
}
