import { style } from 'typestyle';
import * as primaryRaw from '../../raw/buttons/primary';
import { Context } from '../../raw/context';

export function primaryButton(c: Context) {
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
