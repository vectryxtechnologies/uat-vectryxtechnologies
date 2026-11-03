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
        /* Base backgrounds — dark navy */
        background: "#080F25",
        surface: {
          deep: "#060b1c",
          graphite: "#0a1228",
          charcoal: "#0d1535",
          card: "rgba(10, 18, 40, 0.75)",
        },

        /* Text / tone scale (kept mostly white/grey) */
        silver: {
          metallic: "#A7B4C8",
          platinum: "#D9E0F0",
          chrome: "#F0F4FF",
          muted: "#7A90B8",
        },

        /* Borders */
        border: {
          subtle: "rgba(255,255,255,0.05)",
          DEFAULT: "rgba(255,255,255,0.1)",
          metallic: "rgba(255,255,255,0.18)",
        },

        /* Brand palette */
        brand: {
          cyan: "#00C8F4",
          blue: "#0875F9",
          royal: "#303BFA",
          violet: "#7025F5",
          purple: "#A020F0",
        },
      },

      fontFamily: {
        heading: ["Eurostile Extended", "var(--font-space-grotesk)", "Impact", "Haettenschweiler", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },

      backgroundImage: {
        /* Brand gradient */
        "brand-gradient":
          "linear-gradient(110deg, #00C8F4, #0875F9, #303BFA, #7025F5, #A020F0)",
        "brand-gradient-r":
          "linear-gradient(90deg, #00C8F4, #0875F9, #303BFA, #7025F5, #A020F0)",
        "brand-radial":
          "radial-gradient(circle at 50% 0%, rgba(8,117,249,0.18) 0%, rgba(8,15,37,0) 70%)",

        /* Legacy chrome (kept for compatibility) */
        "chrome-gradient":
          "linear-gradient(135deg, #FFFFFF 0%, #D9D9D9 30%, #A7A7A7 70%, #505050 100%)",
        "chrome-radial":
          "radial-gradient(circle at 50% 0%, rgba(8,117,249,0.1) 0%, rgba(8,15,37,0) 70%)",
        "card-gradient":
          "linear-gradient(180deg, rgba(10,18,40,0.8) 0%, rgba(6,11,28,0.9) 100%)",
        "metallic-border":
          "linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.03) 100%)",
      },

      boxShadow: {
        "brand-glow": "0 0 50px -10px rgba(8,117,249,0.4)",
        "brand-subtle": "0 0 35px -5px rgba(48,59,250,0.15)",
        "chrome-subtle": "0 0 35px -5px rgba(8,117,249,0.1)",
        "chrome-glow": "0 0 50px -10px rgba(0,200,244,0.3)",
        "glass-inner": "inset 0 1px 1px 0 rgba(255,255,255,0.08)",
      },

      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
        "pulse-subtle": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        marquee: "marquee 35s linear infinite",
        "marquee-reverse": "marquee-reverse 35s linear infinite",
        "gradient-blob-1": "gradient-blob-1 8s ease-in-out infinite",
        "gradient-blob-2": "gradient-blob-2 10s ease-in-out infinite",
        "gradient-blob-3": "gradient-blob-3 12s ease-in-out infinite",
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
        "gradient-blob-1": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(5%, 5%) scale(1.1)" },
        },
        "gradient-blob-2": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(-5%, 5%) scale(1.05)" },
        },
        "gradient-blob-3": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(5%, -5%) scale(1.08)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
