import { chooseStyle, Context } from '../context';

interface RadioButtonColors {
  label: string;
  errorLabel: string;
}

function base(context: Context, colors: RadioButtonColors) {
  const names = {
    container: 'radio-group',
    label: 'radio-group-label',
    error: 'radio-group-error',
  };
  const { css, font, rem } = context;
  const { sizes, weights } = font;

  return {
    container: css(names.container, {
      display: 'inline-block',
    }),
    label: css(names.label,
      sizes.caption, weights.regular, {
      display: 'inline-block',
      padding: 0,
      border: 0,
      marginBottom: rem(0.8),
      marginLeft: 0,
      marginRight: 0,
      marginTop: 0,
      color: colors.label,
    }),
    errorLabel: css(names.error,
      sizes.caption, weights.regular, {
      color: colors.errorLabel,
      padding: 0,
      border: 0,
      marginBottom: rem(0.8),
      marginLeft: 0,
      marginRight: 0,
      marginTop: 0,
      float: 'right',
    }),
  };
}

function light(context: Context) {
  const { colors } = context;
  return base(context, {
    label: colors.light.gray01,
    errorLabel: colors.light.red,
  });
}

function dark(context: Context) {
  const { colors } = context;
  return base(context, {
    label: colors.dark.white,
    errorLabel: colors.dark.red,
  });
}

function highContrast(context: Context) {
  const { colors } = context;
  return base(context, {
    label: colors.highContrast.white,
    errorLabel: colors.highContrast.yellow,
  });
}

export function radioButtonGroup(context: Context) {
  return chooseStyle(context, light, dark, highContrast);
}
