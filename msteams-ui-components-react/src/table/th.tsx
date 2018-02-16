import { table } from 'msteams-ui-styles-core/lib/components/table';
import * as React from 'react';
import { connectTeamsComponent, IInjectedTeamsProps } from '../index';

export interface IThProps
extends React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement> { }

const ThInternal: React.StatelessComponent<IThProps &IInjectedTeamsProps> = (props) => {
  const { context, ...rest } = props;
  const themeClassNames = table(context);
  return <th
    data-component-type="Th"
    className={themeClassNames.th} {...rest}>{props.children}</th>;
};

export const Th = connectTeamsComponent<IThProps>(ThInternal);
