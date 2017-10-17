import { style } from 'typestyle';
import { chooseStyle, Context } from '../context';

interface PanelColors {
  background: string;
}

function base(context: Context, colors: PanelColors) {
  const { rem, spacing } = context;
  return {
    container: style({
      backgroundColor: colors.background,
      borderRadius: rem(0.3),
      ['-webkit-box-sizing']: 'border-box',
      ['-moz-box-sizing']: 'border-box',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
    }),
    header: style({
      flex: '0 0 auto',
      marginTop: spacing.xxxLarge,
      marginLeft: spacing.xxxLarge,
      marginRight: spacing.xxxLarge,
    }),
    body: style({
      marginLeft: spacing.xxxLarge,
      marginRight: spacing.xxxLarge,
      flex: '1 1 auto',
      overflowY: 'auto',
    }),
    footer: style({
      marginBottom: spacing.xxxLarge,
      marginLeft: spacing.xxxLarge,
      marginRight: spacing.xxxLarge,
      flex: '0 0 auto',
    }),
  };
}

function light(context: Context) {
  return base(context, { background: context.colors.light.white });
}

function dark(context: Context) {
  return base(context, { background: context.colors.dark.gray10 });
}

function highContrast(context: Context) {
  return base(context, { background: context.colors.black });
}

export function panel(context: Context) {
  return chooseStyle(context, light, dark, highContrast);
}
