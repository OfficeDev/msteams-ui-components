import * as Components from 'msteams-ui-components-react';
import * as Icons from 'msteams-ui-icons-react';
import * as React from 'react';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import * as styles from './styles';

export interface IPreviewSectionProps {
   code: string;
}

export interface IPreviewSectionState {
  codeHidden: boolean;
}

type ConnectedProps = IPreviewSectionProps & Components.ITeamsThemeContextProps;

export class PreviewSectionInner extends React.Component<ConnectedProps, IPreviewSectionState> {
  state = {
    codeHidden: true,
  };

  render() {
    const { context, code } = this.props;
    const { codeHidden } = this.state;
    const classes = styles.content(context);

    return <LiveProvider className={classes.container} code={code} scope={{...Components, ...Icons}}>
      <LivePreview className={classes.preview} />
      <Components.SecondaryButton
        className={classes.codeToggle}
        onClick={this.toggleCode}>
        {codeHidden ? 'Show Code Editor' : 'Hide Code Editor'}
      </Components.SecondaryButton>
      {codeHidden ? null :
        <LiveEditor className={classes.code} />}
      <LiveError className={classes.error} />
    </LiveProvider>;
  }

  private toggleCode = () => {
    this.setState({codeHidden: !this.state.codeHidden});
  }
}

export const PreviewSection = Components.connectTeamsComponent(PreviewSectionInner);
