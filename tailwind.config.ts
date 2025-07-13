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
        // SnappyBits Brand Colors
        snappy: {
          orange: "#ff853b",
          red: "#f70816",
          "red-dark": "#c90909",
          "orange-alt": "#ff690c",
          navy: "#1b3235",
          teal: "#344f53",
          purple: "#551a8b",
          gray: "#f7f7f7",
        },
        // Keep existing for components
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#ff853b", // SnappyBits orange
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#f7f7f7", // SnappyBits gray
          foreground: "#1b3235", // SnappyBits navy
        },
        destructive: {
          DEFAULT: "#f70816", // SnappyBits red
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#f7f7f7",
          foreground: "#344f53",
        },
        accent: {
          DEFAULT: "#ff690c", // SnappyBits orange alt
          foreground: "#ffffff",
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#1b3235",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#1b3235",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "bounce-in": "bounceIn 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        bounceIn: {
          "0%": { transform: "scale(0.3)", opacity: "0" },
          "50%": { transform: "scale(1.05)" },
          "70%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config; 