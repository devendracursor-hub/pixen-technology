
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#f7fafc",
        ink: "#0b1220",
        accent: "#1d4ed8",
        accentSoft: "#38bdf8"
      },
      boxShadow: {
        card: "0 16px 40px -24px rgba(11, 18, 32, 0.35)"
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at 10% 10%, rgba(56, 189, 248, 0.35), transparent 40%), radial-gradient(circle at 90% 20%, rgba(29, 78, 216, 0.26), transparent 45%)"
      }
    }
  },
  plugins: []
};

export default config;
