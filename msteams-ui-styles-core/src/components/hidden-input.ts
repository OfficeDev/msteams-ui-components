import { IContext } from '../context';

export function hiddenInput(context: IContext) {
  const { css } = context;
  const name = 'hidden-input';
  return css(name, {
    display: 'none',
  });
}
