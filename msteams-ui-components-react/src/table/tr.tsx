import { table } from 'msteams-ui-styles-core/lib/components/table';
import * as React from 'react';
import { connectTeamsComponent, ITeamsThemeContextProps } from '../teams-context';
import classes from '../utils/classes';

export interface ITrProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> { }

const TrInternal: React.FunctionComponent<ITrProps & ITeamsThemeContextProps> = (props) => {
  const { context, className, ...rest } = props;
  const themeClassNames = table(context);
  return <tr className={classes(themeClassNames.tr, className)} {...rest}>{props.children}</tr>;
};

export const Tr = connectTeamsComponent<ITrProps>(TrInternal);
