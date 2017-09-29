import { style } from 'typestyle';
import { Context } from '../raw/context';
import { title as titleRaw } from '../raw/typography/title';

export function title(c: Context) {
  return style(titleRaw(c).normal);
}

export default title;
