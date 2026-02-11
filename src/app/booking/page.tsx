import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function BookingPage() {
    return (
        <main className="min-h-screen bg-brand-moonlight text-brand-black selection:bg-brand-lavender/30">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-6 bg-brand-moonlight relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[image:var(--image-grid-pattern)] opacity-50 pointer-events-none" />
                <div className="container mx-auto text-center max-w-4xl relative z-10">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-black/40 mb-4 block">Booking</span>
                    <h1 className="font-serif text-5xl md:text-7xl mb-6 text-brand-black leading-tight">
                        Book Your Session
                    </h1>
                    <p className="text-brand-black/70 max-w-xl mx-auto text-lg leading-relaxed font-light">
                        Select a time that calls to you. All sessions are conducted via Zoom.
                    </p>
                </div>
            </section>

            {/* Calendar Section */}
            <section className="py-24 px-6 bg-white border-t border-brand-black/5">
                <div className="container mx-auto">
                    <div className="bg-[#FAF9F6] rounded-[2.5rem] border border-black/5 p-12 max-w-4xl mx-auto min-h-[500px] flex items-center justify-center shadow-inner">
                        <p className="text-brand-black/40 italic text-lg font-serif">Calendar Integration Placeholder (Calendly/Cal.com)</p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
