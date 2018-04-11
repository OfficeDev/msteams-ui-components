import { chooseStyle, IContext } from '../context';

interface IPanelColors {
  background: string;
  border: string;
}

function base(context: IContext, colors: IPanelColors) {
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
      display: 'flex',
      overflow: 'hidden',
      flexDirection: 'column',
    }),
    header: css(names.header, {
      flex: '0 0 auto',
      paddingTop: spacing.xxxLarge,
      paddingLeft: spacing.xxxLarge,
      paddingRight: spacing.xxxLarge,
    }),
    body: css(names.body, {
      paddingLeft: spacing.xxxLarge,
      paddingRight: spacing.xxxLarge,
      flex: '1 1 auto',
      overflow: 'auto',
    }),
    footer: css(names.footer, {
      paddingBottom: spacing.xxxLarge,
      paddingLeft: spacing.xxxLarge,
      paddingRight: spacing.xxxLarge,
      flex: '0 0 auto',
    }),
  };
}

function light(context: IContext) {
  const { colors } = context;
  return base(context, {
    background: colors.light.white,
    border: colors.transparent,
   });
}

function dark(context: IContext) {
  const { colors } = context;
  return base(context, {
    background: context.colors.dark.gray10,
    border: colors.transparent,
   });
}

function highContrast(context: IContext) {
  const { colors } = context;
  return base(context, {
    background: context.colors.highContrast.black,
    border: colors.highContrast.white,
   });
}

export function panel(context: IContext) {
  return chooseStyle(context, light, dark, highContrast);
}
