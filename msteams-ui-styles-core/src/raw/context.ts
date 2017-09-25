import { ColorPalate } from './colors';
import { ThemeConfig } from './theme-config';

export interface Context {
  rem: (n: number) => string;
  style: <T>(styles: { [key: number]: T }) => T;
  colors: ColorPalate;
}

export function getContext(config: ThemeConfig): Context {
  return {
    rem: (n: number) => `${n * 10.0 / config.baseFontSize}rem`,
    style: <T>(styles: { [key: number]: T }) => styles[config.style],
    colors: config.colors!,
  };
}
