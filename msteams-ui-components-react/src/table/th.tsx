import { table } from 'msteams-ui-styles-core/lib/components/table';
import * as React from 'react';
import { connectTeamsComponent, InjectedTeamsProps } from '../index';

const ThInternal: React.StatelessComponent<InjectedTeamsProps> = (props) => {
  const themeClassNames = table(props.context);
  return <th
    data-component-type="Th"
    className={themeClassNames.th}>{props.children}</th>;
};

export const Th = connectTeamsComponent<{}>(ThInternal);
