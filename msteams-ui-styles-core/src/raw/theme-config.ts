import { ColorPalate } from './colors';

export enum ThemeStyle {
  Light = 0,
  Dark = 1,
  HighContrast = 2,
}

export interface ThemeConfig {
  baseFontSize: number;
  style: ThemeStyle;
  colors: ColorPalate;
}
