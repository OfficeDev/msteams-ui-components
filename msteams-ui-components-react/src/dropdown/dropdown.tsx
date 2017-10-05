import { dropdown } from 'msteams-ui-styles-core/lib/components/dropdown';
import * as React from 'react';
import { connectTeamsComponent, InjectedTeamsProps } from '../index';
import classes from '../utils/classes';

export interface DropdownProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  menuRightAlign?: boolean;
  mainButtonText: string;
}

interface DropdownState {
  show: boolean;
}

class DropdownInternal extends React.Component<DropdownProps & InjectedTeamsProps, DropdownState> {
  state = { show: false };

  render() {
    const { context, className, menuRightAlign, mainButtonText, ...rest } = this.props;
    const themeClassNames = dropdown(context);
    const itemContainerClass = [themeClassNames.itemContainer];

    if (menuRightAlign) {
      itemContainerClass.push(themeClassNames.itemContainerRight);
    }

    if (this.state.show) {
      itemContainerClass.push(themeClassNames.showItems);
    }

    return (
      <div className={themeClassNames.container} onClick={this.toggle}>
        <button className={classes(themeClassNames.mainButton, className)} {...rest}>{mainButtonText}</button>
        <div className={itemContainerClass.join(' ')}>
          {this.props.children}
        </div>
      </div>
    );
  }

  private toggle = () => {
    this.setState({
      show: !this.state.show,
    });
  }
}

export const Dropdown = connectTeamsComponent<DropdownProps>(DropdownInternal);
