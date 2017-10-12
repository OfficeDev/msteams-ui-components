import { baseStyle, iconTypes, iconWeights } from 'msteams-ui-icons-core';
import { style } from 'typestyle';
import { chooseStyle, Context } from '../context';

interface CheckboxColors {
  rest: {
    border: string;
    background: string;
  };
  hover: {
    background: string;
    border: string;
  };
  disabled: {
    background: string;
    border: string;
  };
  focus: {
    outline: string;
  };
  checked: {
    background: string;
    border: string;
  };
  checkmark: string;
  container: string;
}

function base(context: Context, colors: CheckboxColors) {
  baseStyle(iconWeights.light);
  const { rem } = context;
  return {
    container: style({
      border: 'none',
      background: colors.container,
      display: 'flex',
      alignItems: 'center',
      outline: 'none',
    }),
    checkbox: style({
      position: 'relative',
      ['-webkit-user-select']: 'none',
      ['-moz-user-select']: 'none',
      ['-ms-user-select']: 'none',
      userSelect: 'none',
      display: 'inline-block',
      cursor: 'pointer',
      width: rem(2),
      height: rem(2),
      margin: rem(0.6),
      border: `${rem(0.2)} solid`,
      borderColor: colors.rest.border,
      background: colors.rest.background,
    }, {
      $nest: {
        '&:hover': {
          background: colors.hover.background,
          borderColor: colors.hover.border,
        },
        '&:disabled': {
          background: colors.disabled.background,
          borderColor: colors.disabled.border,
        },
        '&:focus': {
          outline: `${rem(0.4)} solid ${colors.focus.outline}`,
        },
        '&-checked': {
          borderColor: colors.checked.border,
          background: colors.checked.background,
          $nest: {
            '&:hover': {
              borderColor: colors.checked.border,
              background: colors.checked.background,
            },
            '&::before': {
              fontFamily: 'MSTeamsIcons-Light',
              content: iconTypes.checkmark,
              color: colors.checkmark,
              position: 'absolute',
              fontSize: rem(1.4),
              top: `-${rem(0.1)}`,
              left: rem(0.05),
            },
          },
        },
      },
    }),
    label: style({}),
  };
}

function light(context: Context) {
  const { colors } = context;
  return base(context, {
    rest: {
      border: colors.light.gray03,
      background: colors.light.white,
    },
    hover: {
      background: colors.light.white,
      border: colors.light.gray03,
    },
    disabled: {
      background: colors.light.gray10,
      border: colors.light.gray12,
    },
    focus: {
      outline: colors.light.brand00Dark,
    },
    checked: {
      background: colors.light.brand00,
      border: colors.light.brand00,
    },
    checkmark: colors.light.white,
    container: colors.transparent,
  });
}

function dark(context: Context) {
  const { colors } = context;
  return base(context, {
    rest: {
      border: colors.dark.gray03,
      background: colors.dark.black,
    },
    hover: {
      background: colors.dark.black,
      border: colors.dark.gray03,
    },
    disabled: {
      background: colors.dark.gray10,
      border: colors.dark.gray12,
    },
    focus: {
      outline: colors.dark.brand00Light,
    },
    checked: {
      background: colors.dark.brand00,
      border: colors.dark.brand00,
    },
    checkmark: colors.dark.black,
    container: colors.transparent,
  });
}

function highContrast(context: Context) {
  const { colors } = context;
  return base(context, {
    rest: {
      border: colors.white,
      background: colors.black,
    },
    hover: {
      background: colors.black,
      border: colors.white,
    },
    disabled: {
      background: colors.highContrast.green,
      border: colors.white,
    },
    focus: {
      outline: colors.highContrast.yellow,
    },
    checked: {
      background: colors.highContrast.yellow,
      border: colors.highContrast.yellow,
    },
    checkmark: colors.black,
    container: colors.transparent,
  });
}

export function checkbox(context: Context) {
  return chooseStyle(context, light, dark, highContrast);
}
