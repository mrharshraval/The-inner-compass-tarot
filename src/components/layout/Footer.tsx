import Link from "next/link"

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-white border-t border-brand-black/10 py-16 text-brand-black/60">
            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
                <div className="space-y-4 col-span-1 md:col-span-2">
                    <h3 className="font-serif text-xl text-brand-black">The Inner Compass Tarot</h3>
                    <p className="max-w-xs leading-relaxed">
                        Illuminating your path through ancient wisdom and modern insight.
                        Guided by Preeti Jain.
                    </p>
                </div>

                <div className="space-y-4">
                    <h4 className="font-medium text-brand-black uppercase tracking-widest text-xs">Explore</h4>
                    <ul className="space-y-2">
                        <li><Link href="/about" className="hover:text-brand-lavender transition-colors">About Preeti</Link></li>
                        <li><Link href="/services" className="hover:text-brand-lavender transition-colors">Readings</Link></li>
                        <li><Link href="/how-it-works" className="hover:text-brand-lavender transition-colors">Process</Link></li>
                        <li><Link href="/blog" className="hover:text-brand-lavender transition-colors">Journal</Link></li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h4 className="font-medium text-brand-black uppercase tracking-widest text-xs">Support</h4>
                    <ul className="space-y-2">
                        <li><Link href="/contact" className="hover:text-brand-lavender transition-colors">Contact</Link></li>
                        <li><Link href="/policies" className="hover:text-brand-lavender transition-colors">Ethics & Policies</Link></li>
                        <li><Link href="/faq" className="hover:text-brand-lavender transition-colors">FAQ</Link></li>
                        <li><Link href="https://instagram.com" className="hover:text-brand-lavender transition-colors">Instagram</Link></li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-brand-black/5 text-center text-xs opacity-50">
                &copy; {currentYear} The Inner Compass Tarot. All rights reserved.
            </div>
        </footer>
    )
}
