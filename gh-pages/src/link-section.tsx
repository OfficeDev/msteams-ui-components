import { Anchor } from 'msteams-ui-components-react';
import * as React from 'react';

export const LinkSection: React.StatelessComponent = () => (
  <div>
    <h1>Links</h1>
    <Anchor href="#" onClick={(e) => e.preventDefault()}>a link</Anchor>
  </div>
);
