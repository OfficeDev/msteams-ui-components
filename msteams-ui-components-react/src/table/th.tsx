import { table } from 'msteams-ui-styles-core/lib/components/table';
import * as React from 'react';
import { connectTeamsComponent, InjectedTeamsProps } from '../index';

export interface ThProps
extends React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement> { }

const ThInternal: React.StatelessComponent<ThProps &InjectedTeamsProps> = (props) => {
  const { context, ...rest } = props;
  const themeClassNames = table(context);
  return <th
    data-component-type="Th"
    className={themeClassNames.th} {...rest}>{props.children}</th>;
};

export const Th = connectTeamsComponent<ThProps>(ThInternal);
