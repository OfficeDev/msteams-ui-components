import * as React from 'react';
import { Theme } from '../../../teams-styles-core/dist/index';
import { InjectedTeamsProps } from '../index';
import { connectTeamsComponent } from '../teams-context/teams-component-context';

export interface PrimaryButtonProps {
  disabled?: boolean;
}

const PrimaryButtonView: React.StatelessComponent<PrimaryButtonProps & InjectedTeamsProps> =
  (props) => (
    <button type="button" className={props.theme.buttons.primary} disabled={props.disabled}>{props.children}</button>
  );

export const PrimaryButton = connectTeamsComponent(PrimaryButtonView);
