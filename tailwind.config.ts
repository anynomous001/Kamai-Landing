import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-newsreader)", "Georgia", "serif"],
        headline: ["var(--font-manrope)", "sans-serif"],
        script: ["var(--font-newsreader)", "serif"],
        bricolage: ["var(--font-bricolage)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--text-primary)",
        card: {
          DEFAULT: "var(--surface)",
          foreground: "var(--text-primary)",
        },
        popover: {
          DEFAULT: "var(--surface)",
          foreground: "var(--text-primary)",
        },
        primary: {
          DEFAULT: "#2D1B14",
          foreground: "#F7F5F0",
        },
        secondary: {
          DEFAULT: "rgba(45, 27, 20, 0.65)",
          foreground: "#2D1B14",
        },
        muted: {
          DEFAULT: "rgba(45, 27, 20, 0.08)",
          foreground: "rgba(45, 27, 20, 0.65)",
        },
        accent: {
          DEFAULT: "#EA580C",
          foreground: "#FFFFFF",
          hover: "#C2410C",
        },
        destructive: {
          DEFAULT: "#EF4444",
          foreground: "#FFFFFF",
        },
        border: "var(--border)",
        input: "var(--border)",
        ring: "#EA580C",
        chart: {
          "1": "#2D1B14",
          "2": "#EA580C",
          "3": "#22C55E",
          "4": "#F59E0B",
          "5": "#A8A296",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        artisan: "0 8px 32px rgba(45,27,20,0.08)",
        "artisan-hover": "0 16px 40px rgba(234,88,12,0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
