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
  constructor(props: any) {
    super(props);
    this.state = {
      show: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      show: !this.state.show,
    });
  }

  render() {
    const { theme, className, menuRightAlign, mainButtonText, ...rest } = this.props;
    const itemContainerClass = [theme.dropdown.itemContainer];

    if (menuRightAlign) {
      itemContainerClass.push(theme.dropdown.itemContainerRight);
    }

    if (this.state.show) {
      itemContainerClass.push(theme.dropdown.showItems);
    }

    return (
      <div className={theme.dropdown.container} onClick={this.toggle}>
        <button className={classes(theme.dropdown.mainButton, className)} {...rest}>{mainButtonText}</button>
        <div className={itemContainerClass.join(' ')}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export const Dropdown = connectTeamsComponent<DropdownProps>(DropdownInternal);
