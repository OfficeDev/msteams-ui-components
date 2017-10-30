import { primaryButton } from 'msteams-ui-styles-core/lib/components/primary-button';
import * as React from 'react';
import { InjectedTeamsProps } from '../index';
import { connectTeamsComponent } from '../teams-context';
import classes from '../utils/classes';

export interface PrimaryButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  disabled?: boolean;
}

const PrimaryButtonView: React.StatelessComponent<PrimaryButtonProps & InjectedTeamsProps> =
  (props: PrimaryButtonProps & InjectedTeamsProps) => {
    const { context, className, ...rest } = props;
    const themeClassName = primaryButton(context);

    return <button className={classes(themeClassName, className)} {...rest}>{props.children}</button>;
  };

export const PrimaryButton = connectTeamsComponent(PrimaryButtonView);
