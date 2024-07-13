import { fontFamily, screens, colors } from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";

export default {
  content: ["**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "2rem",
        xl: "2rem",
        "2xl": "2rem",
      },
      screens: {
        ...screens,
        "2xl": "1400px",
      },
    },
    colors: {
      ...colors,
      gray: {
        50: "#FAFBFC",
        100: "#F7F9FC",
        200: "#E6EAF0",
        300: "#D0D7E2",
        400: "#A7AFBC",
        500: "#7B8698",
        600: "#596579",
        700: "#374253",
        800: "#192638",
        900: "#0F1825",
      },
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      fontFamily: {
        PlusJakartaSans: ["Plus Jakarta Sans", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
