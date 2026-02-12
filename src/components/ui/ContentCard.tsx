import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./Button";
import { Star } from "lucide-react";

interface ContentCardProps {
    imageSrc: string;
    imageAlt: string;
    subheading?: string; // Small uppercase text (e.g. "Rituals")
    heading: string;
    description: string;
    align?: "center" | "left";
    actionLabel?: string;
    actionLink?: string; // If provided, card is link or has button
    variant?: "default" | "featured"; // Featured = Indigo background
    price?: string;
    className?: string;
}

export function ContentCard({
    imageSrc,
    imageAlt,
    subheading,
    heading,
    description,
    align = "center",
    actionLabel = "Read More",
    actionLink,
    variant = "default",
    price,
    className
}: ContentCardProps) {
    const isFeatured = variant === "featured";

    const CardContent = (
        <>
            {isFeatured && (
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                    <Star className="w-32 h-32 rotate-12" />
                </div>
            )}

            <div className={cn(
                "w-full relative overflow-hidden flex items-center justify-center",
                isFeatured ? "h-48 bg-white/5 border-b border-white/5" : "h-48 md:h-64 bg-brand-purple/5"
            )}>
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className={cn(
                        "object-cover transition-transform duration-700 group-hover:scale-105",
                        isFeatured ? "opacity-60" : "opacity-80"
                    )}
                />
                <div className={cn(
                    "absolute inset-0 z-10",
                    isFeatured ? "bg-brand-indigo/40" : "bg-brand-purple/10"
                )} />
            </div>

            <div className={cn(
                "p-8 pt-6 relative z-10 flex flex-col h-full",
                align === "center" ? "items-center" : "items-start"
            )}>
                {subheading && (
                    <span className={cn(
                        "text-[10px] uppercase tracking-widest mb-3 block font-bold",
                        isFeatured ? "text-brand-gold" : "text-brand-purple"
                    )}>
                        {subheading}
                    </span>
                )}

                <div className={cn("mb-4", isFeatured && "flex items-center gap-2 justify-center")}>
                    <h3 className={cn(
                        "font-serif text-2xl",
                        isFeatured ? "text-white" : "text-brand-indigo"
                    )}>
                        {heading}
                    </h3>
                    {isFeatured && <Star className="w-4 h-4 text-brand-gold fill-brand-gold animate-pulse" />}
                </div>

                <p className={cn(
                    "mb-8 text-sm leading-relaxed",
                    isFeatured ? "text-white/80" : "text-brand-black/70"
                )}>
                    {description}
                </p>

                <div className="mt-auto">
                    {price ? (
                        <div className="flex items-center justify-between w-full gap-4 pt-6 border-t border-brand-purple/10">
                            <span className={cn("font-serif text-2xl italic", isFeatured ? "text-brand-gold" : "text-brand-purple")}>{price}</span>
                            {actionLink && (
                                <Button variant={isFeatured ? "default" : "outline"} className={cn("rounded-full", isFeatured ? "bg-brand-gold text-brand-black hover:bg-white hover:text-brand-indigo font-bold" : "border-brand-purple/20 text-brand-purple hover:bg-brand-purple hover:text-white")} asChild>
                                    <Link href={actionLink}>{actionLabel}</Link>
                                </Button>
                            )}
                        </div>
                    ) : (
                        <div className={cn(
                            "inline-block border-b pb-1 italic font-serif transition-colors",
                            isFeatured ? "border-white/30 text-white" : "border-brand-purple/30 text-brand-purple"
                        )}>
                            {actionLabel}
                        </div>
                    )}
                </div>
            </div>
        </>
    );

    const containerClasses = cn(
        "rounded-[2rem] text-center group transition-all duration-500 overflow-hidden relative flex flex-col backdrop-blur-md",
        isFeatured ?
            "bg-brand-indigo/95 text-white border border-brand-gold/30 shadow-2xl shadow-brand-indigo/30 hover:-translate-y-2 hover:shadow-brand-gold/10" :
            "bg-white/80 text-brand-black border border-white/50 shadow-lg shadow-brand-purple/5 hover:border-brand-purple/30 hover:shadow-xl hover:shadow-brand-purple/10 hover:-translate-y-2 hover:bg-white/90",
        className
    );

    const content = (
        <>
            {/* Gradient Border Glow Effect */}
            <div className={cn(
                "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
                isFeatured ? "bg-gradient-to-b from-brand-gold/20 to-transparent" : "bg-gradient-to-b from-brand-purple/20 to-transparent"
            )} />
            {CardContent}
        </>
    );

    if (actionLink && !price) { // Simple link card (like Blog/Home)
        return (
            <Link href={actionLink} className={containerClasses}>
                {content}
            </Link>
        )
    }

    // Interactive card (like Services with explicit button)
    return (
        <div className={containerClasses}>
            {content}
        </div>
    )
}
