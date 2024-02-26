declare type VariantSize = "sm" | "md" | "lg";

declare type ThemeBaseProps = {
  size?: VariantSize;
  variant?: ColorName;
};

declare type Color = {
  100?: string;
  200?: string;
  300?: string;
  400?: string;
  500?: string;
  600?: string;
  main: string;
  accent?: string;
};

declare type PlainColor = {
  main: string;
  accent: string;
};

declare type ColorName = "grey" | "white" | "pink" | "primary" | 'green';
declare type ThemeColors = {
  [Name in ColorName]: Color;
};
