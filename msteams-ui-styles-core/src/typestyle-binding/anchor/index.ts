import { style } from 'typestyle';
import { anchor as anchorRaw } from '../../raw/anchor';
import { Context } from '../../raw/context';

export function anchor(c: Context) {
  const styles = anchorRaw(c);
  return style(styles.normal, {
    $nest: {
      '&:link': styles.normal,
      '&:visited': styles.visited,
      '&:hover': styles.hover,
      '&:active': styles.down,
      '&:focus': styles.focus,
      '&:disabled': styles.disabled,
    },
  });
}
