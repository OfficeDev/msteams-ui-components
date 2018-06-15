import { table } from 'msteams-ui-styles-core/lib/components/table';
import * as React from 'react';
import { connectTeamsComponent, IInjectedTeamsProps } from '../index';
import classes from '../utils/classes';

export interface IThProps
extends React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement> { }

const ThInternal: React.StatelessComponent<IThProps &IInjectedTeamsProps> = (props) => {
  const { className, context, ...rest } = props;
  const themeClassNames = table(context);
  return <th className={classes(themeClassNames.th, className)} {...rest}>{props.children}</th>;
};

export const Th = connectTeamsComponent<IThProps>(ThInternal);
