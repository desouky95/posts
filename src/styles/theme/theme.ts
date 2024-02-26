import { breakpoints } from "./breakpoints/breakpoints";
import { colors } from "./colors/colors";
import { tokens } from "./tokens/tokens";

export const theme = {
  colors,
  tokens,
  breakpoints,
  variants: {
    button: {
      solid: {
        pink: {
          backgroundColor: colors.pink.accent,
          color: colors.pink.main,
        },
      },
      contained: {
        pink: {
          backgroundColor: colors.pink.main,
          color: colors.pink.accent,
        },
        green: {
          backgroundColor: colors.green.main,
          color: colors.green.accent,
        },
      },
    },
    iconButton: {
      sizes: {
        sm: {
          fontSize: "16px",
        },
        md: {
          fontSize: "20px",
        },
        lg: {
          fontSize: "24px",
          minWidth: "45px",
        },
      },
    },
  },
};

type Theme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
