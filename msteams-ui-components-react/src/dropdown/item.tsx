import { dropdown } from 'msteams-ui-styles-core/dist/typestyle-binding/dropdown';
import * as React from 'react';
import { connectTeamsComponent, InjectedTeamsProps } from '../index';
import classes from '../utils/classes';

export interface DropdownItemProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> { }

const DropdownItemInternal: React.StatelessComponent<DropdownItemProps & InjectedTeamsProps> = (props) => {
  const { context, className, ...rest } = props;
  const themeClassNames = dropdown(context);

  return (
    <button className={classes(themeClassNames.item, className)} {...rest}>{props.children}</button>
  );
};

export const DropdownItem = connectTeamsComponent<DropdownItemProps>(DropdownItemInternal);
