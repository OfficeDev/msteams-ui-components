import { fontFace, style } from 'typestyle';

export const iconWeights = {
  regular: 0,
  light: 1,
};

export const iconTypes = {
  msOfficeLogo: '"\\e014"',
  msTeamsLogo: '"\\e016"',
  file: '"\\e306"',
  pencil: '"\\e40d"',
  checkmark: '"\\e412"',
  plus: '"\\e415"',
  dropdownArrow: '"\\e41e"',
  magnifyingGlass: '"\\e446"',
  monkey: '"\\e633"',
};

export function baseStyle(iconWeight?: number): string {
  // tslint:disable:no-var-requires
  let fontName;
  let eotFile;
  let woffFile;
  let ttfFile;
  let svgFile;
  if (iconWeight === iconWeights.light) {
    fontName = 'MSTeamsIcons-Light';
    eotFile = require('../fonts/TeamsAssets-Light.eot');
    woffFile = require('../fonts/TeamsAssets-Light.woff');
    ttfFile = require('../fonts/TeamsAssets-Light.ttf');
    svgFile = require('../fonts/TeamsAssets-Light.svg');
  } else {
    fontName = 'MSTeamsIcons-Regular';
    eotFile = require('../fonts/TeamsAssets-Regular.eot');
    woffFile = require('../fonts/TeamsAssets-Regular.woff');
    ttfFile = require('../fonts/TeamsAssets-Regular.ttf');
    svgFile = require('../fonts/TeamsAssets-Regular.svg');
  }
  // tslint:enable:no-var-requires

  fontFace({
    fontFamily: fontName,
    src: `url("${eotFile}"),
  url('${woffFile}') format('woff2'),
  url('${woffFile}') format('woff'),
  url('${ttfFile}') format('truetype'),
  url('${svgFile}#${fontName}') format('svg'),
  url('${eotFile}?#iefix') format('embedded-opentype')`,
    fontWeight: 'normal',
    fontStyle: 'normal',
  });

  return style({
    display: 'inline-block',
    font: `normal normal normal 14px/1 ${fontName}`,
    fontSize: 'inherit',
    textRendering: 'auto',
    ['-webkit-font-smoothing']: 'antialiased',
    ['-moz-osx-font-smoothing']: 'grayscale',
  });
}

export function iconStyle(iconType?: string): string | null {
  if (!iconType) {
    return null;
  }
  return style({ $nest: { '&::before': { content: iconType } } });
}
