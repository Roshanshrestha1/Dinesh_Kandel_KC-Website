import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        basalt: "rgb(var(--basalt-rgb) / <alpha-value>)",
        "basalt-2": "rgb(var(--basalt-2-rgb) / <alpha-value>)",
        parchment: "rgb(var(--parchment-rgb) / <alpha-value>)",
        "parchment-2": "rgb(var(--parchment-2-rgb) / <alpha-value>)",
        cinnabar: "rgb(var(--cinnabar-rgb) / <alpha-value>)",
        "cinnabar-deep": "rgb(var(--cinnabar-deep-rgb) / <alpha-value>)",
        marigold: "rgb(var(--marigold-rgb) / <alpha-value>)",
        lapis: "rgb(var(--lapis-rgb) / <alpha-value>)",
        bronze: "rgb(var(--bronze-rgb) / <alpha-value>)",
        ink: "rgb(var(--ink-rgb) / <alpha-value>)",
        "ink-soft": "rgb(var(--ink-soft-rgb) / <alpha-value>)",
      },
      fontFamily: {
        display: [
          "var(--font-display-latin)",
          "var(--font-display-iast)",
          "var(--font-body-devanagari)",
          "Georgia",
          "serif",
        ],
        iast: [
          "var(--font-display-iast)",
          "var(--font-display-latin)",
          "Georgia",
          "serif",
        ],
        body: [
          "var(--font-body-devanagari)",
          "var(--font-display-latin)",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "var(--font-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "monospace",
        ],
      },
      animation: {
        "ink-breathe": "ink-breathe 6s ease-in-out infinite",
        "medallion-spin": "medallion-spin 120s linear infinite",
        "kite-drift": "kite-drift 8s ease-in-out infinite",
        "rise": "rise 1s ease-out forwards",
        "marquee": "marquee 40s linear infinite",
      },
      keyframes: {
        "ink-breathe": {
          "0%, 100%": { opacity: "0.85", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.012)" },
        },
        "medallion-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "kite-drift": {
          "0%, 100%": { transform: "translateX(0) rotate(-1deg)" },
          "50%": { transform: "translateX(6px) rotate(1deg)" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      boxShadow: {
        leaf: "0 1px 0 rgba(178,58,44,0.10), 0 24px 60px -28px rgba(20,12,8,0.55), 0 6px 16px -10px rgba(20,12,8,0.45)",
        stamp: "0 0 0 1px rgba(178,58,44,0.35), 0 6px 16px -8px rgba(178,58,44,0.45)",
        "leaf-lift": "0 28px 70px -28px rgba(20,12,8,0.7), 0 8px 18px -10px rgba(20,12,8,0.45)",
        glow: "0 8px 24px -6px rgba(178,58,44,0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
