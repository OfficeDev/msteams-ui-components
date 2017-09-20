import { style } from 'typestyle';
import * as boxRaw from '../../raw/checkboxes/box';
import * as checkedBoxRaw from '../../raw/checkboxes/checked-box';
import * as labelRaw from '../../raw/checkboxes/label';
import { Context } from '../../raw/context';

export function box(c: Context) {
  const result = style(boxRaw.normal(c), {
    $nest: {
      '&:hover': boxRaw.hover(c),
      '&:active': boxRaw.active(c),
      '&:disabled': boxRaw.disabled(c),
      '&:focus': boxRaw.focus(c),
    },
  });
  return result;
}

export function checkedBox(c: Context) {
  const result = style(checkedBoxRaw.normal(c), {
    $nest: {
      '&:hover': checkedBoxRaw.hover(c),
      '&:active': checkedBoxRaw.active(c),
      '&:disabled': checkedBoxRaw.disabled(c),
      '&:focus': checkedBoxRaw.focus(c),
      '&::after': checkedBoxRaw.after(c),
    },
  });
  return result;
}

export function checkboxLabel(c: Context) {
  return style(labelRaw.normal(c));
}
