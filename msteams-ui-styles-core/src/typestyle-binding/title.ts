import { style } from 'typestyle';
import { Context } from '../raw/context';
import { title as titleRaw } from '../raw/typography/title';

export function title(c: Context) {
  const styles = titleRaw(c);
  return style(styles.normal);
}

export default title;
