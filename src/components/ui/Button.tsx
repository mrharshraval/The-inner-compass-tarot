import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", isLoading, children, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "relative inline-flex items-center justify-center rounded-full font-cinzel transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none",
                    "uppercase tracking-[0.15em] focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:ring-offset-2 focus:ring-offset-space-black",
                    {
                        // Variants
                        "bg-accent-blue text-white hover:bg-accent-blue/90 hover:scale-105 shadow-[0_0_20px_rgba(66,133,244,0.3)]": variant === "primary",
                        "bg-white/10 text-white hover:bg-white/20 backdrop-blur-md border border-white/10": variant === "secondary",
                        "bg-transparent border border-accent-blue/50 text-accent-blue hover:bg-accent-blue/10 hover:border-accent-blue": variant === "outline",
                        "bg-transparent text-text-secondary hover:text-white": variant === "ghost",

                        // Sizes
                        "text-[10px] px-4 py-2": size === "sm",
                        "text-xs px-6 py-3": size === "md",
                        "text-sm px-8 py-4": size === "lg",
                    },
                    className
                )}
                disabled={isLoading || props.disabled}
                {...props}
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {children}
            </button>
        );
    }
);
Button.displayName = "Button";

export { Button };
