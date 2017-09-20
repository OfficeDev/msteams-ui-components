import { style } from 'typestyle';
import { Context } from '../../raw/context';
import * as panelRaw from '../../raw/panels/panel';

export function panel(c: Context) {
  return style(panelRaw.normal(c));
}
