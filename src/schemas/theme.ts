import { DefaultTheme } from "styled-components";

type Colors =
  | "blueBase"
  | "blueDark"
  | "greyLight"
  | "greyBase"
  | "greyDark"
  | "greyDarkness"
  | "yellowBase"
  | "stateBase"
  | "stateText"
  | "blueLight";

type Sizes =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "xxl"
  | "x3"
  | "x4"
  | "x8"
  | "x9";

// Mapped Color & Size types
type Color = { [k in Colors]?: string };
type Size = {
  font: { [k in Sizes]?: string };
  space: { [k in Sizes]?: string };
};

export type Theme = {
  color: Color;
  size: Size;
  shadow: string;
};

const theme = {
  color: {
    blueBase: "#1E213A",
    blueDark: "#100E1D",
    greyLight: "#E7E7EB",
    greyBase: "#A09FB1",
    greyDark: "#88869D",
    greyDarkness: "#6E707A",
    yellowBase: "#FFEC65",
    stateBase: "#585676",
    stateText: "#110E3C",
    blueLight: "#3C47E9",
  },
  size: {
    font: {
      sm: "0.875rem", // 14px
      md: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.5rem", // 24px
      xxl: "2.25rem", // 36px
      x3: "3rem", // 48px
      x4: "4rem", // 64px
      x9: "9rem", // 144px
    },
    space: {
      xs: "0.5rem", // 8px,
      sm: "0.75rem", // 12px
      md: "1rem", // 16px
      lg: "1.125rem", //18px
      xl: "1.375rem", // 22px
      xxl: "2rem", // 32px,
      x3: "3rem", // 48px
      x4: "4rem", // 64px
      x8: "8rem", // 128px
    },
  },
  shadow: "0px 4px 4px 0px rgba(0,0,0,0.25)",
} as const;

export default theme;
