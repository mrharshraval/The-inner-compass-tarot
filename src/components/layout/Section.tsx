import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends HTMLAttributes<HTMLElement> {
    container?: boolean;
    fullscreen?: boolean;
}

const Section = forwardRef<HTMLElement, SectionProps>(
    ({ className, container = true, fullscreen = false, children, ...props }, ref) => {
        return (
            <section
                ref={ref}
                className={cn(
                    "relative w-full py-24 md:py-32 overflow-hidden",
                    {
                        "min-h-screen flex items-center justify-center": fullscreen,
                    },
                    className
                )}
                {...props}
            >
                {container ? (
                    <div className="container mx-auto px-6 relative z-10">
                        {children}
                    </div>
                ) : (
                    children
                )}
            </section>
        );
    }
);
Section.displayName = "Section";

export { Section };
