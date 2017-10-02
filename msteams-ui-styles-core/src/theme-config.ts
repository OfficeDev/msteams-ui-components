import { ColorPalate } from './color-palate';
import { ThemeStyle } from './theme-style';

export interface ThemeConfig {
  baseFontSize: number;
  style: ThemeStyle;
  colors: ColorPalate;
}
