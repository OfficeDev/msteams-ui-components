import * as React from 'react';
import { TButton } from 'teams-react-component';
import { container } from './styles';

export const ButtonSection: React.StatelessComponent = () => (
  <div className={`${container}`}>
    <h1>Buttons</h1>
    <TButton />
    <TButton disabled={true} />
  </div>
);
