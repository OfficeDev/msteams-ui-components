import * as React from 'react';
import { Theme } from '../../../teams-styles-core/dist/index';
import { connectTeamsComponent } from '../teams-context';

export const Panel: React.StatelessComponent<any> =
  connectTeamsComponent((props: any) => {
    const { theme, ...rest } = props;
    return (
      <div className={props.theme.panel} {...rest}>{props.children}</div>
    );
  });
