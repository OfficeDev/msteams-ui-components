import { panel } from 'msteams-ui-styles-core/lib/components/panel';
import * as React from 'react';
import { connectTeamsComponent, IInjectedTeamsProps } from '../teams-context';
import classes from '../utils/classes';

export interface IPanelBodyProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}

const PanelBodyView: React.StatelessComponent<IPanelBodyProps & IInjectedTeamsProps> =
  (props) => {
    const { context, className, ...rest } = props;
    const classNames = panel(context);
    return (
      <div
        className={classes(classNames.body, className)}
        {...rest}>
        {props.children}
      </div>
    );
  };

export const PanelBody = connectTeamsComponent(PanelBodyView);
