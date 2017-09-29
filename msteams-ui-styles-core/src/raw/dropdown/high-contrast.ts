import { Context } from '../context';
import { base } from './base';
import { DropdownStyles } from './dropdown-styles';

export function highContrast(c: Context): DropdownStyles {
  return base(c, {
    mainButton: c.colors.white,
    mainButtonBg: c.colors.black,
    item: c.colors.white,
    itemBg: c.colors.black,
    itemContainerBg: c.colors.highContrast.yellow,
    itemHover: c.colors.white,
    itemHoverBg: c.colors.highContrast.green,
  });
}
