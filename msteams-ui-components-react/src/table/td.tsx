import { table } from 'msteams-ui-styles-core/lib/components/table';
import * as React from 'react';
import { connectTeamsComponent, InjectedTeamsProps } from '../index';
import classes from '../utils/classes';

export interface TdProps
  extends React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement> { }

const TdInternal: React.StatelessComponent<TdProps & InjectedTeamsProps> = (props) => {
  const { context, className, ...rest } = props;
  const themeClassNames = table(context);
  return <td
    data-component-type="Td"
    className={classes(themeClassNames.td, className)} {...rest}>{props.children}</td>;
};

export const Td = connectTeamsComponent<TdProps>(TdInternal);
