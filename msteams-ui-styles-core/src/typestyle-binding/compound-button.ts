import { style } from 'typestyle';
import { font } from '../raw/typography/fonts/font';
import { size } from '../raw/typography/sizes/size';
import { Context } from './context';

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

function base(c: Context, colors: CompoundButtonColors) {
  const fonts = font(c);
  const sizes = size(c);

  return {
    container: style({
        minWidth: c.rem(4.8),
        minHeight: c.rem(4.8),
        display: 'flex',
        alignItems: 'center',
        padding: 0,
        border: `${c.rem(0.2)} solid`,
        borderColor: colors.rest.border,
        borderRadius: c.rem(0.3),
        background: colors.rest.background,
        color: colors.rest.text,
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
          outline: `${c.rem(0.2)} solid ${colors.focus.outline}`,
          outlineOffset: `-${c.rem(0.5)}`,
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
      width: c.rem(4.8),
      height: c.rem(4.8),
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
    }),
    primaryText: style({
      ...fonts.semibold,
      ...sizes.base,
      textAlign: 'left',
      paddingLeft: c.rem(1.2),
      paddingRight: c.rem(1.2),
    }),
    secondaryText: style({
      ...fonts.regular,
      ...sizes.caption,
      textAlign: 'left',
      paddingLeft: c.rem(1.2),
      paddingRight: c.rem(1.2),
    }),
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
  return context.style({
    light: light(context),
    dark: dark(context),
    highContrast: highContrast(context),
  });
}
