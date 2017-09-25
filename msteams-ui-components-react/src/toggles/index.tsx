import * as React from 'react';
import { connectTeamsComponent, InjectedTeamsProps } from '../index';

export interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const ToggleInternal: React.StatelessComponent<ToggleProps & InjectedTeamsProps> = (props) => {
  const toggle = props.theme.toggle;

  return (
    <div
      className={toggle.container}
    >
      <input type="checkbox" className={toggle.input} checked={props.checked} />
      <button
        onClick={() => props.onChange(!props.checked)}
        className={toggle.slider}
      />
    </div>
  );
};

export const Toggle = connectTeamsComponent<ToggleProps>(ToggleInternal);
