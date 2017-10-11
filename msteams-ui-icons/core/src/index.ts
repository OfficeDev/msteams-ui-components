import { fontFace, style } from 'typestyle';
const memoize = require('lodash.memoize');

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
  downCaret: '"\\e41e"',
  magnifyingGlass: '"\\e446"',
  error: '"\\e450"',
  monkey: '"\\e633"',
};

export const baseStyle = memoize((iconWeight?: number): string => {
  // tslint:disable:no-var-requires
  let fontName;
  let eotFile;
  let woffFile;
  let woff2File;
  let ttfFile;
  let svgFile;
  if (iconWeight === iconWeights.light) {
    fontName = 'MSTeamsIcons-Light';
    eotFile = require('../fonts/TeamsAssets-Light.eot');
    woffFile = require('../fonts/TeamsAssets-Light.woff');
    woff2File = require('../fonts/TeamsAssets-Light.woff2');
    ttfFile = require('../fonts/TeamsAssets-Light.ttf');
    svgFile = require('../fonts/TeamsAssets-Light.svg');
  } else {
    fontName = 'MSTeamsIcons-Regular';
    eotFile = require('../fonts/TeamsAssets-Regular.eot');
    woffFile = require('../fonts/TeamsAssets-Regular.woff');
    woff2File = require('../fonts/TeamsAssets-Regular.woff2');
    ttfFile = require('../fonts/TeamsAssets-Regular.ttf');
    svgFile = require('../fonts/TeamsAssets-Regular.svg');
  }
  // tslint:enable:no-var-requires

  fontFace({
    fontFamily: fontName,
    src: `url("${eotFile}"),
  url('${woff2File}') format('woff2'),
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
});

export function iconStyle(iconType?: string): string | null {
  if (!iconType) {
    return null;
  }
  return style({ $nest: { '&::before': { content: iconType } } });
}
