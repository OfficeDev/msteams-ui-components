import { style } from 'typestyle';
import { Context } from '../../index';
import * as secondaryRaw from '../../raw/buttons/secondary';

export function secondary(c: Context) {
  const result = style(secondaryRaw.normal(c), {
    $nest: {
      '&:hover': secondaryRaw.hover(c),
      '&:active': secondaryRaw.active(c),
      '&:disabled': secondaryRaw.disabled(c),
      '&:focus': secondaryRaw.focus(c),
      '&:focus:after': secondaryRaw.focusAfter(c),
    },
  });
  return result;
}
