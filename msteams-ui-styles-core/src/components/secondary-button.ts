import { chooseStyle, IContext } from '../context';

interface ISecondaryButtonColors {
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

function base(context: IContext, colors: ISecondaryButtonColors) {
  const names = {
    button: 'button-secondary',
  };
  const { css, rem } = context;

  return css(names.button, {
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
        boxShadow: `0 ${rem(0.2)} ${rem(0.4)} 0 rgba(0,0,0,0.10)`,
      },
      '&:active:hover:enabled': {
        background: colors.down.background,
        color: colors.down.text,
        borderColor: colors.down.border,
      },
      '&:active:enabled': {
        background: colors.down.background,
        color: colors.down.text,
        borderColor: colors.down.border,
      },
      '&:focus:enabled': {
        outline: `${rem(0.2)} solid ${colors.focus.outline}`,
        outlineOffset: `-${rem(0.4)}`,
        color: colors.focus.text,
        borderColor: colors.focus.border,
        background: colors.focus.background,
        boxShadow: `0 ${rem(0.2)} ${rem(0.4)} 0 rgba(0,0,0,0.10)`,
      },
      '&:disabled': {
        background: colors.disabled.background,
        color: colors.disabled.text,
        borderColor: colors.disabled.border,
        cursor: 'default',
      },
    },
  });
}

function light(context: IContext) {
  const { colors } = context;
  return base(context, {
    rest: {
      background: colors.light.white,
      text: colors.light.black,
      border: colors.light.gray06,
    },
    hover: {
      background: colors.light.gray09,
      text: colors.light.black,
      border: colors.light.gray06,
    },
    down: {
      background: colors.light.gray08,
      text: colors.light.black,
      border: colors.transparent,
    },
    disabled: {
      background: colors.light.gray09,
      text: colors.light.gray06,
      border: colors.light.gray12,
    },
    focus: {
      background: colors.light.gray06,
      text: colors.light.black,
      border: colors.light.white,
      outline: colors.light.black,
    },
  });
}

function dark(context: IContext) {
  const { colors } = context;
  return base(context, {
    rest: {
      background: colors.dark.gray10,
      text: colors.dark.white,
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
      border: colors.dark.black,
      outline: colors.dark.white,
    },
  });
}

function highContrast(context: IContext) {
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

export function secondaryButton(context: IContext) {
  return chooseStyle(context, light, dark, highContrast);
}

export default secondaryButton;
