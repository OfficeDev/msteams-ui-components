import * as React from 'react';
import { Theme } from 'teams-styles-core';
import { connectTeamsComponent, InjectedTeamsProps } from '../teams-context';

const PanelView: React.StatelessComponent<any & InjectedTeamsProps> =
  (props) => {
    const { theme, ...rest } = props;
    return (
      <div className={theme.panel} {...rest}>{props.children}</div>
    );
  };

export const Panel = connectTeamsComponent(PanelView);
