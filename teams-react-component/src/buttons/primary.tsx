import * as React from 'react';
import { getContext, primary } from 'teams-styles-core';
import { connectTeamsControlProvider } from '../provider/teams-control-provider';

const c = getContext();

export interface PrimaryButtonProps {
  disabled?: boolean;
}

export const PrimaryButton: React.StatelessComponent<PrimaryButtonProps> = connectTeamsControlProvider((props: any) => (
  <button type="button" className={`${props.theme.primaryButton}`} disabled={props.disabled}>a button</button>
));
