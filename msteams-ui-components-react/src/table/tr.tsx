import { table } from 'msteams-ui-styles-core/dist/typestyle-binding/table';
import * as React from 'react';
import { connectTeamsComponent, InjectedTeamsProps } from '../index';

const TrInternal: React.StatelessComponent<InjectedTeamsProps> = (props) => {
  const themeClassNames = table(props.context);
  return <tr className={themeClassNames.tr}>{props.children}</tr>;
};

export const Tr = connectTeamsComponent<{}>(TrInternal);
