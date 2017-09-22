import { style } from 'typestyle';
import { secondary as secondaryRaw } from '../../raw/buttons/secondary';
import { Context } from '../../raw/context';

export function secondaryButton(c: Context) {
  const styles = secondaryRaw(c);
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
