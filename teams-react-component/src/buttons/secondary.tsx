import * as React from 'react';
import { getConfig, secondary } from 'teams-styles-core';

const config = getConfig(10);

export interface SecondaryButtonProps {
  disabled?: boolean;
}

export const SecondaryButton: React.StatelessComponent<SecondaryButtonProps> = (props) => (
  <button type="button" className={`${secondary(config)}`} disabled={props.disabled}>a button</button>
);
