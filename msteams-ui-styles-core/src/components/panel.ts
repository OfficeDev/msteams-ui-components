import { style } from 'typestyle';
import { chooseStyle, Context } from '../context';

interface PanelColors {
  background: string;
  border: string;
}

function base(context: Context, colors: PanelColors) {
  const { rem, spacing } = context;
  return {
    container: style({
      backgroundColor: colors.background,
      borderStyle: 'solid',
      borderWidth: rem(0.2),
      borderColor: colors.border,
      borderRadius: rem(0.3),
      ['-webkit-box-sizing']: 'border-box',
      ['-moz-box-sizing']: 'border-box',
      boxSizing: 'border-box',
      display: 'flex',
      overflow: 'hidden',
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
      overflow: 'auto',
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
  const { colors } = context;
  return base(context, {
    background: colors.light.white,
    border: colors.transparent,
   });
}

function dark(context: Context) {
  const { colors } = context;
  return base(context, {
    background: context.colors.dark.gray10,
    border: colors.transparent,
   });
}

function highContrast(context: Context) {
  const { colors } = context;
  return base(context, {
    background: context.colors.black,
    border: colors.white,
   });
}

export function panel(context: Context) {
  return chooseStyle(context, light, dark, highContrast);
}
