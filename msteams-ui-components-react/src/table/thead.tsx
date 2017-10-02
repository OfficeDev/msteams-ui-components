import { table } from 'msteams-ui-styles-core/dist/typestyle-binding/table';
import * as React from 'react';
import { connectTeamsComponent, InjectedTeamsProps } from '../index';

const THeadInternal: React.StatelessComponent<InjectedTeamsProps> = (props) => {
  const themeClassNames = table(props.context);
  return <thead className={themeClassNames.thead}>{props.children}</thead>;
};

export const THead = connectTeamsComponent<{}>(THeadInternal);
