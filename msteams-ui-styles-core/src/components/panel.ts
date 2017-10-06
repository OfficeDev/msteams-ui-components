import { style } from 'typestyle';
import { chooseStyle, Context } from '../context';

interface PanelColors {
  background: string;
}

function base(context: Context, colors: PanelColors) {
  const { rem } = context;
  return {
    container: style({
      backgroundColor: colors.background,
      borderRadius: rem(0.3),
      ['-webkit-box-sizing']: 'border-box',
      ['-moz-box-sizing']: 'border-box',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    }),
    header: style({
      flex: '0 0 auto',
      marginTop: context.spacing.xxLarge,
      marginLeft: context.spacing.xxLarge,
      marginRight: context.spacing.xxLarge,
    }),
    body: style({
      marginLeft: context.spacing.xxLarge,
      marginRight: context.spacing.xxLarge,
      flex: '1 1 auto',
      overflowY: 'auto',
    }),
    footer: style({
      marginBottom: context.spacing.xxLarge,
      marginLeft: context.spacing.xxLarge,
      marginRight: context.spacing.xxLarge,
      flex: '0 0 auto',
    }),
  };
}

function light(context: Context) {
  return base(context, { background: context.colors.light.white });
}

function dark(context: Context) {
  return base(context, { background: context.colors.dark.black });
}

function highContrast(context: Context) {
  return base(context, { background: context.colors.black });
}

export function panel(context: Context) {
  const lightFunc = (c: Context) => light(c);
  const darkFunc = (c: Context) => dark(c);
  const highContrastFunc = (c: Context) => highContrast(c);
  return chooseStyle(context, lightFunc, darkFunc, highContrastFunc);
}
