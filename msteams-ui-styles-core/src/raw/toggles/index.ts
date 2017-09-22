// import { CSSProperties } from 'react';
// import { Context } from '../context';

// const width = 6;
// const height = 3.2;
// const ballSize = 2.5;
// const ballDeltaX = 0.3;
/*
export function label(c: Context): {} {
  const { rem } = c;
  const result: CSSProperties = {
    position: 'relative',
    display: 'inline-block',
    width: rem(width),
    height: rem(height),
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
    border: 0,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#eef1f5',
    transition: '0.4s',
    borderRadius: rem(height),
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
    borderRadius: rem(height),
    border: `${rem(0.2)} solid ${c.colors.focus}`,
  };
  return result;
}

export function sliderBefore(c: Context): {} {
  const { rem } = c;
  const result: CSSProperties = {
    position: 'absolute',
    content: '""',
    height: rem(ballSize),
    width: rem(ballSize),
    left: rem(ballDeltaX),
    top: rem((height - ballSize) / 2),
    backgroundColor: '#4e586a',
    transition: '0.4s',
    borderRadius: '50%',
  };
  return result;
}

export function sliderChecked(c: Context): {} {
  const result: CSSProperties = {
    backgroundColor: '#7fba00',
  };
  return Object.assign({}, slider(c), result);
}

export function sliderFocusChecked(c: Context): {} {
  const result: CSSProperties = {};
  return Object.assign({}, sliderFocus(c), result);
}

export function sliderBeforeChecked(c: Context): {} {
  const { rem } = c;
  const delta = width - ballDeltaX * 2 - ballSize;
  const result: CSSProperties = {
    backgroundColor: c.colors.secondary,
    transform: `translateX(${rem(delta)})`,
  };
  return Object.assign({}, sliderBefore(c), result);
}
*/
