import { style } from 'typestyle';
import { Context } from '../raw/context';
import { font as fontRaw } from '../raw/typography/fonts/font';

export function semilight(c: Context) {
  const styles = fontRaw(c);
  return style(styles.semilight);
}

export function regular(c: Context) {
  const styles = fontRaw(c);
  return style(styles.regular);
}

export function semibold(c: Context) {
  const styles = fontRaw(c);
  return style(styles.semibold);
}

export function bold(c: Context) {
  const styles = fontRaw(c);
  return style(styles.bold);
}

export default {
  semilight,
  regular,
  semibold,
  bold,
};
