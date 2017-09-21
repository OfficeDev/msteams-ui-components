import * as React from 'react';
import { Anchor } from 'teams-react-component';

export const LinkSection: React.StatelessComponent = () => (
  <div>
    <h1>Links</h1>
    <Anchor href="#" onClick={(e) => e.preventDefault()}>a link</Anchor>
  </div>
);
