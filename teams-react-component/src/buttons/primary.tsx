import * as React from 'react';
import { getConfig, primary } from 'teams-styles-core';

const config = getConfig(10);

export interface PrimaryButtonProps {
  disabled?: boolean;
}

export const PrimaryButton: React.StatelessComponent<PrimaryButtonProps> = (props) => (
  <button type="button" className={`${primary(config)}`} disabled={props.disabled}>a button</button>
);

PrimaryButton.propTypes = {
  disabled: React.PropTypes.bool,
};
