import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: string;
  label?: string;
  helperText?: string;
  options: readonly string[] | { label: string; value: string }[];
  placeholder?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error, label, helperText, options, placeholder, id, ...props }, ref) => {
    const selectId = id || props.name;

    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label
            htmlFor={selectId}
            className="block text-xs font-medium tracking-wide uppercase text-silver-muted font-heading"
          >
            {label} {props.required && <span className="text-silver-chrome">*</span>}
          </label>
        )}
        <div className="relative">
          <select
            id={selectId}
            ref={ref}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? `${selectId}-error` : undefined}
            className={cn(
              "w-full appearance-none rounded-md border border-border bg-surface-charcoal/90 px-4 py-2.5 pr-10 text-sm text-silver-chrome transition-all duration-200 focus:border-silver-platinum focus:bg-surface-graphite focus:outline-none focus:ring-1 focus:ring-silver-platinum/30 disabled:cursor-not-allowed disabled:opacity-50",
              error && "border-red-500/70 focus:border-red-500 focus:ring-red-500/30",
              className
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled className="bg-surface-deep text-neutral-500">
                {placeholder}
              </option>
            )}
            {options.map((opt) => {
              const val = typeof opt === "string" ? opt : opt.value;
              const lbl = typeof opt === "string" ? opt : opt.label;
              return (
                <option key={val} value={val} className="bg-surface-deep text-silver-chrome py-1">
                  {lbl}
                </option>
              );
            })}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-silver-muted">
            <svg
              className="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        {helperText && !error && (
          <p className="text-[11px] text-silver-muted/80">{helperText}</p>
        )}
        {error && (
          <p id={`${selectId}-error`} className="text-xs text-red-400 font-medium">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";
