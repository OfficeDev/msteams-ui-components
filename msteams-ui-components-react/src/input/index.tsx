import * as React from 'react';
import { classes } from 'typestyle';
import { connectTeamsComponent, InjectedTeamsProps } from '../index';

export interface InputProps extends
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> { }

const InputInternal: React.StatelessComponent<InputProps & InjectedTeamsProps> = (props) => {
  const { theme, className, ...rest } = props;
  return (
    <div className={theme.input.label}>
      <input className={classes(theme.input.input, className)} {...rest} />
      <span className={theme.input.inputUnderline} />
    </div>
  );
};

export const Input = connectTeamsComponent(InputInternal);
