"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export function FloatingCrystals() {
    const { scrollY } = useScroll();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Parallax effects
    const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
    const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
    const rotate1 = useTransform(scrollY, [0, 1000], [0, 45]);
    const rotate2 = useTransform(scrollY, [0, 1000], [0, -30]);

    if (!isMounted) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Crystal 1 - Top Right - Large & Blur */}
            <motion.div
                style={{ y: y1, rotate: rotate1 }}
                className="absolute -top-20 -right-20 w-96 h-96 opacity-30 mix-blend-screen"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ duration: 1 }}
            >
                <Image
                    src="/images/blog-crystals.jpg" // Using existing image for now
                    alt="Floating Crystal"
                    fill
                    className="object-cover rounded-full blur-3xl"
                />
            </motion.div>

            {/* Crystal 2 - Bottom Left - Medium & Sharp */}
            <motion.div
                style={{ y: y2, rotate: rotate2 }}
                className="absolute top-1/3 -left-20 w-64 h-64 opacity-20 mix-blend-screen"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ duration: 1.2, delay: 0.2 }}
            >
                <Image
                    src="/images/service-clarity.jpg" // Fallback or existing
                    alt="Floating Crystal"
                    fill
                    className="object-cover rounded-full blur-2xl"
                />
            </motion.div>

            {/* Crystal 3 - Bottom Right - Subtle */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 10, 0]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute bottom-20 right-10 w-48 h-48 opacity-20 mix-blend-screen"
            >
                <Image
                    src="/images/blog-crystals.jpg"
                    alt="Floating Crystal"
                    fill
                    className="object-cover rounded-full blur-xl"
                />
            </motion.div>
        </div>
    );
}
