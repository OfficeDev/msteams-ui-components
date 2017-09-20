import { style } from 'typestyle';
import { Context } from '../../index';
import * as primaryRaw from '../../raw/buttons/primary';

export function primary(c: Context) {
  const result = style(primaryRaw.normal(c), {
    $nest: {
      '&:hover': primaryRaw.hover(c),
      '&:active': primaryRaw.active(c),
      '&:disabled': primaryRaw.disabled(c),
      '&:focus': primaryRaw.focus(c),
      '&:focus:after': primaryRaw.focusAfter(c),
    },
  });
  return result;
}
