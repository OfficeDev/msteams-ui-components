import { style } from 'typestyle';
import { Context } from '../../raw/context';
import { panel as panelRaw } from '../../raw/panels';

export function panel(c: Context) {
  return style(panelRaw(c).normal);
}
