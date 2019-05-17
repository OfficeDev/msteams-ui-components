import { chooseStyle, IContext } from '../context';

interface IPrimaryButtonColors {
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

function base(context: IContext, colors: IPrimaryButtonColors) {
  const names = {
    button: 'button-primary',
  };
  const { css, rem } = context;

  return css(names.button, {
    height: rem(3.2),
    minWidth: rem(9.6),
    border: rem(0.2) + ' solid',
    borderRadius: rem(0.2),
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
        boxShadow: `0 ${rem(0.2)} ${rem(0.4)} 0 rgba(0,0,0,0.25)`
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
        outline: `${rem(0.1)} solid ${colors.focus.outline}`,
        outlineOffset: `${rem(-0.2)}`,
        color: colors.focus.text,
        borderColor: colors.focus.border,
        background: colors.focus.background,
        boxShadow: `0 ${rem(0.2)} ${rem(0.4)} 0 rgba(0,0,0,0.25)`,
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
      background: colors.light.brand00,
      text: colors.light.white,
      border: colors.transparent,
    },
    hover: {
      background: colors.light.brand04,
      text: colors.light.white,
      border: colors.transparent,
    },
    down: {
      background: colors.light.brand02,
      text: colors.light.white,
      border: colors.transparent,
    },
    disabled: {
      background: colors.light.gray09,
      text: colors.light.gray06,
      border: colors.transparent,
    },
    focus: {
      background: colors.light.brand04,
      text: colors.light.white,
      outline: colors.light.white,
      border: colors.transparent,
     
    },
  });
}

function dark(context: IContext) {
  const { colors } = context;
  return base(context, {
    rest: {
      background: colors.dark.brand00,
      text: colors.dark.black,
      border: colors.transparent,
    },
    hover: {
      background: colors.dark.brand04,
      text: colors.dark.black,
      border: colors.transparent,
    },
    down: {
      background: colors.dark.brand06,
      text: colors.dark.black,
      border: colors.transparent,
    },
    disabled: {
      background: colors.dark.gray12,
      text: colors.dark.gray06,
      border: colors.transparent,
    },
    focus: {
      background: colors.dark.brand00,
      text: colors.dark.black,
      outline: colors.dark.black,
      border: colors.transparent,
    
    },
  });
}

function highContrast(context: IContext) {
  const { colors } = context;
  return base(context, {
    rest: {
      background: colors.highContrast.white,
      text: colors.highContrast.black,
      border: colors.transparent,
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
      background: colors.highContrast.green,
      text: colors.highContrast.black,
      border: colors.transparent,
    },
    focus: {
      background: colors.highContrast.yellow,
      text: colors.highContrast.black,
      outline: colors.transparent,
      border: colors.transparent,
     
    },
  });
}

export function primaryButton(context: IContext) {
  return chooseStyle(context, light, dark, highContrast);
}
