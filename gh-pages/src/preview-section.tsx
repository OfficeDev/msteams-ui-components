import * as Components from 'msteams-ui-components-react';
import * as React from 'react';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';

export interface PreviewSectionProps {
   code: string;
}

export const PreviewSection: React.StatelessComponent<PreviewSectionProps> =
  (props: PreviewSectionProps) => {
    return <LiveProvider code={props.code} scope={{...Components}}>
      <LivePreview />
      <LiveEditor />
      <LiveError />
    </LiveProvider>;
  };
