import { table } from 'msteams-ui-styles-core/lib/components/table';
import * as React from 'react';
import { connectTeamsComponent, ITeamsThemeContextProps } from '../teams-context';
import classes from '../utils/classes';

export interface ITBodyProps
extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement> { }

const TBodyInternal: React.FunctionComponent<ITBodyProps & ITeamsThemeContextProps> = (props) => {
  const {className, context, ...rest} = props;
  const themeClassNames = table(context);
  return <tbody className={classes(themeClassNames.tbody, className)} {...rest}>{props.children}</tbody>;
};

export const TBody = connectTeamsComponent<{}>(TBodyInternal);
