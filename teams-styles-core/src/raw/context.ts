import { Colors, getDefaultThemeColors } from './colors/index';
import { ThemeConfig } from './theme-config';

export interface Context {
  rem: (n: number) => string;
  colors: Colors;
}

export function getContext(config: ThemeConfig): Context {
  return {
    rem: (n: number) => `${n * 10.0 / config.basePx!}rem`,
    colors: config.colors!,
  };
}
