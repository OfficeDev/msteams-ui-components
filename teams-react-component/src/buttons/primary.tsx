import * as React from 'react';
import { Theme } from '../../../teams-styles-core/dist/index';
import { connectTeamsComponent } from '../teams-context/teams-component-context';

export interface PrimaryButtonProps {
  disabled?: boolean;
}

export const PrimaryButton: React.StatelessComponent<PrimaryButtonProps> =
  connectTeamsComponent((props: any) => (
    <button type="button" className={props.theme.buttons.primary} disabled={props.disabled}>a button</button>
  ));
