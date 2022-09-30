import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme(
  {
    config: {
      initialColorMode: "light",
      useSystemColorMode: true,
    },
    colors: {
      bg: {
        light: "#fafafa",
        dark: "#1f2023",
      },
      full: {
        light: "#fafafa",
        dark: "#000000",
      },
      brand: {
        purple: "#f50",
      },
    },
    fonts: {
      body: "Inter-Regular, sans-serif",
      heading: "Inter-Semibold, sans-serif",
    },
    styles: {
      global: (props) => ({
        "html, body": {
          height: "100%",
          maxHeight: "100vh",
          bg: mode("bg.light", "bg.dark")(props),
          fontSize: 14,
        },
      }),
    },
  }
);

export default theme;
