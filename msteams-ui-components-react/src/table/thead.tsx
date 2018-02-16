import { table } from 'msteams-ui-styles-core/lib/components/table';
import * as React from 'react';
import { connectTeamsComponent, IInjectedTeamsProps } from '../index';

const THeadInternal: React.StatelessComponent<IInjectedTeamsProps> = (props) => {
  const themeClassNames = table(props.context);
  return <thead
    data-component-type="THead"
    className={themeClassNames.thead}>{props.children}</thead>;
};

export const THead = connectTeamsComponent<{}>(THeadInternal);
