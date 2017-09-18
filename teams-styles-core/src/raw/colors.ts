import { color } from 'csx';

export const white = '#fff';
export const black = '#16233a';

export const brand00 = '#5558af';
export const brand04 = color(brand00).mix(color(black), 0.85).toHexString();
