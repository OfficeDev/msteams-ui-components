export * from './constants';
import * as colors from './constants';

export interface Colors {
  background: string;
  primaryButton: {
    textColor: string;
    normalBg: string;
    hoverBg: string;
    activeBg: string;
    disabled: string;
    disabledBg: string;
    focus: string;
    focusOutline: string;
  };
}

export function getDefaultThemeColors(): Colors {
  return {
    background: colors.gray10,
    primaryButton: {
      textColor: colors.white,
      normalBg: colors.brand00,
      hoverBg: colors.brand04,
      activeBg: '#454b92',
      disabled: colors.gray04,
      disabledBg: colors.gray10,
      focus: colors.white,
      focusOutline: colors.white,
    },
  };
}

export function getDarkThemeColors(): Colors {
  return {
    background: colors.gray10DarkTheme,
    primaryButton: {
      textColor: colors.black,
      normalBg: colors.brand00DarkTheme,
      hoverBg: colors.brand04DarkTheme,
      activeBg: '#454b92',
      disabled: colors.gray04DarkTheme,
      disabledBg: colors.gray10DarkTheme,
      focus: colors.white,
      focusOutline: colors.white,
    },
  };
}

export function getHighContrastThemeColors(): Colors {
  return {
    background: colors.black,
    primaryButton: {
      textColor: colors.white,
      normalBg: colors.brand00,
      hoverBg: colors.brand04,
      activeBg: '#454b92',
      disabled: colors.gray04,
      disabledBg: colors.gray10,
      focus: colors.white,
      focusOutline: colors.white,
    },
  };
}
