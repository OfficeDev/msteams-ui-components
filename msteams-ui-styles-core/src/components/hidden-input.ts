import { Context } from '../context';

export function hiddenInput(context: Context) {
  const { css } = context;
  const name = 'hidden-input';
  return css(name, {
    display: 'none',
  });
}
