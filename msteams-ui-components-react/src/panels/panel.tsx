import { panel } from 'msteams-ui-styles-core/dist/typestyle-binding/panel';
import * as React from 'react';
import { connectTeamsComponent, InjectedTeamsProps } from '../teams-context';
import classes from '../utils/classes';

export interface PanelProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

const PanelView: React.StatelessComponent<PanelProps & InjectedTeamsProps> =
  (props) => {
    const { context, className, ...rest } = props;
    const themeClassName = panel(context);
    return (
      <div className={classes(themeClassName, className)} {...rest}>{props.children}</div>
    );
  };

export const Panel = connectTeamsComponent<PanelProps>(PanelView);
