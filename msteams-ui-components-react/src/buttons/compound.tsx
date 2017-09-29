import * as React from 'react';
import { InjectedTeamsProps } from '../index';
import { connectTeamsComponent } from '../teams-context';
import classes from '../utils/classes';

export interface CompoundButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  icon?: string;
  text?: string;
  subText?: string;
}

const CompoundButtonView: React.StatelessComponent<CompoundButtonProps & InjectedTeamsProps> =
  (props: CompoundButtonProps & InjectedTeamsProps) => {
    const { theme, className, ...rest } = props;
    return <button>
      <img src={props.icon} />
      <span>
        {props.text}
      </span>
      <span>
        {props.subText}
      </span>
    </button>;
  };

export const CompoundButton = connectTeamsComponent(CompoundButtonView);
