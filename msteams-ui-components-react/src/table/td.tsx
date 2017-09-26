import * as React from 'react';
import { connectTeamsComponent, InjectedTeamsProps } from '../index';

const TdInternal: React.StatelessComponent<InjectedTeamsProps> = (props) => (
  <td className={props.theme.table.td}>{props.children}</td>
);

export const Td = connectTeamsComponent<{}>(TdInternal);
