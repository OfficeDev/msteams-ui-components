import * as React from 'react';
import { getConfig, primary } from 'teams-styles-core';

const config = getConfig(10);

export interface TButtonProps {
  disabled?: boolean;
}

export const TButton: React.StatelessComponent<TButtonProps> = (props) => (
  <button type="button" className={`${primary(config)}`} disabled={props.disabled}>a button</button>
);
