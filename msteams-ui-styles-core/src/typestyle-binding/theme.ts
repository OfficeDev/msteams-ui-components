import { Colors } from '../raw/colors';
import { getContext } from '../raw/context';
import { ThemeConfig, ThemeStyle } from '../raw/theme-config';
import anchor from './anchor';
import button from './buttons';
import checkbox from './checkbox';
import { compoundbutton } from './compoundbutton';
import dropdown from './dropdown';
import font from './font';
import input from './input';
import panel from './panel';
import radiobutton from './radiobutton';
import sizes from './sizes';
import surface from './surface';
import tab from './tab';
import table from './table';
import textarea from './textarea';
import title from './title';
import toggle from './toggle';

export interface Theme {
  panel: string;
  surface: string;
  fonts: {
    semilight: string;
    regular: string;
    semibold: string;
    bold: string;
  };
  sizes: {
    title: string;
    title2: string;
    base: string;
    caption: string;
    xsmall: string;
  };
  title: string;
  buttons: {
    primary: string;
    secondary: string;
  };
  compoundbutton: {
    container: string;
    icon: string;
    primaryText: string;
    secondaryText: string;
  };
  toggle: {
    container: string;
    input: string;
    slider: string;
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
    label: string;
  };
  tab: {
    container: string;
    normal: string;
    active: string;
  };
  table: {
    table: string;
    tbody: string;
    tr: string;
    td: string;
    thead: string;
    th: string;
  };
  textarea: {
    textarea: string;
    underline: string;
    container: string;
    label: string;
  };
  dropdown: {
    container: string;
    mainButton: string;
    item: string;
    itemContainer: string;
    itemContainerRight: string;
    showItems: string;
  };
}

const defaultConfig: ThemeConfig = {
  baseFontSize: 16,
  style: ThemeStyle.Light,
  colors: Colors,
};

export function getTheme(config?: ThemeConfig): Theme {
  const realConfig = Object.assign({}, defaultConfig, config);
  const context = getContext(realConfig);
  const inputClasses = input(context);
  const toggleClasses = toggle(context);
  const tabClasses = tab(context);
  const tableClasses = table(context);
  const textareaClasses = textarea(context);
  const dropdownClasses = dropdown(context);
  const compoundbuttonClasses = compoundbutton(context);

  return {
    panel: panel(context),
    surface: surface(context),
    fonts: {
      semilight: font.semilight(context),
      regular: font.regular(context),
      semibold: font.semibold(context),
      bold: font.bold(context),
    },
    sizes: {
      title: sizes.title(context),
      title2: sizes.title2(context),
      base: sizes.base(context),
      caption: sizes.caption(context),
      xsmall: sizes.xsmall(context),
    },
    title: title(context),
    buttons: {
      primary: button.primary(context),
      secondary: button.secondary(context),
    },
    compoundbutton: compoundbuttonClasses,
    toggle: {
      container: toggleClasses.container,
      input: toggleClasses.input,
      slider: toggleClasses.slider,
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
      label: inputClasses.label,
    },
    tab: {
      container: tabClasses.container,
      normal: tabClasses.normal,
      active: tabClasses.active,
    },
    table: {
      table: tableClasses.table,
      tr: tableClasses.tr,
      td: tableClasses.td,
      tbody: tableClasses.tbody,
      thead: tableClasses.thead,
      th: tableClasses.th,
    },
    textarea: {
      textarea: textareaClasses.textarea,
      container: textareaClasses.container,
      underline: textareaClasses.underline,
      label: textareaClasses.label,
    },
    dropdown: {
      container: dropdownClasses.container,
      mainButton: dropdownClasses.mainButton,
      item: dropdownClasses.item,
      itemContainerRight: dropdownClasses.itemContainerRight,
      showItems: dropdownClasses.showItems,
      itemContainer: dropdownClasses.itemContainer,
    },
  };
}
