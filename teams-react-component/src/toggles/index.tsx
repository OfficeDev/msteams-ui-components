import * as React from 'react';
import { connectTeamsComponent, InjectedTeamsProps } from '../index';

export interface ToggleProps {
  value: boolean;
  onChange: (checked: boolean) => void;
}

const ToggleInternal: React.StatelessComponent<ToggleProps & InjectedTeamsProps> = (props) => {
  const toggle = props.theme.toggles;
  const sliderClass = props.value ? toggle.sliderChecked : toggle.slider;
  const onToggle = (e: React.SyntheticEvent<any>) => {
    e.preventDefault();
    props.onChange(!props.value);
  };

  return (
    <label
      className={toggle.label}
      onClick={onToggle}

    >
      <input type="checkbox" className={toggle.input} />
      <span
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            onToggle(e);
          }
        }}
        tabIndex={0}
        className={sliderClass}
      />
    </label>
  );
};

export const Toggle = connectTeamsComponent<ToggleProps>(ToggleInternal);
