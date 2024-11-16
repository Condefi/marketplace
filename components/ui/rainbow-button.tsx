import React from "react";

import { cn } from "@/lib/utils";

export function RainbowButton({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "group relative inline-flex h-11 animate-rainbow cursor-pointer items-center justify-center rounded-xl border-0 bg-[length:200%] px-8 py-2 font-medium text-primary-foreground transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",

        // before styles
        "before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--gradient-start)),hsl(var(--gradient-end)),hsl(var(--accent)),hsl(var(--chart-3)),hsl(var(--chart-4)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))]",

        // light mode colors
        "bg-[linear-gradient(#2e2e2e,#2e2e2e),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(var(--gradient-start)/50%),hsl(var(--gradient-end)),hsl(var(--accent)),hsl(var(--chart-3)),hsl(var(--chart-4)))]",

        // dark mode colors
        "dark:bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(var(--gradient-start)/50%),hsl(var(--gradient-end)),hsl(var(--accent)),hsl(var(--chart-3)),hsl(var(--chart-4)))]",

        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}