import { panel } from 'msteams-ui-styles-core/lib/components/panel';
import * as React from 'react';
import { connectTeamsComponent, InjectedTeamsProps } from '../teams-context';
import classes from '../utils/classes';

export interface PanelFooterProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}

const PanelFooterView: React.StatelessComponent<PanelFooterProps & InjectedTeamsProps> =
  (props) => {
    const { context, className, ...rest } = props;
    const classNames = panel(context);
    return (
      <div
        data-component-type="PanelFooter"
        className={classes(classNames.footer, className)}
        {...rest}>
        {props.children}
      </div>
    );
  };

export const PanelFooter = connectTeamsComponent(PanelFooterView);
