import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        inputText: '#6C737F',
        inputBg: '#F3F4F6',
        secondary: '#ecc94b',
        'orange': {
          400: '#fb923c',

        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms'),],
} satisfies Config;
