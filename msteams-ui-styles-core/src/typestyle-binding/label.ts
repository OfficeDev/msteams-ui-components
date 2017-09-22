import { style } from 'typestyle';
import { Context } from '../raw/context';
import { label as labelRaw } from '../raw/labels';

export function label(c: Context) {
  return style(labelRaw(c).normal);
}
