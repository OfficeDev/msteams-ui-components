import { color } from 'csx';

export const transparent = 'transparent';

export const white = '#fff';
export const black = '#16233a';
export const gray04 = color(black).fadeOut(0.48).toString();
export const gray06 = color(black).fadeOut(0.64).toString();
export const gray10 = '#f0f2f4';
export const gray12 = color(black).fadeOut(0.95).toString();

export const brand00 = '#5558af';
export const brand04 = color(brand00).mix(color(black), 0.85).toString();
