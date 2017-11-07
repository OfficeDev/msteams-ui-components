import { anchor } from 'msteams-ui-styles-core/lib/components/anchor';
import * as React from 'react';
import { connectTeamsComponent, InjectedTeamsProps } from '../index';
import classes from '../utils/classes';

export interface AnchorProps
  extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> { }

const AnchorInternal: React.StatelessComponent<AnchorProps & InjectedTeamsProps> = (props) => {
  const { context, className, ...rest } = props;
  const themeClassName = anchor(context);

  return (
    <a
      data-component-type="Anchor"
      className={classes(themeClassName, className)} {...rest}>{props.children}</a>
  );
};

export const Anchor = connectTeamsComponent<AnchorProps>(AnchorInternal);
