import { style } from 'typestyle';
import { primary as primaryStyle } from '../../raw/buttons/primary';

export const primary = style(primaryStyle, {
  $nest: {
    '&:hover': {
      color: 'blue',
    },
  },
});
