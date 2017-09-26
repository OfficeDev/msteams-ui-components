import * as React from 'react';
import { connectTeamsComponent, InjectedTeamsProps } from '../index';

const TrInternal: React.StatelessComponent<InjectedTeamsProps> = (props) => (
  <tr className={props.theme.table.tr}>{props.children}</tr>
);

export const Tr = connectTeamsComponent<{}>(TrInternal);
