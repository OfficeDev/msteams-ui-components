import { style } from 'typestyle';
import * as checkedRaw from '../../raw/checkboxes/checked';
import * as uncheckedRaw from '../../raw/checkboxes/unchecked';
import { Context } from '../../raw/context';
import * as labelRaw from '../../raw/labels/label';

export function unchecked(c: Context) {
  const result = style(uncheckedRaw.normal(c), {
    $nest: {
      '&:hover': uncheckedRaw.hover(c),
      '&:active': uncheckedRaw.active(c),
      '&:disabled': uncheckedRaw.disabled(c),
      '&:focus': uncheckedRaw.focus(c),
      '&-checked': {
        ...checkedRaw.normal(c),
        $nest: {
          '&:hover': checkedRaw.hover(c),
          '&::after': checkedRaw.after(c),
        },
      },
    },
  });
  return result;
}

export function checked(c: Context) {
  const result = unchecked(c);
  return `${result}-checked`;
}

export function label(c: Context) {
  return style(labelRaw.normal(c));
}
