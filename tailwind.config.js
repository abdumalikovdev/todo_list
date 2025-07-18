/** @type {import('tailwindcss') .Config} */
const plugin = require("tailwindcss/plugin");
export default {
  darkMode: ["class"],
  content: ["-/index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        Ig: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(—-radius) - 4px)",
      },
      colors: {
        primary: "var(—-primary-color)",
        "primary-light": "var(--primary-light-color)",
        "primary-contrast": "var(--primary-contrast-color)",
        secondary: "var(--secondary-color)",
        "secondary-contrast": "var(-secondary-contrast-color)",
        success: "var(--success-color)",
        "success-contrast": "var(--success-contrast-color)",
        warning: "var(—-warning-color)",
        "warning-contrast": "var(--warning-contrast-color)",
        info: "var(--info-color)",
        "info-contrast": "var(--info-contrast-color)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input) )",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4) )",
          5: "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({ addBase }) {
      addBase({
        ":root": {
          "—-primary-color": "#3b82f6",
          "--primary-light-color": "#eff6ff",
          "--primary-contrast-color": "#ffffff",
          "--secondary-color": "#9c27b0",
          "--secondary-contrast-color": "#ffffff",
          "--success-color": "#4caf50",
          "--success-contrast-color": "#ffffff",
          "--warning-color": "#ff9800",
          "--warning-contrast-color": "#000000",
          "--info-color": "#03a9f4",
          "--info-contrast-color": "#ffffff",
        },
      });
    }),
  ],
};
