import { MemoizedFunction } from 'lodash';
import memoize = require('lodash.memoize');
import { TypeStyle } from 'typestyle';

export const iconWeights = {
  regular: 0,
  light: 1,
};

export const iconTypes = {
  msOfficeLogo: '"\\e014"',
  msTeamsLogo: '"\\e016"',
  folder: '"\\e137"',
  runner: '"\\e220"',
  file: '"\\e306"',
  list: '"\\e30a"',
  robot: '"\\e21a"',
  connectors: '"\\e221"',
  signal: '"\\e344"',
  pencil: '"\\e40d"',
  checkmark: '"\\e412"',
  plus: '"\\e415"',
  close1: '"\\e413"',
  downCaret: '"\\e41e"',
  rightCaret: '"\\e421"',
  trashCan: '"\\e42b"',
  close2: '"\\e440"',
  magnifyingGlass: '"\\e446"',
  error: '"\\e450"',
  link: '"\\e612"',
  listDocument: '"\\e620"',
  monkey: '"\\e633"',
  close3: '"\\e8bb"',
  sublist: '"\\e941"',
  book: '"\\e945"',
  ellipsis: '"\\e94f"',
  fingerPress: '"\\e957"',
  checkbox: '"\\e97e"',
  grid: '"\\e992"',
  circle: '"\\f108"',
  checkedbulb: '"\\f201"',
};

const regularFontFaceTS = new TypeStyle({ autoGenerateTag: true });
const lightFontFaceTS = new TypeStyle({ autoGenerateTag: true });
const iconTS = new TypeStyle({ autoGenerateTag: true });

export const baseStyle = memoize((iconWeight?: number): string => {
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

    lightFontFaceTS.fontFace({
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
  } else {
    fontName = 'MSTeamsIcons-Regular';
    eotFile = require('../fonts/TeamsAssets-Regular.eot');
    woffFile = require('../fonts/TeamsAssets-Regular.woff');
    woff2File = require('../fonts/TeamsAssets-Regular.woff2');
    ttfFile = require('../fonts/TeamsAssets-Regular.ttf');
    svgFile = require('../fonts/TeamsAssets-Regular.svg');

    regularFontFaceTS.fontFace({
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
  }

  return iconTS.style({
    fontFamily: fontName,
    fontStyle: 'normal',
    speak: 'none',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '16px',
    display: 'inherit',
    textRendering: 'optimizeLegibility',
    ['-webkit-font-smoothing']: 'antialiased',
    ['-moz-osx-font-smoothing']: 'grayscale',
  });
});

export const iconStyle = memoize((iconType?: string): string | null => {
  if (!iconType) {
    return null;
  }
  return iconTS.style({
    $nest: {
      '&::before': {
        content: iconType,
        position: 'relative',
        bottom: '1px',
        lineHeight: '16px',
        display: 'inherit',
      },
    },
  });
});
