import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        "70px": "70px",
        "LInputH": "50px",
        "LInputW": "358px",
        "LInputWmin": "215px",
      },
    },
    colors: {
      transparent: "transparent",
      blanco: {
        1: "#ffffff",
        2: "#f6f6f6",
      },
      gris: {
        1: "#e6e6eb",
        2: "#d6d6d6",
        3: "#2f2f2f",
      },
      negro: {
        1: "#111111",
      },
      dorado: "#f2cf66"
    },
  },
  plugins: [],
};
export default config;
