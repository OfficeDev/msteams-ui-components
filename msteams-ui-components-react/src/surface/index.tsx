import * as React from 'react';
import { connectTeamsComponent, InjectedTeamsProps } from '../teams-context';
import classes from '../utils/classes';

export interface SurfaceProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

const SurfaceView: React.StatelessComponent<SurfaceProps & InjectedTeamsProps> =
  (props) => {
    const { theme, className, ...rest } = props;
    return (
      <div className={classes(theme.surface, className)} {...rest}>{props.children}</div>
    );
  };

export const Surface = connectTeamsComponent<SurfaceProps>(SurfaceView);
