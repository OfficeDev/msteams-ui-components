import * as React from 'react';
import { ConnectedComponent, InjectedTeamsProps } from './connected-component';

export function connectTeamsComponent<TChildProps>(
  Component: React.ComponentClass<TChildProps & InjectedTeamsProps>
    | React.StatelessComponent<TChildProps & InjectedTeamsProps>): React.ComponentType<TChildProps> {
  return (props: TChildProps) => {
    return (
      <ConnectedComponent render={(connectedProps: InjectedTeamsProps) => (
        <Component {...props} {...connectedProps} />
      )} />
    );
  };
}
