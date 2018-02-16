import { chooseStyle, IContext } from '../context';

interface ICompoundButtonColors {
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

function base(context: IContext, colors: ICompoundButtonColors) {
  const names = {
    container: 'btn-compound',
    icon: 'btn-compound-icon',
    primaryText: 'btn-compound-txt1',
    secondaryText: 'btn-compound-txt2',
  };

  const { css, font, rem } = context;
  const { sizes, weights } = font;

  return {
    container: css(names.container, {
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
          outlineOffset: `-${rem(0.4)}`,
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
    icon: css(names.icon, {
      width: rem(4.4),
      height: rem(4.4),
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
    }),
    primaryText: css(names.primaryText,
      sizes.base, weights.semibold, {
      textAlign: 'left',
      paddingLeft: rem(1.2),
      paddingRight: rem(1.2),
    }),
    secondaryText: css(names.secondaryText,
      sizes.caption, weights.regular,
      {
      textAlign: 'left',
      paddingLeft: rem(1.2),
      paddingRight: rem(1.2),
    }),
  };
}

function light(context: IContext) {
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
      outline: colors.light.black,
    },
    disabled: {
      background: colors.transparent,
      text: colors.light.gray04,
      border: colors.light.gray12,
    },
  });
}

function dark(context: IContext) {
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
      outline: colors.dark.white,
    },
    disabled: {
      background: colors.transparent,
      text: colors.dark.gray04,
      border: colors.dark.gray12,
    },
  });
}

function highContrast(context: IContext) {
  const { colors } = context;
  return base(context, {
    rest: {
      background: colors.transparent,
      text: colors.highContrast.white,
      border: colors.highContrast.white,
    },
    hover: {
      background: colors.highContrast.yellow,
      border: colors.highContrast.white,
      text: colors.highContrast.black,
    },
    down: {
      background: colors.highContrast.yellow,
      text: colors.highContrast.black,
      border: colors.highContrast.white,
    },
    focus: {
      text: colors.highContrast.black,
      border: colors.highContrast.white,
      background: colors.highContrast.yellow,
      outline: colors.transparent,
    },
    disabled: {
      background: colors.highContrast.green,
      text: colors.highContrast.black,
      border: colors.highContrast.white,
    },
  });
}

export function compoundButton(context: IContext) {
  return chooseStyle(context, light, dark, highContrast);
}
