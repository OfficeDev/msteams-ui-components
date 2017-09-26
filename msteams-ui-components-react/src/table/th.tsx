import * as React from 'react';
import { connectTeamsComponent, InjectedTeamsProps } from '../index';

const ThInternal: React.StatelessComponent<InjectedTeamsProps> = (props) => (
  <th className={props.theme.table.th}>{props.children}</th>
);

export const Th = connectTeamsComponent<{}>(ThInternal);
