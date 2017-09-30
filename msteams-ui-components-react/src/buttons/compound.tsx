import * as React from 'react';
import { InjectedTeamsProps } from '../index';
import { connectTeamsComponent } from '../teams-context';
import classes from '../utils/classes';

export interface CompoundButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  disabled?: boolean;
  icon?: (() => React.ReactNode);
  primaryText?: string;
  secondaryText?: string;
}

const CompoundButtonView: React.StatelessComponent<CompoundButtonProps & InjectedTeamsProps> =
  (props: CompoundButtonProps & InjectedTeamsProps) => {
    const { theme, icon, primaryText, secondaryText, className, ...rest } = props;

    return <button className={classes(theme.compoundbutton.container, className)} {...rest}>
      { props.icon ?
      <div className={theme.compoundbutton.icon}>
        {props.icon()}
      </div> : null }
      <div>
        <div className={theme.compoundbutton.primaryText}>
          {props.primaryText}
        </div>
        <div className={theme.compoundbutton.secondaryText}>
          {props.secondaryText}
        </div>
      </div>
      {props.children}
    </button>;
  };

export const CompoundButton = connectTeamsComponent(CompoundButtonView);
