import { table } from 'msteams-ui-styles-core/lib/components/table';
import * as React from 'react';
import { connectTeamsComponent, InjectedTeamsProps } from '../index';
import classes from '../utils/classes';

export interface TrProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> { }

const TrInternal: React.StatelessComponent<TrProps & InjectedTeamsProps> = (props) => {
  const { context, className, ...rest } = props;
  const themeClassNames = table(context);
  return <tr
    data-component-type="Tr"
    className={classes(themeClassNames.tr, className)} {...rest}>{props.children}</tr>;
};

export const Tr = connectTeamsComponent<TrProps>(TrInternal);
