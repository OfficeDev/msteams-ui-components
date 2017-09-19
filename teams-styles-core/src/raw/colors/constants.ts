import { color } from 'csx';

export const transparent = 'transparent';

export const black = '#16233a';
export const bar = '#29384f';
export const white = '#fff';

const baseBlack = color(black);
export const gray02 = baseBlack.fadeOut(0.26).toString();
export const gray03 = baseBlack.fadeOut(0.36).toString();
export const gray04 = baseBlack.fadeOut(0.48).toString();
export const gray06 = baseBlack.fadeOut(0.64).toString();
export const gray08 = baseBlack.fadeOut(0.86).toString();
export const gray10 = '#f0f2f4';
export const gray12 = color(black).fadeOut(0.95).toString();

export const red = '#c50e2e';
export const magenta = '#e3008c';
export const yellow = '#fcd116';
export const green = '#7fba00';

export const brand00 = '#5558af';
const baseBrand = color(brand00);
export const brand04 = baseBrand.mix(baseBlack, 0.85).toString();
export const brand06 = baseBrand.mix(baseBlack, 0.75).toString();
export const brand08 = baseBrand.mix(color(bar), 0.5).toString();
export const callingMeetupBackground = '#293370';
export const tsChatSelfBubble = baseBrand.mix(color(white), 0.2).toString();

// dark theme
export const whiteDarkTheme = '#ffffff';
export const gray10DarkTheme = '#404045';
export const blackDarkTheme = '#2b2b30';
export const barDarkTheme = '#222226';
export const blackFull = '#000000';

const baseWhiteDarkTheme = color(whiteDarkTheme);
export const gray02DarkTheme = baseWhiteDarkTheme.fadeOut(0.26).toString();
export const gray03DarkTheme = baseWhiteDarkTheme.fadeOut(0.36).toString();
export const gray04DarkTheme = baseWhiteDarkTheme.fadeOut(0.48).toString();
export const gray08DarkTheme = baseWhiteDarkTheme.fadeOut(0.86).toString();
export const gary12DarkTheme = baseWhiteDarkTheme.fadeOut(0.95).toString();

export const redDarkTheme = '#ed1b3e';
export const magentaDarkTheme = '#f236b8';
export const yellowDarkTheme = '#fbc940';
export const greenDarkTheme = '#88bc2b';
export const tsChatSelfBubbleDarkTheme = color(brand00).mix(color(blackDarkTheme), 0.4).toString();
export const brand00DarkTheme = '#9fa4fe';
export const brand04DarkTheme = color(brand00DarkTheme).mix(baseWhiteDarkTheme, 0.85).toString();
export const brand06DarkTheme = color(brand00DarkTheme).mix(baseWhiteDarkTheme, 0.75).toString();
