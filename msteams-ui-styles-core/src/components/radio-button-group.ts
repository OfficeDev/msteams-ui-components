import { chooseStyle, IContext } from '../context';
import { errorLabel } from './error-label';
import { label } from './label';

interface IRadioButtonColors {
  label: string;
  errorLabel: string;
}

function base(context: IContext, colors: IRadioButtonColors) {
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

function light(context: IContext) {
  const { colors } = context;
  return base(context, {
    label: colors.light.gray01,
    errorLabel: colors.light.red,
  });
}

function dark(context: IContext) {
  const { colors } = context;
  return base(context, {
    label: colors.dark.white,
    errorLabel: colors.dark.red,
  });
}

function highContrast(context: IContext) {
  const { colors } = context;
  return base(context, {
    label: colors.highContrast.white,
    errorLabel: colors.highContrast.yellow,
  });
}

export function radioButtonGroup(context: IContext) {
  return chooseStyle(context, light, dark, highContrast);
}
