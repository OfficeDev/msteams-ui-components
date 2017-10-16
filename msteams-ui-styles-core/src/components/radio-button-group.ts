import { classes, style } from 'typestyle';
import { chooseStyle, Context } from '../context';
import { fontSizes } from './font-sizes';
import { fontWeights } from './font-weights';

interface RadioButtonColors {
  label: string;
}

function base(context: Context, colors: RadioButtonColors) {
  const sizes = fontSizes(context);
  const weights = fontWeights(context);

  return {
    label: classes(style({
      display: 'inline-block',
      flex: '0 0 auto',
      padding: 0,
      border: 0,
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0,
      marginTop: 0,
      color: colors.label,
    }), sizes.caption, weights.regular),
  };
}

function light(context: Context) {
  const { colors } = context;
  return base(context, {
    label: colors.light.gray01,
  });
}

function dark(context: Context) {
  const { colors } = context;
  return base(context, {
    label: colors.dark.white,
  });
}

function highContrast(context: Context) {
  const { colors } = context;
  return base(context, {
    label: colors.white,
  });
}

export function radioButtonGroup(context: Context) {
  return chooseStyle(context, light, dark, highContrast);
}
