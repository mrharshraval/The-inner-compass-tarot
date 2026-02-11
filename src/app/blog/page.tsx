import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-brand-moonlight text-brand-black selection:bg-brand-lavender/30">
            <Navbar />

            <section className="pt-32 pb-16 px-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[image:var(--image-grid-pattern)] opacity-50 pointer-events-none" />
                <div className="container mx-auto max-w-6xl relative z-10">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-black/40 mb-4 block">Blog</span>
                    <h1 className="font-serif text-5xl md:text-7xl mb-4 text-brand-black">Insights</h1>
                    <p className="text-brand-black/60 mb-16 text-lg font-light">Moonlight reflections and tarot wisdom.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="aspect-[4/5] bg-white rounded-[2rem] flex items-center justify-center border border-black/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                            <span className="text-brand-black/30 italic font-serif">Latest Post Placeholder</span>
                        </div>
                        <div className="aspect-[4/5] bg-white rounded-[2rem] flex items-center justify-center border border-black/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                            <span className="text-brand-black/30 italic font-serif">Previous Post Placeholder</span>
                        </div>
                        <div className="aspect-[4/5] bg-white rounded-[2rem] flex items-center justify-center border border-black/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                            <span className="text-brand-black/30 italic font-serif">Previous Post Placeholder</span>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
