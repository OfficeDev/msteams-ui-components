import { chooseStyle, Context } from '../context';

interface ErrorLabelColors {
  text: string;
}

function base(context: Context, colors: ErrorLabelColors) {
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

function light(context: Context) {
  const { colors } = context;
  return base(context, {
    text: colors.light.red,
  });
}

function dark(context: Context) {
  const { colors } = context;
  return base(context, {
    text: colors.dark.red,
  });
}

function highContrast(context: Context) {
  const { colors } = context;
  return base(context, {
    text: colors.highContrast.yellow,
  });
}

export function errorLabel(context: Context) {
  return chooseStyle(context, light, dark, highContrast);
}
