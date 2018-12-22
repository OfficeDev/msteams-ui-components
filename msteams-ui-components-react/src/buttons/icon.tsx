import { MSTeamsIcon, MSTeamsIconWeight } from 'msteams-ui-icons-react';
import { iconButton } from 'msteams-ui-styles-core/lib/components/icon-button';
import * as React from 'react';
import { IFocusable } from '../focusable';
import { connectTeamsComponent, ITeamsThemeContextProps } from '../teams-context';
import classes from '../utils/classes';

export interface IIconButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  onRef?: (ref: React.Component & IFocusable | null) => void;
  iconType: string;
  iconWeight?: number;
}

class IconButtonView
  extends React.Component<IIconButtonProps & ITeamsThemeContextProps>
  implements IFocusable {
  private button: HTMLButtonElement | null = null;

  componentDidMount() {
    if (this.props.onRef) {
      this.props.onRef(this);
    }
  }

  componentWillUnmount() {
    if (this.props.onRef) {
      this.props.onRef(null);
    }
  }

  focus() {
    if (this.button) {
      this.button.focus();
    }
  }

  render() {
    const { context, className, iconType, iconWeight = MSTeamsIconWeight.Light, children, onRef, ...rest } = this.props;
    const themeClassName = iconButton(context);

    return <button
      ref={(ref) => this.button = ref}
      role="button"
      onMouseDown={(e) => e.preventDefault()}
      className={classes(themeClassName, className)}
      {...rest}>
      <MSTeamsIcon iconType={iconType} iconWeight={iconWeight} />
      {children}
    </button>;
  }
}

export const IconButton = connectTeamsComponent(IconButtonView);
