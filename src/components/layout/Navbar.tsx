"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Readings", href: "/services" },
    { name: "How it Works", href: "/how-it-works" },
    { name: "Blog", href: "/blog" },
]

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)
    const pathname = usePathname()

    // On Home page, header starts transparent (dark text). On scroll, becomes dark (light text).
    // On other pages (which have dark backgrounds), header is always visible with light text?
    // Actually, other pages have 'min-h-screen bg-midnight-navy' so they are dark. 
    // Text should be Light on other pages always?
    // Let's assume transparent on all pages for now, but handle text color based on path.

    const isHomePage = pathname === "/";

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Close mobile menu on route change
    React.useEffect(() => {
        setIsOpen(false)
    }, [pathname])

    // Simplified: Always use black text, lavender accent
    const textColorClass = "text-brand-black";
    const hoverColorClass = "hover:text-brand-lavender";
    const activeColorClass = "text-brand-lavender";

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-[100] transition-all duration-300",
                isScrolled
                    ? "bg-white/95 backdrop-blur-md border-b border-brand-black/10 py-4 shadow-sm"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                <Link href="/" className={cn("font-serif text-2xl tracking-wider z-50 relative transition-colors", textColorClass)}>
                    The Inner Compass
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "text-sm tracking-wide transition-colors font-medium",
                                pathname === link.href ? activeColorClass : `${textColorClass} opacity-70 ${hoverColorClass}`
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button variant={isHomePage && !isScrolled ? "default" : "premium"} size="sm" asChild>
                        <Link href="/booking">Book a Reading</Link>
                    </Button>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className={cn("md:hidden z-50 p-2 transition-colors", textColorClass)}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} className={isHomePage && !isScrolled && !isOpen ? "text-brand-black" : "text-brand-moonlight"} /> : <Menu size={24} />}
                </button>

                {/* Mobile Navigation Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="fixed inset-0 bg-brand-black z-40 flex flex-col items-center justify-center gap-8 md:hidden"
                        >
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="font-serif text-2xl text-brand-moonlight hover:text-brand-lavender transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button variant="premium" size="lg" asChild>
                                <Link href="/booking">Book a Reading</Link>
                            </Button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    )
}
