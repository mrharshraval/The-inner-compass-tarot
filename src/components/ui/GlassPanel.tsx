import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassPanelProps {
    children: ReactNode;
    className?: string;
    variant?: "default" | "dark" | "ghost";
}

export function GlassPanel({ children, className, variant = "default" }: GlassPanelProps) {
    return (
        <div
            className={cn(
                "rounded-2xl border backdrop-blur-md transition-all duration-500",
                {
                    // Default: White Card (User Request)
                    "bg-white text-space-black border-transparent shadow-xl": variant === "default",

                    // Dark: Deeper styling for footer/modals
                    "bg-space-surface border-border-subtle shadow-2xl text-white": variant === "dark",

                    // Ghost: Barely visible
                    "bg-black/5 border-transparent hover:bg-black/10": variant === "ghost",
                },
                className
            )}
        >
            {children}
        </div>
    );
}
