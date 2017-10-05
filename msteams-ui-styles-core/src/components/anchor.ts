import { style } from 'typestyle';
import { chooseStyle, Context } from '../context';

interface AnchorColors {
  rest: {
    text: string;
  };
  hover: {
    text: string;
  };
  down: {
    text: string;
  };
  disabled: {
    text: string;
  };
  focus: {
    text: string;
  };
  visited: {
    text: string;
  };
}

function base(context: Context, colors: AnchorColors) {
  return style({
    textDecoration: 'none',
    color: colors.rest.text,
    outline: 'none',
  }, {
    $nest: {
      '&:link': {
        textDecoration: 'none',
        color: colors.rest.text,
        outline: 'none',
      },
      '&:visited': {
        color: colors.visited.text,
      },
      '&:hover': {
        textDecoration: 'underline',
        color: colors.hover.text,
      },
      '&:active': {
        textDecoration: 'underline',
        color: colors.down.text,
      },
      '&:focus': {
        textDecoration: 'underline',
        color: colors.focus.text,
      },
      '&:disabled': {
        color: colors.disabled.text,
      },
    },
  });
}

function light(context: Context) {
  return base(context, {
    rest: {
      text: context.colors.light.brand00,
    },
    hover: {
      text: context.colors.light.brand00,
    },
    down: {
      text: context.colors.light.brand04,
    },
    disabled: {
      text: context.colors.light.gray06,
    },
    focus: {
      text: context.colors.light.brand00,
    },
    visited: {
      text: context.colors.light.brand00,
    },
  });
}

function dark(context: Context) {
  return base(context, {
    rest: {
      text: context.colors.dark.brand00,
    },
    hover: {
      text: context.colors.dark.brand00,
    },
    down: {
      text: context.colors.dark.brand04,
    },
    disabled: {
      text: context.colors.dark.gray06,
    },
    focus: {
      text: context.colors.dark.brand00,
    },
    visited: {
      text: context.colors.dark.brand00,
    },
  });
}

function highContrast(context: Context) {
  return base(context, {
    rest: {
      text: context.colors.highContrast.yellow,
    },
    hover: {
      text: context.colors.highContrast.yellow,
    },
    down: {
      text: context.colors.highContrast.yellow,
    },
    disabled: {
      text: context.colors.highContrast.green,
    },
    focus: {
      text: context.colors.highContrast.yellow,
    },
    visited: {
      text: context.colors.highContrast.yellow,
    },
  });
}

export function anchor(context: Context) {
  return chooseStyle(context, light, dark, highContrast);
}

export default anchor;
