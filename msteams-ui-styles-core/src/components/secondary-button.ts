import { style } from 'typestyle';
import { chooseStyle, Context } from '../context';

interface SecondaryButtonColors {
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
  disabled: {
    background: string;
    text: string;
    border: string;
  };
  focus: {
    background: string;
    text: string;
    outline: string;
    border: string;
  };
}

function base(context: Context, colors: SecondaryButtonColors) {
  const { rem } = context;

  return style({
    height: rem(3.2),
    minWidth: rem(9.6),
    border: rem(0.2) + ' solid',
    borderRadius: rem(0.3),
    padding: rem(0.4),
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    font: 'inherit',
    background: colors.rest.background,
    color: colors.rest.text,
    borderColor: colors.rest.border,
  }, {
    $nest: {
      '&:hover:enabled': {
        background: colors.hover.background,
        color: colors.hover.text,
        borderColor: colors.hover.border,
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
      '&:focus': {
        color: colors.focus.text,
        borderColor: colors.focus.border,
        background: colors.focus.background,
        outline: `${rem(0.2)} solid ${colors.focus.outline}`,
        outlineOffset: `-${rem(0.4)}`,
      },
    },
  });
}

function light(context: Context) {
  const { colors } = context;
  return base(context, {
    rest: {
      background: colors.light.white,
      text: colors.light.gray02,
      border: colors.light.gray06,
    },
    hover: {
      background: colors.light.gray06,
      text: colors.light.black,
      border: colors.transparent,
    },
    down: {
      background: colors.light.gray04,
      text: colors.light.black,
      border: colors.transparent,
    },
    disabled: {
      background: colors.light.white,
      text: colors.light.gray06,
      border: colors.light.gray12,
    },
    focus: {
      background: colors.light.gray06,
      text: colors.light.black,
      border: colors.transparent,
      outline: colors.light.black,
    },
  });
}

function dark(context: Context) {
  const { colors } = context;
  return base(context, {
    rest: {
      background: colors.dark.gray10,
      text: colors.dark.gray02,
      border: colors.dark.gray06,
    },
    hover: {
      background: colors.dark.gray06,
      text: colors.dark.white,
      border: colors.transparent,
    },
    down: {
      background: colors.dark.gray08,
      text: colors.dark.white,
      border: colors.transparent,
    },
    disabled: {
      background: colors.dark.gray10,
      text: colors.dark.gray06,
      border: colors.dark.gray12,
    },
    focus: {
      background: colors.dark.gray06,
      text: colors.dark.white,
      border: colors.transparent,
      outline: colors.dark.white,
    },
  });
}

function highContrast(context: Context) {
  const { colors } = context;
  return base(context, {
    rest: {
      background: colors.highContrast.black,
      text: colors.highContrast.white,
      border: colors.highContrast.white,
    },
    hover: {
      background: colors.highContrast.yellow,
      text: colors.highContrast.black,
      border: colors.transparent,
    },
    down: {
      background: colors.highContrast.yellow,
      text: colors.highContrast.black,
      border: colors.transparent,
    },
    disabled: {
      background: colors.highContrast.black,
      text: colors.highContrast.green,
      border: colors.highContrast.green,
    },
    focus: {
      background: colors.highContrast.yellow,
      text: colors.highContrast.black,
      outline: colors.transparent,
      border: colors.transparent,
    },
  });
}

export function secondaryButton(context: Context) {
  return chooseStyle(context, light, dark, highContrast);
}

export default secondaryButton;
