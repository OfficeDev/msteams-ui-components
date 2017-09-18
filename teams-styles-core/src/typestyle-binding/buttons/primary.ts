import { style } from 'typestyle';
import * as primaryRaw from '../../raw/buttons/primary';
import { Config } from '../../raw/config/index';

export function primary(config: Config) {
  const result = style(primaryRaw.normal(config), {
    $nest: {
      '&:hover': primaryRaw.hover(config),
    },
  });
  return result;
}
