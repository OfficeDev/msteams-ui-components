import * as React from 'react';
import { connectTeamsComponent } from '../teams-context/teams-component-context';

export interface SecondaryButtonProps {
  disabled?: boolean;
}
export const SecondaryButton: React.StatelessComponent<SecondaryButtonProps> = connectTeamsComponent((props: any) => (
  <button type="button" className={props.theme.buttons.secondary} disabled={props.disabled}>a button</button>
));
