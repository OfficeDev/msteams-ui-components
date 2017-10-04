import { fontFace, style } from 'typestyle';

const regularFontName = 'MSTeamsIcons-Regular';
const lightFontName = 'MSTeamsIcons-Light';

export function regular() {
  // tslint:disable:no-var-requires
  const RegularEOT = require('../fonts/TeamsAssets-Regular.eot');
  const RegularWOFF = require('../fonts/TeamsAssets-Regular.woff');
  const RegularTTF = require('../fonts/TeamsAssets-Regular.ttf');
  const RegularSVG = require('../fonts/TeamsAssets-Regular.svg');
  // tslint:enable:no-var-requires

  fontFace({
    fontFamily: regularFontName,
    src: `url("${RegularEOT}"),
  url('${RegularWOFF}') format('woff2'),
  url('${RegularWOFF}') format('woff'),
  url('${RegularTTF}') format('truetype'),
  url('${RegularSVG}#${regularFontName}') format('svg'),
  url('${RegularEOT}?#iefix') format('embedded-opentype')`,
    fontWeight: 'normal',
    fontStyle: 'normal',
  });

  return style({
    display: 'inline-block',
    font: `normal normal normal 14px/1 ${regularFontName}`,
    fontSize: 'inherit',
    textRendering: 'auto',
    ['-webkit-font-smoothing']: 'antialiased',
    ['-moz-osx-font-smoothing']: 'grayscale',
  });
}

export function light() {
  // tslint:disable:no-var-requires
  const LightEOT = require('../fonts/TeamsAssets-Light.eot');
  const LightWOFF = require('../fonts/TeamsAssets-Light.woff');
  const LightTTF = require('../fonts/TeamsAssets-Light.ttf');
  const LightSVG = require('../fonts/TeamsAssets-Light.svg');
  // tslint:enable:no-var-requires

  fontFace({
    fontFamily: lightFontName,
    src: `url("${LightEOT}"),
    url('${LightWOFF}') format('woff2'),
    url('${LightWOFF}') format('woff'),
    url('${LightTTF}') format('truetype'),
    url('${LightSVG}#${lightFontName}') format('svg'),
    url('${LightEOT}?#iefix') format('embedded-opentype')`,
    fontWeight: 'normal',
    fontStyle: 'normal',
  });

  return style({
    display: 'inline-block',
    font: `normal normal normal 14px/1 ${lightFontName}`,
    fontSize: 'inherit',
    textRendering: 'auto',
    ['-webkit-font-smoothing']: 'antialiased',
    ['-moz-osx-font-smoothing']: 'grayscale',
  });
}
