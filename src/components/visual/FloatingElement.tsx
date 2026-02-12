"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingElementProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    yOffset?: number;
}

export function FloatingElement({
    children,
    className,
    delay = 0,
    duration = 6,
    yOffset = 15,
}: FloatingElementProps) {
    return (
        <motion.div
            className={className}
            animate={{
                y: [0, -yOffset, 0],
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay,
            }}
        >
            {children}
        </motion.div>
    );
}
