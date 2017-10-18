import { table } from 'msteams-ui-styles-core/lib/components/table';
import * as React from 'react';
import { connectTeamsComponent, InjectedTeamsProps } from '../index';
import classes from '../utils/classes';

export interface TableProps
extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableElement>, HTMLTableElement> {
}

const TableInternal: React.StatelessComponent<TableProps & InjectedTeamsProps> = (props) => {
  const { context, className, children, ...rest } = props;
  const themeClassNames = table(context);
  return <table className={classes(themeClassNames.table, className)} {...rest}>
    {children}
  </table>;
};

export const Table = connectTeamsComponent(TableInternal);
