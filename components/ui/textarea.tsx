import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
  label?: string;
  helperText?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, label, helperText, id, ...props }, ref) => {
    const inputId = id || props.name;

    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-xs font-medium tracking-wide uppercase text-silver-muted font-heading"
          >
            {label} {props.required && <span className="text-silver-chrome">*</span>}
          </label>
        )}
        <textarea
          id={inputId}
          ref={ref}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${inputId}-error` : undefined}
          className={cn(
            "w-full min-h-[120px] rounded-md border border-border bg-surface-charcoal/90 px-4 py-3 text-sm text-silver-chrome placeholder:text-neutral-500 transition-all duration-200 focus:border-silver-platinum focus:bg-surface-graphite focus:outline-none focus:ring-1 focus:ring-silver-platinum/30 disabled:cursor-not-allowed disabled:opacity-50 resize-y",
            error && "border-red-500/70 focus:border-red-500 focus:ring-red-500/30",
            className
          )}
          {...props}
        />
        {helperText && !error && (
          <p className="text-[11px] text-silver-muted/80">{helperText}</p>
        )}
        {error && (
          <p id={`${inputId}-error`} className="text-xs text-red-400 font-medium">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
