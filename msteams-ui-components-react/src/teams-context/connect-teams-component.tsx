import * as React from 'react';
import { ConnectedComponent, InjectedTeamsProps } from './connected-component';

export function connectTeamsComponent<TChildProps>(
  Component: React.ComponentClass<TChildProps & InjectedTeamsProps>
  | React.StatelessComponent<TChildProps & InjectedTeamsProps>) {
  return (props: any) => {
    return (
      <ConnectedComponent render={(connectedProps: InjectedTeamsProps) => (
        <Component {...props} {...connectedProps}/>
      )}/>
    );
  };
}
