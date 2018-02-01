import { chooseStyle, Context } from '../context';

interface IconButtonColors {
  hover: {
    text: string;
    border: string;
  };
  down: {
    text: string;
    border: string;
  };
  disabled: {
    text: string;
  };
  focus: {
    text: string;
    border: string;
  };
}

function base(context: Context, colors: IconButtonColors) {
  const names = {
    button: 'button-icon',
  };
  const { css, rem } = context;

  return css(names.button, {
    background: 'none',
    height: rem(3.2),
    width: rem(3.2),
    border: 0,
    cursor: 'pointer',
    font: 'inherit',
    outline: 'none',
    color: 'inherit',
  }, {
    $nest: {
      '&:hover:enabled': {
        color: colors.hover.text,
        borderColor: colors.hover.border,
      },
      '&:active': {
        color: colors.down.text,
        borderColor: colors.down.border,
      },
      '&:disabled': {
        color: colors.disabled.text,
      },
      '&:focus': {
        color: colors.focus.text,
        borderRadius: '50%',
        border: `${rem(0.2)} solid ${colors.focus.border}`,
      },
    },
  });
}

function light(context: Context) {
  const { colors } = context;
  return base(context, {
    hover: {
      text: colors.light.brand06,
      border: colors.light.brand06,
    },
    down: {
      text: colors.light.brand06,
      border: colors.light.brand06,
    },
    disabled: {
      text: colors.light.gray06,
    },
    focus: {
      text: colors.light.brand00,
      border: colors.light.brand00,
    },
  });
}

function dark(context: Context) {
  const { colors } = context;
  return base(context, {
    hover: {
      text: colors.dark.brand06,
      border: colors.dark.brand06,
    },
    down: {
      text: colors.dark.brand06,
      border: colors.dark.brand06,
    },
    disabled: {
      text: colors.dark.gray06,
    },
    focus: {
      text: colors.dark.brand00,
      border: colors.dark.brand00,
    },
  });
}

function highContrast(context: Context) {
  const { colors } = context;
  return base(context, {
    hover: {
      text: colors.highContrast.yellow,
      border: colors.highContrast.yellow,
    },
    down: {
      text: colors.highContrast.yellow,
      border: colors.highContrast.yellow,
    },
    disabled: {
      text: colors.highContrast.green,
    },
    focus: {
      text: colors.highContrast.yellow,
      border: colors.highContrast.yellow,
    },
  });
}

export function iconButton(context: Context) {
  return chooseStyle(context, light, dark, highContrast);
}
