import { chooseStyle, Context } from '../context';
import { errorLabel } from './error-label';
import { label } from './label';

interface TextAreaColors {
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
  };
  label: string;
  errorIcon: string;
}

function base(context: Context, colors: TextAreaColors) {
  const names = {
    container: 'textarea-container',
    textarea: 'textarea-field',
    labelContainer: 'textarea-label-container',
    label: 'textarea-label',
    error: 'textarea-error',
    errorIcon: 'textarea-error-icon',
  };
  const { css, rem } = context;

  const labelClass = label(context);
  const errorLabelClass = errorLabel(context);

  return {
    container: css(names.container, {
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
    }),
    textArea: css(names.textarea, {
      flex: `1 1 auto`,
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
      resize: 'none',
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
    labelContainer: css(names.labelContainer, {
      flex: '0 0 auto',
    }),
    label: labelClass,
    errorLabel: errorLabelClass,
    errorIcon: css(names.errorIcon, {
      position: 'absolute',
      color: colors.errorIcon,
      right: rem(1.2),
      bottom: rem(2.5),
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
      text: colors.light.black,
      placeholder: colors.light.gray02,
    },
    active: {
      background: colors.light.gray10,
      underline: colors.light.brand00,
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
    },
    label: colors.light.gray01,
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
      text: colors.dark.white,
      placeholder: colors.dark.gray02,
    },
    active: {
      background: colors.dark.black,
      underline: colors.dark.brand00,
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
    },
    label: colors.dark.white,
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
      placeholder: colors.highContrast.white,
    },
    active: {
      background: colors.highContrast.black,
      underline: colors.highContrast.yellow,
    },
    disabled: {
      border: colors.highContrast.green,
      background: colors.highContrast.black,
      underline: colors.highContrast.white,
      text: colors.highContrast.white,
      placeholder: colors.highContrast.green,
    },
    hover: {
      background: colors.highContrast.black,
      underline: colors.transparent,
    },
    focus: {
      background: colors.highContrast.black,
      underline: colors.highContrast.yellow,
    },
    label: colors.highContrast.white,
    errorIcon: colors.highContrast.yellow,
  });
}

export function textArea(context: Context) {
  return chooseStyle(context, light, dark, highContrast);
}
