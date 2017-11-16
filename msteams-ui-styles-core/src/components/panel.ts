import { chooseStyle, Context } from '../context';

interface PanelColors {
  background: string;
  border: string;
}

function base(context: Context, colors: PanelColors) {
  const names = {
    container: 'panel',
    header: 'panel-header',
    body: 'panel-body',
    footer: 'panel-footer',
  };
  const { css, rem, spacing } = context;
  return {
    container: css(names.container, {
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
    header: css(names.header, {
      flex: '0 0 auto',
      marginTop: spacing.xxxLarge,
      marginLeft: spacing.xxxLarge,
      marginRight: spacing.xxxLarge,
    }),
    body: css(names.body, {
      marginLeft: spacing.xxxLarge,
      marginRight: spacing.xxxLarge,
      flex: '1 1 auto',
      overflow: 'auto',
    }),
    footer: css(names.footer, {
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
    background: context.colors.highContrast.black,
    border: colors.highContrast.white,
   });
}

export function panel(context: Context) {
  return chooseStyle(context, light, dark, highContrast);
}
