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
  checkbox: {
    normal: {
      text: string;
      background: string;
      border: string;
      outline: string;
    },
    checked?: {
      text?: string;
      background?: string;
      border?: string;
      outline?: string;
    },
    active?: {
      text?: string;
      background?: string;
      border?: string;
      outline?: string;
    },
    hover?: {
      text?: string;
      background?: string;
      border?: string;
      outline?: string;
    },
    disabled?: {
      text?: string;
      background?: string;
      border?: string;
      outline?: string;
    }
    focus?: {
      text?: string;
      background?: string;
      border?: string;
      outline?: string;
    }
  };
}

export function getDefaultThemeColors(): Colors {
  return {
    background: colors.white,
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
    checkbox: {
      normal: {
        text: colors.white,
        background: colors.white,
        border: colors.gray03,
        outline: colors.transparent,
      },
      checked: {
        background: colors.brand00,
        border: colors.transparent,
      },
      hover: {
        background: colors.gray12,
      },
      disabled: {
        text: colors.gray04,
        background: colors.gray10,
      },
      focus: {
        text: colors.white,
        outline: colors.brand00DarkTheme,
      },
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
    checkbox: {
      normal: {
        text: colors.black,
        background: colors.black,
        border: colors.gray03DarkTheme,
        outline: colors.transparent,
      },
      checked: {
        background: colors.brand00DarkTheme,
        border: colors.transparent,
      },
      hover: {
        background: colors.gray08DarkTheme,
      },
      disabled: {
        text: colors.gray04DarkTheme,
        background: colors.gray10DarkTheme,
      },
      focus: {
        text: colors.black,
        border: colors.brand04DarkTheme,
      },
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
    checkbox: {
      normal: {
        text: colors.white,
        background: colors.white,
        border: colors.gray03,
        outline: colors.transparent,
      },
      checked: {
        background: colors.brand00,
        border: colors.transparent,
      },
      disabled: {
        text: colors.gray04,
        background: colors.gray10,
      },
      focus: {
        text: colors.white,
        border: colors.brand04,
      },
    },
  };
}
