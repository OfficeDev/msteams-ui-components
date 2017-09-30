import { secondaryButton } from 'msteams-ui-styles-core/dist/typestyle-binding/secondary-button';
import * as React from 'react';
import { InjectedTeamsProps } from '../index';
import { connectTeamsComponent } from '../teams-context';
import classes from '../utils/classes';

export interface SecondaryButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  disabled?: boolean;
}

const SecondaryButtonView: React.StatelessComponent<SecondaryButtonProps & InjectedTeamsProps> = (props) => {
  const { context, className, ...rest } = props;
  const themeClassName = secondaryButton(context);

  return <button className={classes(themeClassName, className)} {...rest}>{props.children}</button>;
};

export const SecondaryButton = connectTeamsComponent(SecondaryButtonView);
