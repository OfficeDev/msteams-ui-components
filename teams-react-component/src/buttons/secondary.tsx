import * as React from 'react';
import { InjectedTeamsProps } from '../index';
import { connectTeamsComponent } from '../teams-context/teams-component-context';

export interface SecondaryButtonProps {
  disabled?: boolean;
}

const SecondaryButtonView: React.StatelessComponent<SecondaryButtonProps & InjectedTeamsProps> = (props) => (
  <button type="button" className={props.theme.buttons.secondary} disabled={props.disabled}>{props.children}</button>
);

export const SecondaryButton = connectTeamsComponent(SecondaryButtonView);
