import { classes, style } from 'typestyle';
import { chooseStyle, Context } from '../context';
import { fontSizes } from './font-sizes';
import { fontWeights } from './font-weights';

interface CompoundButtonColors {
  rest: {
    background: string;
    text: string;
    border: string;
  };
  hover: {
    background: string;
    text: string;
    border: string;
  };
  down: {
    background: string;
    text: string;
    border: string;
  };
  focus: {
    background: string;
    outline: string;
    text: string;
    border: string;
  };
  disabled: {
    background: string;
    text: string;
    border: string;
  };
}

function base(context: Context, colors: CompoundButtonColors) {
  const { rem } = context;
  const sizes = fontSizes(context);
  const weights = fontWeights(context);

  return {
    container: style({
      minWidth: rem(4.8),
      minHeight: rem(4.8),
      display: 'inline-flex',
      alignItems: 'center',
      padding: 0,
      font: 'inherit',
      verticalAlign: 'middle',
      border: `${rem(0.2)} solid`,
      borderColor: colors.rest.border,
      borderRadius: rem(0.3),
      background: colors.rest.background,
      color: colors.rest.text,
      cursor: 'pointer',
    }, {
      $nest: {
        '&:hover:enabled': {
          background: colors.hover.background,
          color: colors.hover.text,
        },
        '&:focus': {
          color: colors.focus.text,
          borderColor: colors.focus.border,
          background: colors.focus.background,
          outline: `${rem(0.2)} solid ${colors.focus.outline}`,
          outlineOffset: `-${rem(0.5)}`,
        },
        '&:active': {
          background: colors.down.background,
          color: colors.down.text,
          borderColor: colors.down.border,
        },
        '&:disabled': {
          background: colors.disabled.background,
          color: colors.disabled.text,
          borderColor: colors.disabled.border,
        },
      },
    }),
    icon: style({
      width: rem(4.4),
      height: rem(4.4),
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
    }),
    primaryText: classes(style({
      textAlign: 'left',
      paddingLeft: rem(1.2),
      paddingRight: rem(1.2),
    }), sizes.base, weights.semibold),
    secondaryText: classes(style({
      textAlign: 'left',
      paddingLeft: rem(1.2),
      paddingRight: rem(1.2),
    }), sizes.caption, weights.regular),
  };
}

function light(context: Context) {
  const { colors } = context;
  return base(context, {
    rest: {
      background: colors.transparent,
      text: colors.light.black,
      border: colors.light.gray06,
    },
    hover: {
      background: colors.light.gray06,
      border: colors.transparent,
      text: colors.light.black,
    },
    down: {
      background: colors.light.gray04,
      text: colors.light.black,
      border: colors.light.gray04,
    },
    focus: {
      text: colors.light.black,
      border: colors.transparent,
      background: colors.light.gray06,
      outline: colors.black,
    },
    disabled: {
      background: colors.transparent,
      text: colors.light.gray04,
      border: colors.light.gray12,
    },
  });
}

function dark(context: Context) {
  const { colors } = context;
  return base(context, {
    rest: {
      background: colors.transparent,
      text: colors.dark.white,
      border: colors.dark.gray06,
    },
    hover: {
      background: colors.dark.gray06,
      border: colors.transparent,
      text: colors.dark.white,
    },
    down: {
      background: colors.dark.gray04,
      text: colors.dark.white,
      border: colors.dark.gray04,
    },
    focus: {
      text: colors.dark.white,
      border: colors.transparent,
      background: colors.dark.gray06,
      outline: colors.white,
    },
    disabled: {
      background: colors.transparent,
      text: colors.dark.gray04,
      border: colors.dark.gray12,
    },
  });
}

function highContrast(context: Context) {
  const { colors } = context;
  return base(context, {
    rest: {
      background: colors.transparent,
      text: colors.white,
      border: colors.white,
    },
    hover: {
      background: colors.highContrast.yellow,
      border: colors.white,
      text: colors.black,
    },
    down: {
      background: colors.highContrast.yellow,
      text: colors.black,
      border: colors.white,
    },
    focus: {
      text: colors.black,
      border: colors.white,
      background: colors.highContrast.yellow,
      outline: colors.transparent,
    },
    disabled: {
      background: colors.highContrast.green,
      text: colors.black,
      border: colors.white,
    },
  });
}

export function compoundButton(context: Context) {
  return chooseStyle(context, light, dark, highContrast);
}
