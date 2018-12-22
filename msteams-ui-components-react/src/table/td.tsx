import { table } from 'msteams-ui-styles-core/lib/components/table';
import * as React from 'react';
import { connectTeamsComponent, ITeamsThemeContextProps } from '../teams-context';
import classes from '../utils/classes';

export interface ITdProps
  extends React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement> { }

const TdInternal: React.FunctionComponent<ITdProps & ITeamsThemeContextProps> = (props) => {
  const { context, className,  ...rest } = props;
  const themeClassNames = table(context);
  return <td className={classes(themeClassNames.td, className)} {...rest}>{props.children}</td>;
};

export const Td = connectTeamsComponent<ITdProps>(TdInternal);
