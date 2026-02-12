import Link from "next/link";
import { Sparkles, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center pointer-events-none">
            {/* Brand - Pointer events auto to allow clicking */}
            <Link href="/" className="pointer-events-auto group flex items-center gap-3">
                <div className="relative w-10 h-10 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-accent-blue group-hover:rotate-180 transition-transform duration-700" />
                    <div className="absolute inset-0 border border-white/10 rounded-full group-hover:scale-110 transition-transform duration-500" />
                </div>
                <span className="font-cinzel text-lg tracking-[0.2em] uppercase text-text-primary/80 group-hover:text-text-primary transition-colors">
                    The Inner Compass
                </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 pointer-events-auto">
                <NavLink href="/tarot" label="Readings" />
                <NavLink href="/reiki" label="Healing" />
                <NavLink href="/about" label="Guide" />

                {/* Book Button */}
                <Link
                    href="/booking"
                    className="px-6 py-2 rounded-full border border-accent-blue/30 text-accent-blue text-xs uppercase tracking-widest hover:bg-accent-blue/10 transition-colors"
                >
                    Book Session
                </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden pointer-events-auto">
                <button className="p-2 text-text-primary/70 hover:text-text-primary">
                    <Menu className="w-6 h-6" />
                </button>
            </div>
        </nav>
    );
}

function NavLink({ href, label }: { href: string; label: string }) {
    return (
        <Link
            href={href}
            className="text-xs uppercase tracking-[0.15em] text-text-secondary hover:text-text-primary transition-colors"
        >
            {label}
        </Link>
    )
}
