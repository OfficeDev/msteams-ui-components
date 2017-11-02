import { classes, style } from 'typestyle';
import { chooseStyle, Context } from '../context';
import { fontSizes } from './font-sizes';
import { fontWeights } from './font-weights';

interface CheckboxGroupColors {
  label: string;
  errorLabel: string;
}

function base(context: Context, colors: CheckboxGroupColors) {
  const sizes = fontSizes(context);
  const weights = fontWeights(context);

  return {
    container: style({
      display: 'inline-block',
    }),
    label: classes(style({
      display: 'inline-block',
      flex: '0 0 auto',
      padding: 0,
      border: 0,
      margin: 0,
      color: colors.label,
    }), sizes.caption, weights.regular),
    errorLabel: classes(style({
      color: colors.errorLabel,
      padding: 0,
      border: 0,
      margin: 0,
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
