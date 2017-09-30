import { Context } from '../context';
import { base } from './base';
import { CompoundButtonStyles } from './compoundbutton-styles';

function light(c: Context): CompoundButtonStyles {
  return base(c, {
    normal: {
      background: c.colors.transparent,
      text: c.colors.light.black,
      border: c.colors.light.gray06,
    },
    hover: {
      background: c.colors.light.gray06,
      border: c.colors.transparent,
      text: c.colors.light.black,
    },
    focus: {
      text: c.colors.light.black,
      border: c.colors.transparent,
      background: c.colors.light.gray06,
      outline: c.colors.black,
    },
    disabled: {
      background: c.colors.transparent,
      text: c.colors.light.gray04,
      border: c.colors.light.gray12,
    },
  });
}

function dark(c: Context): CompoundButtonStyles {
  return base(c, {
    normal: {
      background: c.colors.transparent,
      text: c.colors.dark.white,
      border: c.colors.dark.gray06,
    },
    hover: {
      background: c.colors.dark.gray06,
      border: c.colors.transparent,
      text: c.colors.dark.white,
    },
    focus: {
      text: c.colors.dark.black,
      border: c.colors.transparent,
      background: c.colors.dark.gray06,
      outline: c.colors.white,
    },
    disabled: {
      background: c.colors.transparent,
      text: c.colors.dark.gray04,
      border: c.colors.dark.gray12,
    },
  });
}

function highContrast(c: Context): CompoundButtonStyles {
  return base(c, {
    normal: {
      background: c.colors.transparent,
      text: c.colors.white,
      border: c.colors.white,
    },
    hover: {
      background: c.colors.highContrast.yellow,
      border: c.colors.white,
      text: c.colors.black,
    },
    focus: {
      text: c.colors.black,
      border: c.colors.white,
      background: c.colors.highContrast.yellow,
      outline: c.colors.transparent,
    },
    disabled: {
      background: c.colors.highContrast.green,
      text: c.colors.black,
      border: c.colors.white,
    },
  });
}

export function compoundbutton(context: Context): CompoundButtonStyles {
  return context.style({
    light: light(context),
    dark: dark(context),
    highContrast: highContrast(context),
  });
}
