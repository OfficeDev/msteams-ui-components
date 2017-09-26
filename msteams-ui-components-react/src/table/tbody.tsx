import * as React from 'react';
import { connectTeamsComponent, InjectedTeamsProps } from '../index';

const TBodyInternal: React.StatelessComponent<InjectedTeamsProps> = (props) => (
  <tbody className={props.theme.table.tbody}>{props.children}</tbody>
);

export const TBody = connectTeamsComponent<{}>(TBodyInternal);
