import { style } from 'typestyle';
import { primary as primaryRaw } from '../raw/buttons/primary';
import { secondary as secondaryRaw } from '../raw/buttons/secondary';
import { Context } from '../raw/context';

export function primary(c: Context) {
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

export function secondary(c: Context) {
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

export default {
  primary,
  secondary,
};
