/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './src/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './index.html',
  ],
  prefix: "",
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
        'jetbrains': ['JetBrains Mono', 'monospace'],
        'menlo': ['Menlo', 'monospace'],
        'monaco': ['Monaco', 'monospace']
      },
      colors: {
        // Custom colours outside of Shadcn UI
        // night: '#070B0B',
        // purple: '#2F1E2E',
        // light_purple: '#41323F',
        // grey: '#9F9B90',
        // red: '#CB5042',
        // light_red: '#FF6B5C',
        // orange: '#F99B15',
        // yellow: '#EABA19',
        // blue: '#386CB0',
        // light_blue: '#199BE8',
        // green: '#46B27C',
        // light_green: '#40E07D',
        jet: '#333333',
        light_grey: '#9B9FB5',
        yellow: '#EDC010',
        light_yellow: '#FFCB77',
        green: '#208F4F',
        light_green: '#2ECC71',
        red: '#CC3F0C',
        light_red: '#E85F5C',
        blue: '#548687',
        light_blue: '#3C91E6',

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
}