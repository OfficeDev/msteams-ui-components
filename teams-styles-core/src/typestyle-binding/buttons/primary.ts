import { style } from 'typestyle';
import * as primaryRaw from '../../raw/buttons/primary';

export const primary = style(primaryRaw.primary, {
  $nest: {
    '&:hover': primaryRaw.primaryHover,
  },
});
