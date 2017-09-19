import { style } from 'typestyle';
import * as secondaryRaw from '../../raw/buttons/secondary';
import { Config } from '../../raw/config/index';

export function secondary(config: Config) {
  const result = style(secondaryRaw.normal(config), {
    $nest: {
      '&:hover': secondaryRaw.hover(config),
      '&:active': secondaryRaw.active(config),
      '&:disabled': secondaryRaw.disabled(config),
      '&:focus': secondaryRaw.focus(config),
      '&:focus:after': secondaryRaw.focusAfter(config),
    },
  });
  return result;
}
