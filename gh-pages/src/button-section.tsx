import * as React from 'react';
import { PrimaryButton, SecondaryButton } from 'teams-react-component';

export const ButtonSection: React.StatelessComponent = () => (
  <div>
    <h1>Buttons</h1>
    <h2>Primary</h2>
    <PrimaryButton>primary button</PrimaryButton>
    <PrimaryButton disabled={true}>disabled primary button</PrimaryButton>
    <h2>Secondary</h2>
    <SecondaryButton>secondary button</SecondaryButton>
    <SecondaryButton disabled={true}>disabled secondary button</SecondaryButton>
  </div>
);
