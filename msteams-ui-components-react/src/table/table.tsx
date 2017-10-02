import { table } from 'msteams-ui-styles-core/dist/typestyle-binding/table';
import * as React from 'react';
import { connectTeamsComponent, InjectedTeamsProps } from '../index';

const TableInternal: React.StatelessComponent<InjectedTeamsProps> = (props) => {
  const themeClassNames = table(props.context);
  return <table className={themeClassNames.table}>
    {props.children}
  </table>;
};

export const Table = connectTeamsComponent<{}>(TableInternal);
