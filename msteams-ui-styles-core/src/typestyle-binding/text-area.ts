import { style } from 'typestyle';
import { font } from '../raw/typography/fonts/font';
import { size } from '../raw/typography/sizes/size';
import { Context } from './context';

interface TextAreaColors {
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

function base(context: Context, colors: TextAreaColors) {
  const { rem } = context;
  const fonts = font(context);
  const sizes = size(context);

  return {
    container: style({
      position: 'relative',
      padding: 0,
      margin: 0,
      display: 'block',
      overflow: 'hidden',
    }),
    textArea: style({
      width: '100%',
      resize: 'none',
      borderRadius: rem(0.3),
      border: `${rem(0.2)} solid ${colors.rest.border}`,
      background: colors.rest.background,
      padding: `${rem(0.8)} ${rem(1.2)}`,
      margin: 0,
      outline: 'none',
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
    label: style({
      ...fonts.regular,
      ...sizes.caption,
      padding: 0,
      margin: 0,
      border: 0,
      color: colors.label,
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

export function textArea(context: Context) {
  return context.style({
    light: light(context),
    dark: dark(context),
    highContrast: highContrast(context),
  });
}
