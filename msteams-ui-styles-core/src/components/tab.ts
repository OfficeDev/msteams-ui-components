import { chooseStyle, IContext } from '../context';
import { getReturnType } from '../get-return-type';

export interface ITabColors {
  text: string;
  underline: string;
  textActive: string;
  containerUnderline: string;
  hoverUnderline: string;
  focus: string;
  focusBg: string;
}

// tslint:disable-next-line:variable-name
export const _extractingTabStyles = getReturnType(base);
export type TabStyles = typeof _extractingTabStyles;

function base(context: IContext, colors: ITabColors) {
  const names = {
    container: 'tab-group',
    normal: 'tab',
    active: 'tab-active',
  };
  const { css, rem, spacing } = context;
  const containerClass = css(names.container, {
    width: '100%',
    borderBottom: `${rem(0.1)} solid ${colors.containerUnderline}`,
    padding: 0,
    margin: 0,
  });

  const normalClass = css(names.normal, {
    $nest: {
      [`.${containerClass} &`]: {
        display: 'inline-block',
        marginRight: rem(2),
        padding: spacing.xxSmall,
        outline: 'none',
        background: 0,
        border: 0,
        font: 'inherit',
        margin: 0,
        cursor: 'pointer',
        borderBottom: `transparent ${rem(0.4)} solid`,
        color: colors.text,
        $nest: {
          '&:hover': {
            borderBottomColor: colors.hoverUnderline,
          },
          '&:focus': {
            color: colors.focus,
            backgroundColor: colors.focusBg,
          },
        },
      },
    },
  });

  return {
    container: containerClass,
    normal: normalClass,
    active: css(names.active, {
      $nest: {
        [`.${containerClass} &`]: {
          borderBottomColor: colors.underline,
          color: colors.textActive,
        },
        '&:focus': {
          borderBottomColor: colors.focus,
        },
      },
    }),
  };
}

function light(context: IContext) {
  const { colors } = context;
  return base(context, {
    text: colors.light.gray02,
    textActive: colors.light.brand00,
    underline: colors.light.brand00,
    containerUnderline: colors.light.gray12,
    hoverUnderline: colors.light.brand00SemiTransparent,
    focus: colors.light.white,
    focusBg: colors.light.brand00Dark,
  });
}

function dark(context: IContext) {
  const { colors } = context;
  return base(context, {
    text: colors.dark.gray02,
    textActive: colors.dark.brand00,
    underline: colors.dark.brand00,
    containerUnderline: colors.highContrast.black,
    hoverUnderline: colors.dark.brand00SemiTransparent,
    focus: colors.dark.white,
    focusBg: colors.dark.brand00Light,
  });
}

function highContrast(context: IContext) {
  const { colors } = context;
  return base(context, {
    text: colors.highContrast.white,
    textActive: colors.highContrast.white,
    underline: colors.highContrast.blue,
    containerUnderline: colors.highContrast.green,
    hoverUnderline: colors.highContrast.yellow,
    focus: colors.highContrast.black,
    focusBg: colors.highContrast.yellow,
  });
}

export function tab(context: IContext) {
  return chooseStyle(context, light, dark, highContrast);
}
