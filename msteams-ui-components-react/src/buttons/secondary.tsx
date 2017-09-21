import * as React from 'react';
import { InjectedTeamsProps } from '../index';
import { connectTeamsComponent } from '../teams-context';

export interface SecondaryButtonProps {
  disabled?: boolean;
}

const SecondaryButtonView: React.StatelessComponent<SecondaryButtonProps & InjectedTeamsProps> = (props) => {
  const className = props.theme ? props.theme.buttons.secondary : undefined;
  const innerProps = {...props, className};
  delete innerProps.theme;

  return <button type="button" {...innerProps}>{props.children}</button>;
};

export const SecondaryButton = connectTeamsComponent(SecondaryButtonView);
