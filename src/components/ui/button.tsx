import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "./utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-body",
  {
    variants: {
      variant: {
        default:
          "bg-mentra-orange text-white shadow-sm hover:bg-mentra-orange/90 hover:shadow-lg hover:scale-105 transition-all duration-200 btn-mentra-primary",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 hover:shadow-md hover:scale-105 transition-all duration-200",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground hover:border-accent-foreground/20 hover:scale-105 transition-all duration-200",
        secondary:
          "bg-mentra-blue text-white shadow-sm hover:bg-mentra-blue/90 hover:shadow-lg hover:scale-105 transition-all duration-200 btn-mentra-secondary",
        ghost: 
          "hover:bg-accent hover:text-accent-foreground hover:scale-105 transition-all duration-200",
        link: 
          "text-primary underline-offset-4 hover:underline hover:text-primary/80 transition-all duration-200",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3 text-xs",
        lg: "h-11 rounded-md px-8 text-base",
        icon: "h-10 w-10",
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
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <span className="font-body font-medium text-high-contrast">
          {children}
        </span>
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }