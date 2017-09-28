import * as React from 'react';
import { InjectedTeamsProps } from '../index';
import { connectTeamsComponent } from '../teams-context';
import classes from '../utils/classes';

export interface SecondaryButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  disabled?: boolean;
}

const SecondaryButtonView: React.StatelessComponent<SecondaryButtonProps & InjectedTeamsProps> = (props) => {
  const { theme, className, ...rest } = props;

  return <button className={classes(theme.buttons.secondary, className)} {...rest}>{props.children}</button>;
};

export const SecondaryButton = connectTeamsComponent(SecondaryButtonView);
