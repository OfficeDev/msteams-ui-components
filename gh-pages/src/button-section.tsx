import * as React from 'react';
import { PrimaryButton, SecondaryButton } from 'teams-react-component';
import { container } from './styles';

export const ButtonSection: React.StatelessComponent = () => (
  <div className={`${container}`}>
    <h1>Buttons</h1>
    <h2>Primary</h2>
    <PrimaryButton />
    <PrimaryButton disabled={true} />
    <h2>Secondary</h2>
    <SecondaryButton />
    <SecondaryButton disabled={true} />
  </div>
);
