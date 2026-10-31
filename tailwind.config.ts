import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        surface: {
          deep: "#080808",
          graphite: "#111111",
          charcoal: "#181818",
          card: "rgba(17, 17, 17, 0.7)",
        },
        silver: {
          metallic: "#A7A7A7",
          platinum: "#D9D9D9",
          chrome: "#F5F5F5",
          muted: "#929292",
        },
        border: {
          subtle: "#202020",
          DEFAULT: "#303030",
          metallic: "rgba(217, 217, 217, 0.25)",
        },
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      backgroundImage: {
        "chrome-gradient": "linear-gradient(135deg, #FFFFFF 0%, #D9D9D9 30%, #A7A7A7 70%, #505050 100%)",
        "chrome-radial": "radial-gradient(circle at 50% 0%, rgba(217, 217, 217, 0.12) 0%, rgba(5, 5, 5, 0) 70%)",
        "card-gradient": "linear-gradient(180deg, rgba(24, 24, 24, 0.75) 0%, rgba(12, 12, 12, 0.85) 100%)",
        "metallic-border": "linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.03) 100%)",
      },
      boxShadow: {
        "chrome-subtle": "0 0 35px -5px rgba(217, 217, 217, 0.08)",
        "chrome-glow": "0 0 50px -10px rgba(217, 217, 217, 0.15)",
        "glass-inner": "inset 0 1px 1px 0 rgba(255, 255, 255, 0.12)",
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "shimmer": "shimmer 3s ease-in-out infinite",
        "pulse-subtle": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "marquee": "marquee 35s linear infinite",
        "marquee-reverse": "marquee-reverse 35s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(1deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
