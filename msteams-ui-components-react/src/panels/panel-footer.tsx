import { panel } from 'msteams-ui-styles-core/lib/components/panel';
import * as React from 'react';
import { connectTeamsComponent, IInjectedTeamsProps } from '../teams-context';
import classes from '../utils/classes';

export interface IPanelFooterProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}

const PanelFooterView: React.StatelessComponent<IPanelFooterProps & IInjectedTeamsProps> =
  (props) => {
    const { context, className, ...rest } = props;
    const classNames = panel(context);
    return (
      <div
        className={classes(classNames.footer, className)}
        {...rest}>
        {props.children}
      </div>
    );
  };

export const PanelFooter = connectTeamsComponent(PanelFooterView);
