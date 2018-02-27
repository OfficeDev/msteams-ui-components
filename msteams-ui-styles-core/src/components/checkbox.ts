import { baseStyle, iconTypes, iconWeights } from 'msteams-ui-icons-core';
import { chooseStyle, IContext } from '../context';
import { hiddenInput } from './hidden-input';

interface ICheckboxColors {
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
  checked: {
    background: string;
    border: string;
    text: string;
  };
  checkmark: string;
  container: string;
}

function base(context: IContext, colors: ICheckboxColors) {
  baseStyle(iconWeights.Light);
  const names = {
    container: 'check-container',
    checkbox: 'check-box',
    label: 'check-label',
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
          marginTop: rem(0.4),
        },
      },
    }),
    input: inputClass,
    checkbox: css(names.checkbox, {
      position: 'relative',
      ['-webkit-user-select']: 'none',
      ['-moz-user-select']: 'none',
      ['-ms-user-select']: 'none',
      userSelect: 'none',
      display: 'inline-block',
      cursor: 'pointer',
      padding: 0,
      font: 'inherit',
      margin: rem(0.2),
      width: rem(1.6),
      height: rem(1.6),
      border: `${rem(0.1)} solid`,
      borderColor: colors.rest.border,
      background: colors.rest.background,
      borderRadius: rem(0.3),
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
          borderColor: colors.checked.border,
          background: colors.checked.background,
          $nest: {
            '& + label': {
              color: colors.checked.text,
            },
            '&::before': {
              fontFamily: 'MSTeamsIcons-Light',
              content: iconTypes.Ok,
              color: colors.checkmark,
              position: 'absolute',
              fontSize: rem(1.2),
              top: rem(0.1),
              left: rem(0.1),
              width: rem(1.2),
              height: rem(1.2),
              padding: 0,
              lineHeight: rem(1),
            },
          },
        },
      },
    }),
    label: css(names.label, sizes.caption, {
      marginLeft: rem(1),
      cursor: 'pointer',
      color: colors.rest.text,
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
    checked: {
      background: colors.light.brand00,
      border: colors.light.brand00,
      text : colors.light.black,
    },
    checkmark: colors.light.white,
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
    checked: {
      background: colors.dark.brand00,
      border: colors.dark.brand00,
      text : colors.dark.white,
    },
    checkmark: colors.dark.black,
    container: colors.transparent,
  });
}

function highContrast(context: IContext) {
  const { colors } = context;
  return base(context, {
    rest: {
      border: colors.highContrast.white,
      background: colors.transparent,
      text : colors.highContrast.white,
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
    checked: {
      background: colors.highContrast.blue,
      border: colors.highContrast.blue,
      text : colors.highContrast.white,
    },
    checkmark: colors.highContrast.black,
    container: colors.transparent,
  });
}

export function checkbox(context: IContext) {
  return chooseStyle(context, light, dark, highContrast);
}
