import { style } from 'typestyle';
import { Context } from './context';

export interface TabColors {
  text: string;
  underline: string;
  textActive: string;
  containerUnderline: string;
}

function base(context: Context, colors: TabColors) {
  const { rem } = context;
  const containerClass = style({
    width: '100%',
    boxShadow: `${rem(0)} ${rem(0.2)} ${rem(0.3)} ${rem(-0.3)} ${colors.containerUnderline}`,
    padding: 0,
    margin: 0,
  });

  const normalClass = style({
    $nest: {
      [`.${containerClass} &`]: {
        outline: 'none',
        background: 0,
        border: 0,
        padding: `${rem(1)}`,
        margin: 0,
        cursor: 'pointer',
        display: 'inline-block',
        borderBottom: `transparent ${rem(0.3)} solid`,
        color: colors.text,
        paddingBottom: rem(0.8),
      },
    },
  });

  return {
    container: containerClass,
    normal: normalClass,
    active: style({
      $nest: {
        [`.${containerClass} &.${normalClass}`]: {
          borderBottomColor: colors.underline,
          color: colors.textActive,
        },
      },
    }),
  };
}

function light(context: Context) {
  const { colors } = context;
  return base(context, {
    text: colors.black,
    textActive: colors.light.brand00,
    underline: colors.light.brand00,
    containerUnderline: colors.light.gray06,
  });
}

function dark(context: Context) {
  const { colors } = context;
  return base(context, {
    text: colors.white,
    textActive: colors.dark.brand00,
    underline: colors.dark.brand00,
    containerUnderline: colors.dark.white,
  });
}

function highContrast(context: Context) {
  const { colors } = context;
  return base(context, {
    text: colors.white,
    textActive: colors.white,
    underline: colors.highContrast.yellow,
    containerUnderline: colors.highContrast.green,
  });
}

export function tab(context: Context) {
  return context.style({
    light: light(context),
    dark: dark(context),
    highContrast: highContrast(context),
  });
}
