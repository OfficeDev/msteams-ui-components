import { chooseStyle, IContext } from '../context';

interface ISurfaceColors {
  background: string;
  font: string;
}

function base(context: IContext, colors: ISurfaceColors) {
  const name = 'surface';
  const { css, font } = context;
  const { sizes, weights } = font;

  return css(name,
    weights.regular, sizes.base, {
    color: colors.font,
    backgroundColor: colors.background,
  });
}

function light(context: IContext) {
  const { colors } = context;
  return base(context, {
    background: colors.light.gray10,
    font: colors.light.black,
  });
}

function dark(context: IContext) {
  const { colors } = context;
  return base(context, {
    background: colors.dark.black,
    font: colors.dark.white,
  });
}

function highContrast(context: IContext) {
  const { colors } = context;
  return base(context, {
    background: colors.highContrast.black,
    font: colors.highContrast.white,
  });
}

export function surface(context: IContext) {
  return chooseStyle(context, light, dark, highContrast);
}
