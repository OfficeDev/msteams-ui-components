import * as React from 'react';
import { getConfig, primary } from 'teams-styles-core';

const config = getConfig(10);

export const TButton: React.StatelessComponent = () => (
  <button className={`${primary(config)}`}>a button</button>
);
