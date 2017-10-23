import * as Components from 'msteams-ui-components-react';
import * as Icons from 'msteams-ui-icons-react';
import * as React from 'react';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';

export interface PreviewSectionProps {
   code: string;
}

export const PreviewSection: React.StatelessComponent<PreviewSectionProps> =
  (props: PreviewSectionProps) => {
    return <LiveProvider code={props.code} scope={{...Components, ...Icons}}>
      <LivePreview style={{paddingBottom: '16px'}}/>
      <LiveEditor />
      <LiveError />
    </LiveProvider>;
  };
