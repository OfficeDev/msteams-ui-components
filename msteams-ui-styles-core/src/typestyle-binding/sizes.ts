import { style } from 'typestyle';
import { Context } from '../raw/context';
import { size as sizeRaw } from '../raw/typography/sizes/size';

export function title(c: Context) {
  const styles = sizeRaw(c);
  return style(styles.title);
}

export function title2(c: Context) {
  const styles = sizeRaw(c);
  return style(styles.title2);
}

export function base(c: Context) {
  const styles = sizeRaw(c);
  return style(styles.base);
}

export function caption(c: Context) {
  const styles = sizeRaw(c);
  return style(styles.caption);
}

export function xsmall(c: Context) {
  const styles = sizeRaw(c);
  return style(styles.xsmall);
}

export default {
  title,
  title2,
  base,
  caption,
  xsmall,
};
