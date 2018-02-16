import { panel } from 'msteams-ui-styles-core/lib/components/panel';
import * as React from 'react';
import { connectTeamsComponent, IInjectedTeamsProps } from '../teams-context';
import classes from '../utils/classes';

export interface IPanelProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}

const PanelView: React.StatelessComponent<IPanelProps & IInjectedTeamsProps> =
  (props) => {
    const { context, className, ...rest } = props;
    const classNames = panel(context);
    return (
      <div
        className={classes(classNames.container, className)} {...rest}>
        {props.children}
      </div>
    );
  };

export const Panel = connectTeamsComponent(PanelView);
