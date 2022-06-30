import 'styled-components';

interface ColorSchema {
  c25: string;
  c50: string;
  c100: string;
  c200: string;
  c300: string;
  c400: string;
  c500: string;
  c600: string;
  c700: string;
  c800: string;
  c900: string;
}

interface Color {
  gray: ColorSchema;
  primary: ColorSchema;
}

interface FontInter {
  light: string;
  regular: string;
  bold: string;
}

interface FontFamily {
  inter: FontInter;
}

export interface EdgeInsets {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export type ColorScheme = 'light' | 'dark';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: Color;
    fontFamily: FontFamily;
    safeAreaInsets: EdgeInsets;
  }
}
