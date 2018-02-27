import { IContext } from 'msteams-ui-components-react';
import { style } from 'typestyle';

export function appLayout(context: IContext) {
  const { rem } = context;
  return {
    container: style({
      display: 'flex',
      height: '100vh',
    }),
    sidebar: style({
      flex: `0 0 ${rem(32.0)}`,
      maxWidth: rem(32.0),
      height: '100%',
      overflow: 'auto',
    }),
    main: style({
      flex: '1 1 auto',
      marginLeft: rem(0.2),
      height: '100%',
      overflow: 'auto',
    }),
  };
}
