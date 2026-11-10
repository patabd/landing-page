import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-11 w-full min-w-0 rounded-lg border border-border bg-surface px-4 text-base text-foreground",
        "placeholder:text-muted/50 selection:bg-accent selection:text-accent-foreground",
        "outline-none transition-[border-color,box-shadow] duration-150 ease-out",
        "focus-visible:border-accent/50 focus-visible:ring-2 focus-visible:ring-ring/25",
        "disabled:pointer-events-none disabled:opacity-60",
        className
      )}
      {...props}
    />
  );
}

export { Input };
