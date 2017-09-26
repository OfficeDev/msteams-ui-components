import * as React from 'react';
import { connectTeamsComponent, InjectedTeamsProps } from '../index';

const TableInternal: React.StatelessComponent<InjectedTeamsProps> = (props) => (
  <table className={props.theme.table.table}>
    {props.children}
  </table>
);

export const Table = connectTeamsComponent<{}>(TableInternal);
