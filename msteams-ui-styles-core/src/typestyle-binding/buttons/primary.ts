import { style } from 'typestyle';
import { primary as primaryRaw } from '../../raw/buttons/primary';
import { Context } from '../../raw/context';

export function primaryButton(c: Context) {
  const styles = primaryRaw(c);
  return style(styles.normal, {
    $nest: {
      '&:hover:enabled': styles.hover,
      '&:active': styles.active,
      '&:disabled': styles.disabled,
      '&:focus': styles.focus,
      '&:focus:after': styles.focusAfter,
    },
  });
}
