import { ColorPalate } from './colors';
import { ThemeStyle } from './theme-style';

export interface ThemeConfig {
  baseFontSize: number;
  style: ThemeStyle;
  colors: ColorPalate;
}
