import { table } from 'msteams-ui-styles-core/lib/components/table';
import * as React from 'react';
import { connectTeamsComponent, InjectedTeamsProps } from '../index';

const TdInternal: React.StatelessComponent<InjectedTeamsProps> = (props) => {
  const themeClassNames = table(props.context);
  return <td className={themeClassNames.td}>{props.children}</td>;
};

export const Td = connectTeamsComponent<{}>(TdInternal);
