import * as React from 'react';
import { getContext, primary } from 'teams-styles-core';

const c = getContext();

export interface PrimaryButtonProps {
  disabled?: boolean;
}

export const PrimaryButton: React.StatelessComponent<PrimaryButtonProps> = (props) => (
  <button type="button" className={`${primary(c)}`} disabled={props.disabled}>a button</button>
);
