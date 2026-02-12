import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BookingForm } from "@/components/ui/BookingForm";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function BookingPage() {
    return (
        <main className="min-h-screen bg-brand-moonlight text-brand-black selection:bg-brand-lavender/30">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-6 bg-brand-moonlight relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[image:var(--image-grid-pattern)] opacity-50 pointer-events-none" />
                <div className="container mx-auto text-center max-w-4xl relative z-10">
                    <SectionHeader
                        subheading="Booking"
                        heading="Book Your Session"
                        description="Select a time that calls to you. All sessions are conducted via Zoom."
                    />
                </div>
            </section>

            {/* Calendar Section */}
            <section className="py-24 px-6 bg-white border-t border-brand-black/5">
                <div className="container mx-auto">
                    <div className="bg-brand-moonlight rounded-[2rem] border border-brand-purple/10 p-8 md:p-12 max-w-4xl mx-auto shadow-lg shadow-brand-purple/5 relative overflow-hidden">
                        <div className="absolute inset-0 bg-brand-purple/5 opacity-50 pointer-events-none" />
                        <div className="relative z-10">
                            <BookingForm />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
