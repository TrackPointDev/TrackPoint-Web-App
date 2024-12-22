import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "schemes-background": "#fef7ff",
        "background-default-default": "#fff",
        royalblue: "#2563eb",
        "text-brand-on-brand": "#f5f5f5",
        "text-default-default": "#1e1e1e",
        "text-default-tertiary": "#b3b3b3",
        "m3-sys-light-outline-variant": "#cac4d0",
        gray: "rgba(0, 0, 0, 0.54)",
        "text-neutral-default": "#303030",
        "border-default-default": "#d9d9d9",
        "text-default-secondary": "#757575",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      spacing: {
        "space-200": "8px",
        "space-300": "12px",
        "space-600": "24px",
        "space-400": "16px",
      },
      fontFamily: {
        "body-link": "Inter",
        roboto: "Roboto",
      },
      borderRadius: {
        "3xs": "10px",
        "radius-200": "8px",
      }
    },
    fontSize: {
      xl: "20px",
      base: "16px",
      inherit: "inherit",
    },
  },
  plugins: [],
} satisfies Config;

