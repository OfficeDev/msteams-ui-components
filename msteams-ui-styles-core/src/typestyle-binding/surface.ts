import { style } from 'typestyle';
import { font } from '../raw/typography/fonts/font';
import { size } from '../raw/typography/sizes/size';
import { Context } from './context';

interface SurfaceColors {
  background: string;
  font: string;
}

function base(context: Context, colors: SurfaceColors) {
  const fonts = font(context);
  const sizes = size(context);
  return style({
    ...fonts.regular,
    ...sizes.base,
    color: colors.font,
    backgroundColor: colors.background,
  });
}

function light(context: Context) {
  const { colors } = context;
  return base(context, {
    background: colors.white,
    font: colors.light.black,
  });
}

function dark(context: Context) {
  const { colors } = context;
  return base(context, {
    background: colors.dark.gray10,
    font: colors.dark.white,
  });
}

function highContrast(context: Context) {
  const { colors } = context;
  return base(context, {
    background: colors.black,
    font: colors.white,
  });
}

export function surface(context: Context) {
  return context.style({
    light: light(context),
    dark: dark(context),
    highContrast: highContrast(context),
  });
}
