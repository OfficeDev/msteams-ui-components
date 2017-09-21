import * as React from 'react';
import { classes } from 'typestyle';
import { connectTeamsComponent, InjectedTeamsProps } from '../index';

export interface AnchorProps
  extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> { }

const AnchorInternal: React.StatelessComponent<AnchorProps & InjectedTeamsProps> = (props) => {
  const { theme, className, ...rest } = props;
  return (
    <a className={classes(theme.anchor, className)} {...rest}>{props.children}</a>
  );
};

export const Anchor = connectTeamsComponent<AnchorProps>(AnchorInternal);
