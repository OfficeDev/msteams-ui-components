import { table } from 'msteams-ui-styles-core/lib/components/table';
import * as React from 'react';
import { connectTeamsComponent, IInjectedTeamsProps } from '../index';
import classes from '../utils/classes';

export interface ITableProps
extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableElement>, HTMLTableElement> {
}

const TableInternal: React.StatelessComponent<ITableProps & IInjectedTeamsProps> = (props) => {
  const { context, className, children, ...rest } = props;
  const themeClassNames = table(context);
  return <table
    data-component-type="Table"
    className={classes(themeClassNames.table, className)} {...rest}>
    {children}
  </table>;
};

export const Table = connectTeamsComponent(TableInternal);
