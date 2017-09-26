import { Colors } from '../raw/colors';
import { getContext } from '../raw/context';
import { ThemeConfig, ThemeStyle } from '../raw/theme-config';
import anchor from './anchor';
import button from './buttons';
import checkbox from './checkbox';
import { input } from './input';
import panel from './panel';
import radiobutton from './radiobutton';
import { tab } from './tab';
import toggle from './toggle';

export interface Theme {
  panel: string;
  buttons: {
    primary: string;
    secondary: string;
  };
  toggle: {
    label: string;
    input: string;
    slider: string;
    sliderChecked: string;
  };
  checkbox: {
    checked: string;
    unchecked: string;
    label: string;
  };
  anchor: string;
  radiobutton: {
    selected: string;
    unselected: string;
    label: string;
  };
  input: {
    container: string;
    underline: string;
    input: string;
  };
  tab: {
    container: string;
    normal: string;
    active: string;
  };
}

const defaultConfig: ThemeConfig = {
  baseFontSize: 16,
  style: ThemeStyle.Dark,
  colors: Colors,
};

export function getTheme(config?: ThemeConfig): Theme {
  const realConfig = Object.assign({}, defaultConfig, config);
  const context = getContext(realConfig);
  const inputClasses = input(context);
  const tabClasses = tab(context);
  return {
    panel: panel(context),
    buttons: {
      primary: button.primary(context),
      secondary: button.secondary(context),
    },
    toggle: {
      label: toggle.label(context),
      input: toggle.input(context),
      slider: toggle.slider(context),
      sliderChecked: toggle.sliderChecked(context),
    },
    checkbox: {
      checked: checkbox.checked(context),
      unchecked: checkbox.unchecked(context),
      label: checkbox.label(context),
    },
    radiobutton: {
      selected: radiobutton.selected(context),
      unselected: radiobutton.unselected(context),
      label: radiobutton.label(context),
    },
    anchor: anchor(context),
    input: {
      input: inputClasses.input,
      container: inputClasses.container,
      underline: inputClasses.underline,
    },
    tab: {
      container: tabClasses.container,
      normal: tabClasses.normal,
      active: tabClasses.active,
    },
  };
}
