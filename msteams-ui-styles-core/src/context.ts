import { style } from 'typestyle/lib';
import { NestedCSSProperties } from 'typestyle/lib/types';
import { ColorPalate, Colors } from './colors';
import { IFontSizePalate } from './font-size-palate';
import { FontSizes } from './font-sizes';
import { IFontWeightPalate } from './font-weight-palate';
import { FontWeights } from './font-weights';
import { Spacing } from './spacing';
import { ISpacingPalate } from './spacing-palate';
import { IThemeConfig } from './theme-config';
import { ThemeStyle } from './theme-style';

export interface IRemFunction {
  (n: number): string;
}

export interface ICSSFunction {
  (name: string, ...objects: Array<false | NestedCSSProperties | null | undefined>): string;
}

export interface IStyleFunction<T> {
  (context: IContext): T;
}

export interface IContext {
  rem: IRemFunction;
  css: ICSSFunction;
  style: ThemeStyle;
  colors: ColorPalate;
  spacing: ISpacingPalate;
  font: {
    weights: IFontWeightPalate;
    sizes: IFontSizePalate;
  };
}

export function chooseStyle<T>(
  context: IContext,
  light: IStyleFunction<T>,
  dark: IStyleFunction<T>,
  highContrast: IStyleFunction<T>): T {
  if (context.style === ThemeStyle.HighContrast) {
    return highContrast(context);
  } else if (context.style === ThemeStyle.Dark) {
    return dark(context);
  } else {
    return light(context);
  }
}

function typestyleStyle(name: string, ...objects: Array<false | NestedCSSProperties | null | undefined>): string {
  return style(...objects);
}

export function getContext(config: IThemeConfig): IContext {
  const rem = (n: number) => `${n * 10.0 / config.baseFontSize}rem`;
  return {
    rem,
    css: config.css || typestyleStyle,
    style: config.style,
    colors: config.colors || Colors,
    spacing: Spacing(rem),
    font: {
      weights: FontWeights(rem),
      sizes: FontSizes(rem),
    },
  };
}
