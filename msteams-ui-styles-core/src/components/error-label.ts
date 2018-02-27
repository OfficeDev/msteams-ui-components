import { chooseStyle, IContext } from '../context';

interface IErrorLabelColors {
  text: string;
}

function base(context: IContext, colors: IErrorLabelColors) {
  const name = 'error-label';
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
    float: 'right',
  });
}

function light(context: IContext) {
  const { colors } = context;
  return base(context, {
    text: colors.light.red,
  });
}

function dark(context: IContext) {
  const { colors } = context;
  return base(context, {
    text: colors.dark.red,
  });
}

function highContrast(context: IContext) {
  const { colors } = context;
  return base(context, {
    text: colors.highContrast.yellow,
  });
}

export function errorLabel(context: IContext) {
  return chooseStyle(context, light, dark, highContrast);
}
