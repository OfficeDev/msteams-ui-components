import { CSSProperties } from 'react';
import { Config } from '../config/index';

const appSmallBorderRadius = '0.3rem';
const appFontSizeBase = '1.4rem';

export function normal(config: Config): CSSProperties {
  const { rem } = config;
  return {
    height: rem(3.2),
    minWidth: rem(3.2),
    background: '0',
    border: rem(0.2) + ' solid transparent',
    borderRadius: appSmallBorderRadius,
    padding: rem(0.4) + ' ' + rem(3.2),
    whiteSpace: 'nowrap',
    fontSize: rem(1.4),
  };
}

export function hover(config: Config): CSSProperties {
  return {
    cursor: 'pointer',
  };
}
