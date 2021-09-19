import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = {
  heading: "Open Sans",
  body: "Open Sans",
};

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const theme = extendTheme({
  styles: {
    global: {
      html: {
        scrollBehavior: "smooth",
      },
      "::-webkit-scrollbar-track": {
        background: "primary",
      },
      "::-webkit-scrollbar": {
        width: "6px",
      },
      "::-webkit-scrollbar-thumb": {
        background: "secondary",
      },
    },
  },
  colors: {
    primary: "#1C987D",
    secondary: "#31D8B4",
    light: "#F3F4F8",
    black: "#1C1C1C",
    white: "#fff",
    gray: "#9B9FA4",
  },
  fonts,
  breakpoints,
});

export default theme;
