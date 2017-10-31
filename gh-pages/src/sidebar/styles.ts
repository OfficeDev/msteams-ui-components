import { Context } from 'msteams-ui-components-react';
import { style } from 'typestyle';

export function sidebar(context: Context) {
  const { rem, font } = context;
  const { sizes, weights } = font;

  return {
    container: style({
      height: '100%',
    }),
    header: {
      title: style(sizes.title, weights.semibold),
      welcomeText: style({
        marginTop: rem(0.8),
      }),
    },
    body: {
      button: style({
        width: '100%',
        marginTop: '8px',
        marginBottom: '8px',
      }),
    },
  };
}
