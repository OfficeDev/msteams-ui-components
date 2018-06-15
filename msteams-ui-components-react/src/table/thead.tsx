import { table } from 'msteams-ui-styles-core/lib/components/table';
import * as React from 'react';
import { connectTeamsComponent, IInjectedTeamsProps } from '../index';
import classes from '../utils/classes';

export interface ITHeadProps
extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement> { }

const THeadInternal: React.StatelessComponent<ITHeadProps & IInjectedTeamsProps> = (props) => {
  const {className, context, ...rest} = props;
  const themeClassNames = table(context);
  return <thead className={classes(themeClassNames.thead, className)} {...rest}>{props.children}</thead>;
};

export const THead = connectTeamsComponent<{}>(THeadInternal);
