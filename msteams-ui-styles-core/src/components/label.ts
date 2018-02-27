import { chooseStyle, IContext } from '../context';

interface ILabelColors {
  text: string;
}

function base(context: IContext, colors: ILabelColors) {
  const name = 'label';
  const { css, font, rem } = context;
  const { sizes, weights } = font;

  return css(name,
    sizes.caption, weights.regular, {
    display: 'inline-block',
    color: colors.text,
    padding: 0,
    border: 0,
    marginBottom: rem(0.8),
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    float: 'left',
  });
}

function light(context: IContext) {
  const { colors } = context;
  return base(context, {
    text: colors.light.gray01,
  });
}

function dark(context: IContext) {
  const { colors } = context;
  return base(context, {
    text: colors.dark.white,
  });
}

function highContrast(context: IContext) {
  const { colors } = context;
  return base(context, {
    text: colors.highContrast.white,
  });
}

export function label(context: IContext) {
  return chooseStyle(context, light, dark, highContrast);
}
