import * as React from 'react';
import { connectTeamsComponent, InjectedTeamsProps } from '../index';
import classes from '../utils/classes';

export interface DropdownItemProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> { }

const DropdownItemInternal: React.StatelessComponent<DropdownItemProps & InjectedTeamsProps> = (props) => {
  const { theme, className, ...rest } = props;

  return (
    <button className={classes(theme.dropdown.item, className)} {...rest}>{props.children}</button>
  );
};

export const DropdownItem = connectTeamsComponent<DropdownItemProps>(DropdownItemInternal);
