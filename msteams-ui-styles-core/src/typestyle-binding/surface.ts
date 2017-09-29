import { style } from 'typestyle';
import { Context } from '../raw/context';
import { surface as surfaceRaw } from '../raw/surfaces';

export function surface(c: Context) {
  return style(surfaceRaw(c).normal);
}

export default surface;
