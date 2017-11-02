import { classes, style } from 'typestyle';
import { chooseStyle, Context } from '../context';
import { fontSizes } from './font-sizes';
import { fontWeights } from './font-weights';

interface CheckboxGroupColors {
  label: string;
  errorLabel: string;
}

function base(context: Context, colors: CheckboxGroupColors) {
  const { rem } = context;
  const sizes = fontSizes(context);
  const weights = fontWeights(context);

  return {
    container: style({
      display: 'inline-block',
    }),
    label: classes(style({
      display: 'inline-block',
      padding: 0,
      border: 0,
      marginBottom: rem(0.8),
      marginLeft: 0,
      marginRight: 0,
      marginTop: 0,
      color: colors.label,
    }), sizes.caption, weights.regular),
    errorLabel: classes(style({
      color: colors.errorLabel,
      padding: 0,
      border: 0,
      marginBottom: rem(0.8),
      marginLeft: 0,
      marginRight: 0,
      marginTop: 0,
      float: 'right',
    }), sizes.caption, weights.regular),
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

export function checkboxGroup(context: Context) {
  return chooseStyle(context, light, dark, highContrast);
}
