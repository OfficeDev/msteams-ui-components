import { ColorPalate } from './colors';
import { CSSFunction } from './context';
import { ThemeStyle } from './theme-style';

export interface ThemeConfig {
  baseFontSize: number;
  style: ThemeStyle;
  colors: ColorPalate;
  css?: CSSFunction;
}
