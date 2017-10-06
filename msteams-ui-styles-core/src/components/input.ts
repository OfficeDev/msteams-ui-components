import { classes, style } from 'typestyle';
import { chooseStyle, Context } from '../context';
import { fontSizes } from './font-sizes';
import { fontWeights } from './font-weights';

interface InputColors {
  rest: {
    background: string;
    border: string;
    underline: string;
  };
  active: {
    background: string;
    underline: string;
  };
  disabled: {
    background: string;
    underline: string;
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
}

function base(context: Context, colors: InputColors) {
  const { rem } = context;
  const sizes = fontSizes(context);
  const weights = fontWeights(context);

  return {
    container: style({
      position: 'relative',
      overflow: 'hidden',
    }),
    input: style({
      height: rem(3.2),
      width: '100%',
      borderRadius: rem(0.3),
      border: `${rem(0.2)} solid ${colors.rest.border}`,
      background: colors.rest.background,
      padding: `${rem(0.8)} ${rem(1.2)}`,
      margin: 0,
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
          },
          '&:focus': {
            borderBottomColor: colors.active.underline,
            background: colors.focus.background,
          },
        },
      }),
    label: classes(style({
      padding: 0,
      margin: 0,
      border: 0,
      color: colors.label,
    }), sizes.caption, weights.regular),
  };
}

function light(context: Context) {
  const { colors } = context;
  return base(context, {
    rest: {
      background: colors.light.gray10,
      border: colors.transparent,
      underline: colors.transparent,
    },
    active: {
      background: colors.light.gray10,
      underline: colors.light.brand00,
    },
    disabled: {
      background: colors.light.gray06,
      underline: colors.transparent,
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
  });
}

function dark(context: Context) {
  const { colors } = context;
  return base(context, {
    rest: {
      background: colors.dark.black,
      border: colors.transparent,
      underline: colors.transparent,
    },
    active: {
      background: colors.dark.black,
      underline: colors.dark.brand00,
    },
    disabled: {
      background: colors.dark.gray10,
      underline: colors.transparent,
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
  });
}

function highContrast(context: Context) {
  const { colors } = context;
  return base(context, {
    rest: {
      background: colors.black,
      border: colors.white,
      underline: colors.transparent,
    },
    active: {
      background: colors.black,
      underline: colors.highContrast.yellow,
    },
    disabled: {
      background: colors.highContrast.green,
      underline: colors.white,
    },
    hover: {
      background: colors.black,
      underline: colors.transparent,
    },
    focus: {
      background: colors.black,
      underline: colors.highContrast.yellow,
    },
    label: colors.white,
  });
}

export function input(context: Context) {
  return chooseStyle(context, light, dark, highContrast);
}
