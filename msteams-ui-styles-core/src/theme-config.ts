import { ColorPalette } from './colors';
import { ICSSFunction } from './context';
import { ThemeStyle } from './theme-style';

export interface IThemeConfig {
  baseFontSize: number;
  style: ThemeStyle;
  colors?: ColorPalette;
  css?: ICSSFunction;
}
