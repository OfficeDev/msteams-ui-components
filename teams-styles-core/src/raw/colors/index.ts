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
  radiobutton: {
    normal: {
      text: string;
      background: string;
      border: string;
      outline: string;
    },
    selected?: {
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
  toggle: {
    offBg: string;
    offBall: string;
    onBg: string;
    onBall: string;
    focus: string;
  };
  anchor: {
    normal: string;
    hover: string;
    down: string;
    disabled: string;
    focus: string;
    visited: string;
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
    radiobutton: {
      normal: {
        text: colors.white,
        background: colors.white,
        border: colors.gray03,
        outline: colors.transparent,
      },
      selected: {
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
    toggle: {
      offBg: '#eef1f5',
      offBall: '#4e586a',
      onBg: '#7fba00',
      onBall: colors.white,
      focus: '#5558af',
    },
    anchor: {
      normal: '#5558AF',
      hover: '#5558AF',
      down: '#4D52A1',
      disabled: '#C4C8CD',
      focus: '#5558AF',
      visited: '#8284C4',
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
    radiobutton: {
      normal: {
        text: colors.black,
        background: colors.black,
        border: colors.gray03DarkTheme,
        outline: colors.transparent,
      },
      selected: {
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
    toggle: {
      offBg: '#2B2B30',
      offBall: '#3A3A3F',
      onBg: '#88BC2B',
      onBall: colors.white,
      focus: '#9196E4',
    },
    anchor: {
      normal: '#9FA4FE',
      hover: '#9FA4FE',
      down: '#AAAFFE',
      disabled: '#6E6E72',
      focus: '#9FA4FE',
      visited: '#9DA2C8',
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
    radiobutton: {
      normal: {
        text: colors.white,
        background: colors.white,
        border: colors.gray03,
        outline: colors.transparent,
      },
      selected: {
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
    toggle: {
      offBg: '#eef1f5',
      offBall: '#4e586a',
      onBg: '#7fba00',
      onBall: colors.white,
      focus: '#5558af',
    },
    anchor: {
      normal: '#5558AF',
      hover: '#5558AF',
      down: '#4D52A1',
      disabled: '#C4C8CD',
      focus: '#5558AF',
      visited: '#8284C4',
    },
  };
}
