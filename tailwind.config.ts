import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Figtree", "Segoe UI", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      colors: {
        background: "var(--bg)",
        subtle: "var(--bg-subtle)",
        surface: "var(--surface)",
        border: {
          DEFAULT: "var(--border)",
          strong: "var(--border-strong)",
        },
        foreground: "var(--fg)",
        muted: "var(--fg-muted)",
        faint: "var(--fg-faint)",
        accent: {
          DEFAULT: "var(--accent)",
          ink: "var(--accent-ink)",
          fg: "var(--accent-fg)",
          soft: "var(--accent-soft)",
        },
      },
      borderRadius: {
        md: "6px",
        lg: "8px",
        xl: "12px",
      },
      keyframes: {
        wheel: { "50%": { transform: "translateY(6px)" } },
      },
      animation: {
        wheel: "wheel 1.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
