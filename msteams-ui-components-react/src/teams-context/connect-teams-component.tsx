import * as React from 'react';
import { ITeamsThemeContextProps, TeamsThemeContext } from './teams-theme-context';

export function connectTeamsComponent<TChildProps>(
  Component: React.ComponentClass<TChildProps & ITeamsThemeContextProps>
    | React.FunctionComponent<TChildProps & ITeamsThemeContextProps>): React.ComponentType<TChildProps> {
  return (props: TChildProps) => {
    return (
      <TeamsThemeContext.Consumer>
        {(context) => {
          return <Component {...props} context={context} />;
        }}
      </TeamsThemeContext.Consumer>
    );
  };
}
