import { style } from 'typestyle/lib';
import { NestedCSSProperties } from 'typestyle/lib/types';
import { ColorPalette, Colors } from './colors';
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
  colors: ColorPalette;
  spacing: ISpacingPalate;
  font: {
    weights: IFontWeightPalate;
    sizes: IFontSizePalate;
  };
}

// This function accepts three style functions and based on context,
// calls the right one for the right theme.
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

// Adds the base styles that all components require.
function baseStyleWrapper(styleFunction: ICSSFunction): ICSSFunction {
  return (name: string, ...objects: Array<false | NestedCSSProperties | null | undefined>) => {
    const baseStyles: NestedCSSProperties = {
      boxSizing: 'border-box',
    };
    return styleFunction(name, baseStyles, ...objects);
  };
}

// Wrapper for the typestyle style function that ignores the name parameter.
function typestyleStyle(name: string, ...objects: Array<false | NestedCSSProperties | null | undefined>): string {
  return style(...objects);
}

// Returns the context object based on a config.
export function getContext(config: IThemeConfig): IContext {
  // rem is a function that ensures we size the teams components properly
  // based on all possible page font sizes. Users configure the baseFontSize
  // and we normalize it to a base of 10 so that our components are drawn
  // at a consistent size.
  const rem = (n: number) => `${n * 10.0 / config.baseFontSize}rem`;

  // css is the function used to inject the styles into whatever form we
  // want to distribute (directly into webpage, or into a CSS file, etc).
  // We use baseStyleWrapper to add the base styles to all of our
  // components.
  const css = baseStyleWrapper(config.css || typestyleStyle);

  // Create and return the context object.
  return {
    rem,
    css,
    style: config.style,
    colors: config.colors || Colors,
    spacing: Spacing(rem),
    font: {
      weights: FontWeights(rem),
      sizes: FontSizes(rem),
    },
  };
}
