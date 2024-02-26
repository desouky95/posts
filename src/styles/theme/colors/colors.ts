let _colors: ThemeColors = {
  grey: {
    "100": "#fafbfe",
    "200": "#b4bdca",
    "300": "#8292a7",
    "400": "#57687d",
    "500": "#353e4b",
    "600": "#111519",
    main: "#e6e9ed",
    accent: "#313a46",
  },
  white: {
    main: "#FFF",
    accent: "#000",
  },
  pink: {
    "100": "#fb7d96",
    "200": "#fb6c89",
    "300": "#fa5c7c",
    "400": "#e15370",
    "500": "#c84a63",
    "600": "#af4057",
    main: "#fa5c7c",
  },
  green: {
    100: "#3bd9ac",
    200: "#23d4a1",
    300: "#0acf97",
    400: "#09ba88",
    500: "#08a679",
    600: "#07916a",
    main: "#0acf97",
    accent: "#FFF",
  },
  primary: {
    main: "",
  },
};

_colors.primary = _colors.grey;

export const colors = _colors;
