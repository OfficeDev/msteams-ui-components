import { style } from 'typestyle';
import { chooseStyle, Context } from '../context';

interface PanelColors {
  background: string;
}

function base(context: Context, spacing: string, colors: PanelColors) {
  return style({
    backgroundColor: colors.background,
    borderRadius: context.rem(0.3),
    padding: spacing,
    ['-webkit-box-sizing']: 'border-box',
    ['-moz-box-sizing']: 'border-box',
    boxSizing: 'border-box',
  });
}

function light(context: Context, spacing: string) {
  return base(context, spacing, { background: context.colors.light.white });
}

function dark(context: Context, spacing: string) {
  return base(context, spacing, { background: context.colors.dark.black });
}

function highContrast(context: Context, spacing: string) {
  return base(context, spacing, { background: context.colors.black });
}

export function panel(context: Context, spacing: string) {
  const lightFunc = (c: Context) => light(c, spacing);
  const darkFunc = (c: Context) => dark(c, spacing);
  const highContrastFunc = (c: Context) => highContrast(c, spacing);
  return chooseStyle(context, lightFunc, darkFunc, highContrastFunc);
}
