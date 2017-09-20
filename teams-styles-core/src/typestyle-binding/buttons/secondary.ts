import { style } from 'typestyle';
import * as secondaryRaw from '../../raw/buttons/secondary';
import { Context } from '../../raw/context';

export function secondaryButton(c: Context) {
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
