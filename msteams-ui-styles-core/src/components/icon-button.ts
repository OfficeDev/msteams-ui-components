import { chooseStyle, IContext } from '../context';

interface IIconButtonColors {
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

function base(context: IContext, colors: IIconButtonColors) {
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
      '&:active:hover:enabled': {
        color: colors.down.text,
        borderColor: colors.down.border,
      },
      '&:active:enabled': {
        color: colors.down.text,
        borderColor: colors.down.border,
      },
      '&:focus:enabled': {
        color: colors.focus.text,
        borderRadius: '50%',
        border: `${rem(0.2)} solid ${colors.focus.border}`,
      },
      '&:disabled': {
        color: colors.disabled.text,
        cursor: 'default',
      },
    },
  });
}

function light(context: IContext) {
  const { colors } = context;
  return base(context, {
    hover: {
      text: colors.light.brand04,
      border: colors.light.brand04,
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

function dark(context: IContext) {
  const { colors } = context;
  return base(context, {
    hover: {
      text: colors.dark.brand04,
      border: colors.dark.brand04,
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

function highContrast(context: IContext) {
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

export function iconButton(context: IContext) {
  return chooseStyle(context, light, dark, highContrast);
}
