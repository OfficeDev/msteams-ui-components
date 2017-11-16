import { chooseStyle, Context } from '../context';
import { errorLabel } from '../index';
import { label } from './label';

interface InputColors {
  rest: {
    background: string;
    border: string;
    underline: string;
    text: string;
  };
  active: {
    background: string;
    underline: string;
  };
  disabled: {
    background: string;
    underline: string;
    text: string;
  };
  hover: {
    background: string;
    underline: string;
  };
  focus: {
    background: string;
    underline: string;
  };
  errorIcon: string;
}

function base(context: Context, colors: InputColors) {
  const names = {
    container: 'input-container',
    input: 'input-field',
    label: 'input-label',
    error: 'input-error',
    errorIcon: 'input-error-icon',
  };
  const { css, rem } = context;

  const labelClass = label(context);
  const errorLabelClass = errorLabel(context);

  return {
    container: css(names.container, {
      position: 'relative',
      overflow: 'hidden',
    }),
    input: css(names.input, {
      height: rem(3.2),
      width: '100%',
      borderRadius: rem(0.3),
      border: `${rem(0.2)} solid ${colors.rest.border}`,
      background: colors.rest.background,
      padding: `${rem(0.8)} ${rem(1.2)}`,
      margin: 0,
      color: colors.rest.text,
      font: 'inherit',
      outline: 'none',
      ['-webkit-box-sizing']: 'border-box',
      ['-moz-box-sizing']: 'border-box',
      boxSizing: 'border-box',
    }, {
        $nest: {
          '&:active:enabled': {
            background: colors.active.background,
            borderBottomColor: colors.active.underline,
          },
          '&:hover:inactive:enabled': {
            background: colors.hover.background,
            borderBottomColor: colors.hover.underline,
          },
          '&:disabled': {
            background: colors.disabled.background,
            borderBottomColor: colors.disabled.underline,
            color: colors.disabled.text,
          },
          '&:focus': {
            borderBottomColor: colors.active.underline,
            background: colors.focus.background,
          },
        },
      }),
    label: labelClass,
    errorLabel: errorLabelClass,
    errorIcon: css(names.errorIcon, {
      position: 'absolute',
      color: colors.errorIcon,
      right: rem(1.2),
      bottom: rem(0.9),
    }),
  };
}

function light(context: Context) {
  const { colors } = context;
  return base(context, {
    rest: {
      background: colors.light.gray10,
      border: colors.transparent,
      underline: colors.transparent,
      text: colors.light.gray02,
    },
    active: {
      background: colors.light.gray10,
      underline: colors.light.brand00,
    },
    disabled: {
      background: colors.light.gray12,
      underline: colors.transparent,
      text: colors.light.gray08,
    },
    hover: {
      background: colors.light.gray10,
      underline: colors.transparent,
    },
    focus: {
      background: colors.light.gray10,
      underline: colors.light.brand00,
    },
    errorIcon: colors.light.red,
  });
}

function dark(context: Context) {
  const { colors } = context;
  return base(context, {
    rest: {
      background: colors.dark.black,
      border: colors.transparent,
      underline: colors.transparent,
      text: colors.dark.gray02,
    },
    active: {
      background: colors.dark.black,
      underline: colors.dark.brand00,
    },
    disabled: {
      background: colors.dark.gray12,
      underline: colors.transparent,
      text: colors.dark.gray08,
    },
    hover: {
      background: colors.dark.black,
      underline: colors.transparent,
    },
    focus: {
      background: colors.dark.black,
      underline: colors.dark.brand00,
    },
    errorIcon: colors.dark.red,
  });
}

function highContrast(context: Context) {
  const { colors } = context;
  return base(context, {
    rest: {
      background: colors.highContrast.black,
      border: colors.highContrast.white,
      underline: colors.transparent,
      text: colors.highContrast.white,
    },
    active: {
      background: colors.highContrast.black,
      underline: colors.highContrast.yellow,
    },
    disabled: {
      background: colors.highContrast.green,
      underline: colors.highContrast.white,
      text: colors.highContrast.white,
    },
    hover: {
      background: colors.highContrast.black,
      underline: colors.transparent,
    },
    focus: {
      background: colors.highContrast.black,
      underline: colors.highContrast.yellow,
    },
    errorIcon: colors.highContrast.yellow,
  });
}

export function input(context: Context) {
  return chooseStyle(context, light, dark, highContrast);
}
