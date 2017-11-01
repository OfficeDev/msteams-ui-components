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
        outlineOffset: `-${rem(0.5)}`,
      },
    },
  });
}

function light(context: Context) {
  const { colors } = context;
  return base(context, {
    rest: {
      background: colors.light.white,
      text: colors.light.black,
      border: colors.light.gray06,
    },
    hover: {
      background: colors.light.gray06,
      text: colors.light.black,
      border: colors.light.gray06,
    },
    down: {
      background: colors.light.gray04,
      text: colors.light.black,
      border: colors.light.gray04,
    },
    disabled: {
      background: colors.light.white,
      text: colors.light.gray08,
      border: colors.light.gray10,
    },
    focus: {
      background: colors.light.gray06,
      text: colors.light.black,
      border: colors.light.gray06,
      outline: colors.light.black,
    },
  });
}

function dark(context: Context) {
  const { colors } = context;
  return base(context, {
    rest: {
      background: colors.dark.black,
      text: colors.dark.white,
      border: colors.dark.gray06,
    },
    hover: {
      background: colors.dark.gray06,
      text: colors.dark.white,
      border: colors.dark.gray06,
    },
    down: {
      background: colors.dark.gray04,
      text: colors.dark.white,
      border: colors.dark.gray04,
    },
    disabled: {
      background: colors.dark.black,
      text: colors.dark.gray08,
      border: colors.dark.gray10,
    },
    focus: {
      background: colors.dark.gray06,
      text: colors.dark.white,
      border: colors.dark.gray06,
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
      border: colors.highContrast.white,
    },
    down: {
      background: colors.highContrast.yellow,
      text: colors.highContrast.black,
      border: colors.highContrast.white,
    },
    disabled: {
      background: colors.highContrast.green,
      text: colors.highContrast.black,
      border: colors.highContrast.white,
    },
    focus: {
      background: colors.highContrast.yellow,
      text: colors.highContrast.black,
      outline: colors.transparent,
      border: colors.highContrast.white,
    },
  });
}

export function secondaryButton(context: Context) {
  return chooseStyle(context, light, dark, highContrast);
}

export default secondaryButton;
