import * as React from 'react';
import { getContext, secondary } from 'teams-styles-core';

const c = getContext();

export interface SecondaryButtonProps {
  disabled?: boolean;
}

export const SecondaryButton: React.StatelessComponent<SecondaryButtonProps> = (props) => (
  <button type="button" className={`${secondary(c)}`} disabled={props.disabled}>a button</button>
);

SecondaryButton.propTypes = {
  disabled: React.PropTypes.bool,
};
