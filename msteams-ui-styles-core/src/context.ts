import { ColorPalate } from './color-palate';
import { ThemeConfig } from './theme-config';
import { ThemeStyle } from './theme-style';

export interface Context {
  rem: (n: number) => string;
  style: <T1, T2, T3>(styles: {
    light: T1,
    dark: T2,
    highContrast: T3,
  }) => T1 | T2 | T3;
  colors: ColorPalate;
}

export function getContext(config: ThemeConfig): Context {
  return {
    rem: (n: number) => `${n * 10.0 / config.baseFontSize}rem`,
    style: <T1, T2, T3>(styles: {
      light: T1,
      dark: T2,
      highContrast: T3,
    }) => {
      if (config.style === ThemeStyle.HighContrast) {
        return styles.highContrast;
      } else if (config.style === ThemeStyle.Dark) {
        return styles.dark;
      } else {
        return styles.light;
      }
    },
    colors: config.colors!,
  };
}
