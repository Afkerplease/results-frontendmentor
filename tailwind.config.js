/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        Hanken: [" 'Hanken Grotesk', sans-serif;"],
      },
      colors: {
        Lightslateblue: "hsl(252, 100%, 67%)",
        Lightroyalblue: "hsl(241, 81%, 54%)",

        Violetblue: "hsla(256, 72%, 46%, 1)",
        Persianblue: "hsla(241, 72%, 46%, .4)",

        White: "hsl(0, 0%, 100%)",
        Paleblue: "hsl(221, 100%, 96%)",
        Lightlavender: "hsl(241, 100%, 89%)",
        Darkgrayblue: "hsl(224, 30%, 27%)",

        Lightred: "hsl(0, 100%, 67%)",
        Lightredbg: "hsla(0, 100%, 67%,0.3)",
        Orangeyyellow: "hsl(39, 100%, 56%)",
        Orangeyyellowbg: "hsla(39, 100%, 56%,0.3)",
        Greenteal: "hsl(166, 100%, 37%)",
        Greentealbg: "hsla(166, 100%, 37%,0.3)",
        Cobaltblue: "hsl(234, 85%, 45%)",
        Cobaltbluebg: "hsla(234, 85%, 45%,0.4)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
