import { Context } from 'msteams-ui-components-react';
import { style } from 'typestyle';

export function content(context: Context) {
  const { rem } = context;
  return {
    container: style({
      display: 'flex',
      flexDirection: 'column',

      height: '100vh',
    }),
    preview: style({
      flex: `0 0 auto`,
    }),
    codeToggle: style({
      flex: '0 0 auto',
    }),
    code: style({
      flex: '1 1 auto',
    }),
    error: style({

    }),
  };
}
