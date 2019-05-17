import { keyframes } from 'typestyle';
import { chooseStyle, IContext } from '../context';
import { errorLabel } from '../index';
import { label } from './label';

interface IInputColors {
  rest: {
    background: string;
    border: string;
    underline: string;
    text: string;
    placeholder: string;
  };
  active: {
    background: string;
    underline: string;
    text: string;
  };
  disabled: {
    border: string;
    background: string;
    underline: string;
    text: string;
    placeholder: string;
  };
  hover: {
    background: string;
    underline: string;
  };
  focus: {
    background: string;
    underline: string;
    text: string;
  };
  errorIcon: string;
  successIcon: string;
  spinner: string;
}

function base(context: IContext, colors: IInputColors) {
  const names = {
    container: 'input-container',
    input: 'input-field',
    label: 'input-label',
    error: 'input-error',
    errorIcon: 'input-error-icon',
    successIcon: 'input-success-icon',
    spinner: 'input-spinner',
  };
  const { css, rem } = context;

  const labelClass = label(context);
  const errorLabelClass = errorLabel(context);

  const hideSuccessIconAnimationName = keyframes({
    '0%': { opacity: 1 },
    '99%': { opacity: 1 },
    '100%': { opacity: 0 },
  });

  const spinAnimationName = keyframes({
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  });

  return {
    container: css(names.container, {
      overflow: 'hidden',
      position: 'relative',
      display: 'block',
    }),
    input: css(names.input, {
      clear: 'both',
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
            color: colors.active.text
          },
          '&:hover:inactive:enabled': {
            background: colors.hover.background,
            borderBottomColor: colors.hover.underline,
            color: colors.rest.text,
          },
          '&:disabled': {
            borderColor: colors.disabled.border,
            background: colors.disabled.background,
            borderBottomColor: colors.disabled.underline,
            color: colors.disabled.text,
            $nest: {
              '&::placeholder': {
                color: colors.disabled.placeholder,
                opacity: 1,
              },
              '&::-webkit-input-placeholder': {
                color: colors.disabled.placeholder,
              },
              '&::-moz-placeholder': {
                color: colors.disabled.placeholder,
              },
              '&:-ms-input-placeholder': {
                color: colors.disabled.placeholder,
              },
              '&::-ms-input-placeholder': {
                color: colors.disabled.placeholder,
              },
              '&:-moz-placeholder': {
                color: colors.disabled.placeholder,
              },
            },
          },
          '&:focus': {
            borderBottomColor: colors.active.underline,
            background: colors.focus.background,
            color: colors.focus.text,
          },
          '&::placeholder': {
            color: colors.rest.placeholder,
            opacity: 1,
          },
          '&::-webkit-input-placeholder': {
            color: colors.rest.placeholder,
          },
          '&::-moz-placeholder': {
            color: colors.rest.placeholder,
          },
          '&:-ms-input-placeholder': {
            color: colors.rest.placeholder,
          },
          '&::-ms-input-placeholder': {
            color: colors.rest.placeholder,
          },
          '&:-moz-placeholder': {
            color: colors.rest.placeholder,
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
    successIcon: css(names.successIcon, {
      position: 'absolute',
      color: colors.successIcon,
      right: rem(1.2),
      bottom: rem(0.9),
      opacity: 0,
      animationName: hideSuccessIconAnimationName,
      animationDuration: '5s',
    }),
    spinner: css(names.spinner, {
      position: 'absolute',
      border: `solid ${rem(0.2)} transparent`,
      borderTop: `solid ${rem(0.2)} ${colors.spinner}`,
      borderRadius: '50%',
      width: rem(1.6),
      height: rem(1.6),
      right: rem(1.2),
      bottom: rem(0.9),
      animation: `${spinAnimationName} 2s linear infinite`,
    }),
  };
}

function light(context: IContext) {
  const { colors } = context;
  return base(context, {
    rest: {
      background: colors.light.gray10,
      border: colors.transparent,
      underline: colors.transparent,
      text: colors.light.gray18,
      placeholder: colors.light.gray02,
    },
    active: {
      background: colors.light.gray10,
      underline: colors.light.brand00,
      text: colors.light.black,
    },
    disabled: {
      border: colors.transparent,
      background: colors.light.gray12,
      underline: colors.transparent,
      text: colors.light.gray08,
      placeholder: colors.light.gray06,
    },
    hover: {
      background: colors.light.gray10,
      underline: colors.transparent,
    },
    focus: {
      background: colors.light.gray10,
      underline: colors.light.brand00,
      text: colors.light.black,
    },
    errorIcon: colors.light.red,
    successIcon: colors.light.green1,
    spinner: colors.light.brand00,
  });
}

function dark(context: IContext) {
  const { colors } = context;
  return base(context, {
    rest: {
      background: colors.dark.black,
      border: colors.transparent,
      underline: colors.transparent,
      text: colors.dark.white,
      placeholder: colors.dark.gray02,
    },
    active: {
      background: colors.dark.black,
      underline: colors.dark.brand00,
      text: colors.dark.white,
    },
    disabled: {
      border: colors.transparent,
      background: colors.dark.gray12,
      underline: colors.transparent,
      text: colors.dark.gray08,
      placeholder: colors.dark.gray06,
    },
    hover: {
      background: colors.dark.black,
      underline: colors.transparent,
    },
    focus: {
      background: colors.dark.black,
      underline: colors.dark.brand00,
      text: colors.dark.white,
    },
    errorIcon: colors.dark.red,
    successIcon: colors.dark.green,
    spinner: colors.dark.brand00,
  });
}

function highContrast(context: IContext) {
  const { colors } = context;
  return base(context, {
    rest: {
      background: colors.highContrast.black,
      border: colors.highContrast.white,
      underline: colors.transparent,
      text: colors.highContrast.white,
      placeholder: colors.highContrast.white,
    },
    active: {
      background: colors.highContrast.black,
      underline: colors.highContrast.yellow,
      text: colors.highContrast.white
    },
    disabled: {
      border: colors.highContrast.green,
      background: colors.highContrast.black,
      underline: colors.highContrast.white,
      text: colors.highContrast.green,
      placeholder: colors.highContrast.green,
    },
    hover: {
      background: colors.highContrast.black,
      underline: colors.transparent,
    },
    focus: {
      background: colors.highContrast.black,
      underline: colors.highContrast.yellow,
      text: colors.highContrast.white,
    },
    errorIcon: colors.highContrast.yellow,
    successIcon: colors.highContrast.green,
    spinner: colors.highContrast.blue,
  });
}

export function input(context: IContext) {
  return chooseStyle(context, light, dark, highContrast);
}
