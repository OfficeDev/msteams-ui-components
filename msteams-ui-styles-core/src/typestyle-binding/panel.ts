import { style } from 'typestyle';
import { Context } from './context';

interface PanelColors {
  background: string;
}

function base(context: Context, colors: PanelColors) {
  return style({
    backgroundColor: colors.background,
    borderRadius: context.rem(0.3),
    padding: context.rem(3.2),
  });
}

function light(c: Context) {
  return base(c, { background: c.colors.light.white });
}

function dark(c: Context) {
  return base(c, { background: c.colors.dark.black });
}

function highContrast(c: Context) {
  return base(c, { background: c.colors.black });
}

export function panel(context: Context) {
  return context.style({
    light: light(context),
    dark: dark(context),
    highContrast: highContrast(context),
  });
}
