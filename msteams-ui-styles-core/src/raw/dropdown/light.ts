import { Context } from '../context';
import { base } from './base';
import { DropdownStyles } from './dropdown-styles';

export function light(c: Context): DropdownStyles {
  return base(c, {
    mainButton: c.colors.light.black,
    mainButtonBg: c.colors.light.gray12,
    item: c.colors.light.black,
    itemBg: c.colors.light.gray12,
    itemContainerBg: c.colors.light.gray12,
    itemHover: c.colors.light.white,
    itemHoverBg: c.colors.light.brand00,
  });
}
