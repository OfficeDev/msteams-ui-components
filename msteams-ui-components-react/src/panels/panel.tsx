import * as React from 'react';
import { connectTeamsComponent, InjectedTeamsProps } from '../teams-context';
import { classesFunc } from '../utils/classes';

export interface PanelProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

const PanelView: React.StatelessComponent<PanelProps & InjectedTeamsProps> =
  (props) => {
    const { theme, className, ...rest } = props;
    return (
      <div className={classesFunc(theme.panel, className)} {...rest}>{props.children}</div>
    );
  };

export const Panel = connectTeamsComponent<PanelProps>(PanelView);
