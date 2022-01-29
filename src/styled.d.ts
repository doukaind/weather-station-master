import "styled-components";
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
type Color = { [k in Colors]: string };
type Size = {
  font: { [k in Sizes]?: string };
  space: { [k in Sizes]?: string };
};

declare module "styled-components" {
  export type DefaultTheme = {
    color: Color;
    size: Size;
    shadow: string;
  };
}
