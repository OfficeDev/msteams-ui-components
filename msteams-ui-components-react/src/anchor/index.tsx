import { anchor } from 'msteams-ui-styles-core/lib/components/anchor';
import * as React from 'react';
import { connectTeamsComponent, ITeamsThemeContextProps } from '../teams-context';
import classes from '../utils/classes';

export interface IAnchorProps
  extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> { }

const AnchorInternal: React.FunctionComponent<IAnchorProps & ITeamsThemeContextProps> = (props) => {
  const { context, className, ...rest } = props;
  const themeClassName = anchor(context);

  return (
    <a role="link" className={classes(themeClassName, className)} {...rest}>{props.children}</a>
  );
};

export const Anchor = connectTeamsComponent<IAnchorProps>(AnchorInternal);
