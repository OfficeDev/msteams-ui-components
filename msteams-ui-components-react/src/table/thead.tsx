import * as React from 'react';
import { connectTeamsComponent, InjectedTeamsProps } from '../index';

const THeadInternal: React.StatelessComponent<InjectedTeamsProps> = (props) => (
  <thead className={props.theme.table.thead}>{props.children}</thead>
);

export const THead = connectTeamsComponent<{}>(THeadInternal);
