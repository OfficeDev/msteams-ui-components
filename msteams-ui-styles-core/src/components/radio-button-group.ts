import { chooseStyle, Context } from '../context';
import { errorLabel } from './error-label';
import { label } from './label';

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
  const { css } = context;

  const labelClass = label(context);
  const errorLabelClass = errorLabel(context);

  return {
    container: css(names.container, {
      clear: 'both',
    }),
    label: labelClass,
    errorLabel: errorLabelClass,
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
