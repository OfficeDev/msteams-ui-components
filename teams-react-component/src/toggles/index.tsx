import * as React from 'react';
import { connectTeamsComponent, InjectedTeamsProps } from '../index';

export interface ToggleProps {
  value: boolean;
  onChange: (checked: boolean) => void;
}

const ToggleInternal: React.StatelessComponent<ToggleProps & InjectedTeamsProps> = (props) => {
  const toggle = props.theme.toggles;
  const sliderClass = props.value ? toggle.sliderChecked : toggle.slider;
  const onToggle = () => props.onChange(!props.value);

  return (
    <label
      className={toggle.label}
    >
      <input type="checkbox" className={toggle.input} />
      <button
        onClick={onToggle}
        className={sliderClass}
      />
    </label>
  );
};

export const Toggle = connectTeamsComponent<ToggleProps>(ToggleInternal);
