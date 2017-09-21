import * as React from 'react';
import { connectTeamsComponent, InjectedTeamsProps } from '../index';

export interface AnchorProps
  extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> { }

const AnchorInternal: React.StatelessComponent<AnchorProps & InjectedTeamsProps> = (props) => {
  const { theme, ...rest } = props;
  return (
    <a className={theme.anchor} {...rest}>{props.children}</a>
  );
};

export const Anchor = connectTeamsComponent<AnchorProps>(AnchorInternal);
