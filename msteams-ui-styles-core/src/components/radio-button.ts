import { chooseStyle, IContext } from '../context';
import { hiddenInput } from './hidden-input';

interface IRadioButtonColors {
  rest: {
    border: string;
    background: string;
    text: string;
  };
  hover: {
    background: string;
    border: string;
  };
  disabled: {
    background: string;
    border: string;
    text: string;
  };
  focus: {
    outline: string;
  };
  selected: {
    background: string;
    border: string;
    text: string;
  };
  container: string;
}

function base(context: IContext, colors: IRadioButtonColors) {
  const names = {
    container: 'radio-container',
    button: 'radio-button',
    label: 'radio-label',
  };
  const { css, rem, font } = context;
  const { sizes } = font;

  const inputClass = hiddenInput(context);

  return {
    container: css(names.container, {
      border: 'none',
      background: colors.container,
      display: 'flex',
      alignItems: 'center',
      outline: 'none',
      $nest: {
        '& + &' : {
          marginTop: rem(0.8),
        },
      },
    }),
    input: inputClass,
    radio: css(names.button, {
      position: 'relative',
      ['-webkit-user-select']: 'none',
      ['-moz-user-select']: 'none',
      ['-ms-user-select']: 'none',
      display: 'inline-block',
      cursor: 'pointer',
      width: rem(1.2),
      height: rem(1.2),
      margin: rem(0.2),
      marginLeft: rem(0.6),
      font: 'inherit',
      padding: 0,
      borderRadius: '100%',
      border: `${rem(0.1)} solid`,
      borderColor: colors.rest.border,
      background: colors.rest.background,
      $nest: {
        '&:hover:enabled': {
          background: colors.hover.background,
          borderColor: colors.hover.border,
        },
        '&:focus:enabled': {
          boxShadow: `0 0 0 ${rem(0.2)} ${colors.focus.outline}`,
          outline: 'none',
        },
        '&:disabled': {
          background: colors.disabled.background,
          borderColor: colors.disabled.border,
          cursor: 'default',
          $nest: {
            '& + label': {
              color: colors.disabled.text,
              cursor: 'default',
            },
          },
        },
        [`.${inputClass}:checked + &`]: {
          borderColor: colors.selected.border,
          background: colors.selected.background,
          $nest: {
            '& + label': {
              color: colors.selected.text,
            },
          },
        },
      },
    }),
    label: css(names.label, sizes.caption, {
      color: colors.rest.text,
      cursor: 'pointer',
      marginLeft: rem(1),
    }),
  };
}

function light(context: IContext) {
  const { colors } = context;
  return base(context, {
    rest: {
      border: colors.light.gray02,
      background: colors.transparent,
      text: colors.light.gray02,
    },
    hover: {
      border: colors.light.gray02,
      background: colors.transparent,
    },
    disabled: {
      border: colors.light.gray06,
      background: colors.light.gray10,
      text: colors.light.gray06,
    },
    focus: {
      outline: colors.light.brand00Dark,
    },
    selected: {
      background: colors.light.brand00,
      border: colors.light.brand00,
      text : colors.light.black,
    },
    container: colors.transparent,
  });
}

function dark(context: IContext) {
  const { colors } = context;
  return base(context, {
    rest: {
      border: colors.dark.gray02,
      background: colors.transparent,
      text: colors.dark.gray02,
    },
    hover: {
      border: colors.dark.gray02,
      background: colors.transparent,
    },
    disabled: {
      border: colors.dark.gray06,
      background: colors.dark.gray10,
      text: colors.dark.gray06,
    },
    focus: {
      outline: colors.dark.brand00Light,
    },
    selected: {
      background: colors.dark.brand00,
      border: colors.dark.brand00,
      text : colors.dark.white,
    },
    container: colors.transparent,
  });
}

function highContrast(context: IContext) {
  const { colors } = context;
  return base(context, {
    rest: {
      border: colors.highContrast.white,
      background: colors.transparent,
      text: colors.highContrast.white,
    },
    hover: {
      border: colors.highContrast.white,
      background: colors.transparent,
    },
    disabled: {
      background: colors.transparent,
      border: colors.highContrast.green,
      text: colors.highContrast.green,
    },
    focus: {
      outline: colors.highContrast.yellow,
    },
    selected: {
      background: colors.highContrast.blue,
      border: colors.highContrast.blue,
      text: colors.highContrast.white,
    },
    container: colors.transparent,
  });
}

export function radioButton(context: IContext) {
  return chooseStyle(context, light, dark, highContrast);
}
