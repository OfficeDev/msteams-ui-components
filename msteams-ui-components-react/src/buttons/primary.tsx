import * as React from 'react';
import { InjectedTeamsProps } from '../index';
import { connectTeamsComponent } from '../teams-context';

export interface PrimaryButtonProps {
  disabled?: boolean;
}

const PrimaryButtonView: React.StatelessComponent<PrimaryButtonProps & InjectedTeamsProps> =
(props: any) => {
  const className = props.theme ? props.theme.buttons.primary : undefined;
  const innerProps = {...props, className};
  delete innerProps.theme;

  return <button type="button" {...innerProps}>{props.children}</button>;
};

export const PrimaryButton = connectTeamsComponent(PrimaryButtonView);
