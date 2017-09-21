import { CSSProperties } from 'react';
import * as colors from '../colors';
import { Context } from '../context';
import * as baseButton from './base';

export function normal(context: Context): {} {
  const result: CSSProperties = {
    ...baseButton.normal(context),
    borderColor: colors.gray06,
    color: colors.black,
  };
  return result;
}

export function hover(context: Context): {} {
  const result: CSSProperties = {
    ...baseButton.hover(context),
    backgroundColor: colors.gray06,
    color: colors.black,
    borderColor: 'transparent',
  };
  return result;
}

export function active(context: Context): {} {
  const result: CSSProperties = {
    ...baseButton.active(context),
    backgroundColor: '#858C98',
  };
  return result;
}

export function disabled(context: Context): {} {
  return {
    ...baseButton.disabled(context),
    backgroundColor: 'transparent',
    color: colors.gray04,
    borderColor: colors.gray12,
  };
}

export function focus(context: Context): {} {
  return {
    ...baseButton.focus(context),
    backgroundColor: colors.gray06,
    color: colors.black,
    borderColor: colors.transparent,
  };
}

export function focusAfter(context: Context): {} {
  const { rem } = context;
  return {
    content: "''",
    position: 'absolute',
    top: '1px',
    bottom: '1px',
    left: '1px',
    right: '1px',
    border: `${rem(0.2)} solid ${colors.black}`,
  };
}
