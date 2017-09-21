import { style } from 'typestyle';
import * as anchorRaw from '../../raw/anchor';
import { Context } from '../../raw/context';

export function anchor(c: Context) {
  return style(anchorRaw.normal(c), {
    $nest: {
      '&:link': anchorRaw.normal(c),
      '&:visited': anchorRaw.visited(c),
      '&:hover': anchorRaw.hover(c),
      '&:active': anchorRaw.down(c),
      '&:focus': anchorRaw.focus(c),
      '&:disabled': anchorRaw.disabled(c),
    },
  });
}
