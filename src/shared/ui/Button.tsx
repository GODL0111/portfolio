import * as React from "react";
import { cn } from "../utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          {
            "bg-highlight text-navy hover:bg-highlight/90": variant === "default",
            "bg-transparent border border-highlight text-highlight hover:bg-highlight/10": variant === "outline",
            "bg-transparent text-foreground hover:bg-muted": variant === "ghost",
            "bg-transparent underline-offset-4 hover:underline text-highlight": variant === "link",
            "h-10 py-2 px-4 text-base": size === "default",
            "h-8 px-3 text-sm": size === "sm",
            "h-12 px-6 text-base": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };