import { Colors, getDefaultThemeColors } from '../raw/colors';
import { getContext } from '../raw/context';
import { ThemeConfig } from '../raw/theme-config';
import { primaryButton, secondaryButton } from './buttons';
import { box, checkboxLabel, checkedBox } from './checkboxes';
import { panel } from './panels';
import { toggles } from './toggles';

export interface Theme {
  panel: string;
  buttons: {
    primary: string;
    secondary: string;
  };
  toggles: {
    label: string;
    input: string;
    slider: string;
    sliderChecked: string;
  };
  checkbox: {
    box: string;
    checkedBox: string;
    label: string;
  };
}

const defaultConfig: ThemeConfig = {
  basePx: 16,
  colors: getDefaultThemeColors(),
};

export function getTheme(config?: ThemeConfig): Theme {
  const realConfig = Object.assign({}, defaultConfig, config);
  const context = getContext(realConfig);
  return {
    panel: panel(context),
    buttons: {
      primary: primaryButton(context),
      secondary: secondaryButton(context),
    },
    toggles: {
      label: toggles.label(context),
      input: toggles.input(context),
      slider: toggles.slider(context),
      sliderChecked: toggles.sliderChecked(context),
    },
    checkbox: {
      box: box(context),
      checkedBox: checkedBox(context),
      label: checkboxLabel(context),
    },
  };
}
