import { style } from 'typestyle';
import { Context } from '../raw/context';
import { dropdown as dropdownRaw } from '../raw/dropdown';

export function dropdown(c: Context) {
  const raw = dropdownRaw(c);
  const containerClass = style(raw.container);
  const itemContainerClass = style(raw.itemContainer);

  return {
    container: containerClass,
    mainButton: style(raw.mainButton, {
      $nest: {
        '&:after': raw.mainButtonArrow,
      },
    }),
    item: style(raw.item, {
      $nest: {
        '&:hover': raw.itemHover,
      },
    }),
    itemContainer: itemContainerClass,
    itemContainerRight: style({
      $nest: {
        [`&.${itemContainerClass}`]: raw.itemContainerRight,
      },
    }),
    showItems: style({
      $nest: {
        [`&.${itemContainerClass}`]: raw.showItems,
      },
    }),
  };
}
