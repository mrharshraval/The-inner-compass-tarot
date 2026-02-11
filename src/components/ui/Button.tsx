import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-lavender disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
        variants: {
            variant: {
                default:
                    "bg-brand-black text-white shadow-sm hover:bg-brand-black/90",
                outline:
                    "border border-brand-black/20 bg-transparent shadow-sm hover:bg-brand-black/5 text-brand-black",
                ghost: "hover:bg-brand-black/5 text-brand-black",
                link: "text-brand-black underline-offset-4 hover:underline",
                premium: "bg-brand-purple text-white shadow-[0_0_20px_rgba(91,58,143,0.3)] hover:shadow-[0_0_30px_rgba(91,58,143,0.5)] hover:scale-[1.02]",
            },
            size: {
                default: "h-11 px-6 py-2",
                sm: "h-9 rounded-full px-4 text-xs",
                lg: "h-12 rounded-full px-10 text-base",
                icon: "h-9 w-9",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
