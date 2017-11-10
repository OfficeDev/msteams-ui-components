import { style } from 'typestyle';
import { chooseStyle, Context } from '../context';

interface RadioButtonColors {
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

function base(context: Context, colors: RadioButtonColors) {
  const { rem, font } = context;
  const { sizes } = font;

  return {
    container: style({
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
    radio: style({
      position: 'relative',
      ['-webkit-user-select']: 'none',
      ['-moz-user-select']: 'none',
      ['-ms-user-select']: 'none',
      userSelect: 'none',
      display: 'inline-block',
      cursor: 'pointer',
      width: rem(1.2),
      height: rem(1.2),
      margin: rem(0.2),
      font: 'inherit',
      padding: 0,
      borderRadius: '100%',
      border: `${rem(0.1)} solid`,
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
          $nest: {
            '& + label': {
              color: colors.disabled.text,
              cursor: 'default',
            },
          },
        },
        '&:focus': {
          boxShadow: `0 0 0 ${rem(0.2)} ${colors.focus.outline}`,
          outline: 'none',
        },
        '&-selected': {
          borderColor: colors.selected.border,
          background: colors.selected.background,
          $nest: {
            '&:hover': {
              borderColor: colors.selected.border,
              background: colors.selected.background,
            },
            '& + label': {
              color: colors.selected.text,
            },
          },
        },
      },
    }),
    label: style(sizes.caption, {
      color: colors.rest.text,
      cursor: 'pointer',
      marginLeft: rem(1),
    }),
  };
}

function light(context: Context) {
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

function dark(context: Context) {
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

function highContrast(context: Context) {
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

export function radioButton(context: Context) {
  return chooseStyle(context, light, dark, highContrast);
}
