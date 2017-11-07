import { toggle } from 'msteams-ui-styles-core/lib/components/toggle';
import * as React from 'react';
import { connectTeamsComponent, InjectedTeamsProps } from '../index';

export interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const ToggleInternal: React.StatelessComponent<ToggleProps & InjectedTeamsProps> = (props) => {
  const { context } = props;
  const themeClassNames = toggle(context);

  return (
    <div
      data-component-type="Toggle"
      className={themeClassNames.container}>
      <input type="checkbox" className={themeClassNames.input} checked={props.checked} />
      <button
        onClick={() => props.onChange(!props.checked)}
        className={themeClassNames.slider}
      />
    </div>
  );
};

export const Toggle = connectTeamsComponent<ToggleProps>(ToggleInternal);
