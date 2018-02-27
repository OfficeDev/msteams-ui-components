import * as React from 'react';
import { ConnectedComponent, IInjectedTeamsProps } from './connected-component';

export function connectTeamsComponent<TChildProps>(
  Component: React.ComponentClass<TChildProps & IInjectedTeamsProps>
    | React.StatelessComponent<TChildProps & IInjectedTeamsProps>): React.ComponentType<TChildProps> {
  return (props: TChildProps) => {
    return (
      <ConnectedComponent render={(connectedProps: IInjectedTeamsProps) => (
        <Component {...props} {...connectedProps} />
      )} />
    );
  };
}
