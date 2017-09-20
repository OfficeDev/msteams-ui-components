import { CSSProperties } from 'react';
import { Context } from '../context';

export function label(c: Context): {} {
  const { rem } = c;
  const result: CSSProperties = {
    position: 'relative',
    display: 'inline-block',
    width: rem(6),
    height: rem(3.4),
  };
  return result;
}

export function input(c: Context): {} {
  return {
    display: 'none',
  };
}

export function slider(c: Context): {} {
  const { rem } = c;
  const result: CSSProperties = {
    position: 'absolute',
    cursor: 'pointer',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#EEF1F5',
    transition: '0.4s',
    borderRadius: rem(3.4),
    outline: 'none',
  };
  return result;
}

export function sliderFocus(c: Context): {} {
  const { rem } = c;
  const result: CSSProperties = {
    content: '""',
    position: 'absolute',
    top: rem(-0.1),
    bottom: rem(-0.1),
    left: rem(-0.1),
    right: rem(-0.1),
    borderRadius: rem(3.4),
    border: `${rem(0.2)} solid #5558AF`,
  };
  return result;
}

export function sliderChecked(c: Context): {} {
  const result: CSSProperties = {
    backgroundColor: '#7FBA00',
  };
  return Object.assign({}, slider(c), result);
}

export function sliderFocusChecked(c: Context): {} {
  const result: CSSProperties = {};
  return Object.assign({}, sliderFocus(c), result);
}

export function sliderBefore(c: Context): {} {
  const { rem } = c;
  const result: CSSProperties = {
    position: 'absolute',
    content: '""',
    height: rem(2.6),
    width: rem(2.6),
    left: rem(0.4),
    bottom: rem(0.4),
    backgroundColor: '#4E586A',
    transition: '0.4s',
    borderRadius: '50%',
  };
  return result;
}

export function sliderBeforeChecked(c: Context): {} {
  const { rem } = c;
  const result: CSSProperties = {
    backgroundColor: 'white',
    transform: `translateX(${rem(2.6)})`,
  };
  return Object.assign({}, sliderBefore(c), result);
}
