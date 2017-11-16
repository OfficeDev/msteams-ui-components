import { chooseStyle, Context } from '../context';

interface SurfaceColors {
  background: string;
  font: string;
}

function base(context: Context, colors: SurfaceColors) {
  const name = 'surface';
  const { css, font } = context;
  const { sizes, weights } = font;

  return css(name,
    weights.regular, sizes.base, {
    color: colors.font,
    backgroundColor: colors.background,
  });
}

function light(context: Context) {
  const { colors } = context;
  return base(context, {
    background: colors.light.gray10,
    font: colors.light.black,
  });
}

function dark(context: Context) {
  const { colors } = context;
  return base(context, {
    background: colors.dark.black,
    font: colors.dark.white,
  });
}

function highContrast(context: Context) {
  const { colors } = context;
  return base(context, {
    background: colors.highContrast.black,
    font: colors.highContrast.white,
  });
}

export function surface(context: Context) {
  return chooseStyle(context, light, dark, highContrast);
}
