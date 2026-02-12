import { cn } from "@/lib/utils";

interface SectionHeaderProps {
    subheading?: string;
    heading: string;
    description?: string;
    className?: string;
    align?: "left" | "center" | "right";
    light?: boolean;
}

export function SectionHeader({
    subheading,
    heading,
    description,
    className,
    align = "center",
    light = false
}: SectionHeaderProps) {
    return (
        <div className={cn(
            "mb-16",
            align === "center" ? "text-center" : align === "right" ? "text-right" : "text-left",
            className
        )}>
            {subheading && (
                <span className={cn(
                    "text-xs font-bold uppercase tracking-widest mb-4 block",
                    light ? "text-white/60" : "text-brand-black/40"
                )}>
                    {subheading}
                </span>
            )}
            <h2 className={cn(
                "font-serif text-4xl md:text-5xl mb-6",
                light ? "text-white" : "text-brand-indigo"
            )}>
                {heading}
            </h2>
            {description && (
                <p className={cn(
                    "max-w-2xl text-lg leading-relaxed font-light mx-auto",
                    light ? "text-white/80" : "text-brand-black/70"
                )}>
                    {description}
                </p>
            )}
        </div>
    );
}
