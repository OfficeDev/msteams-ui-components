import { style } from 'typestyle/lib';
import { NestedCSSProperties } from 'typestyle/lib/types';
import { ColorPalate, Colors } from './colors';
import { FontSizePalate } from './font-size-palate';
import { FontSizes } from './font-sizes';
import { FontWeightPalate } from './font-weight-palate';
import { FontWeights } from './font-weights';
import { Spacing } from './spacing';
import { SpacingPalate } from './spacing-palate';
import { ThemeConfig } from './theme-config';
import { ThemeStyle } from './theme-style';

export interface RemFunction {
  (n: number): string;
}

export interface CSSFunction {
  (name: string, ...objects: Array<false | NestedCSSProperties | null | undefined>): string;
}

export interface StyleFunction<T> {
  (context: Context): T;
}

export interface Context {
  rem: RemFunction;
  css: CSSFunction;
  style: ThemeStyle;
  colors: ColorPalate;
  spacing: SpacingPalate;
  font: {
    weights: FontWeightPalate;
    sizes: FontSizePalate;
  };
}

export function chooseStyle<T>(
  context: Context,
  light: StyleFunction<T>,
  dark: StyleFunction<T>,
  highContrast: StyleFunction<T>): T {
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

export function getContext(config: ThemeConfig): Context {
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
