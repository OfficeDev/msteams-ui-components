import { dropdown } from 'msteams-ui-styles-core/lib/components/dropdown';
import * as React from 'react';
import { connectTeamsComponent, InjectedTeamsProps } from '../index';
import classes from '../utils/classes';

export interface DropdownProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  menuRightAlign?: boolean;
  mainButtonText: string;
  label?: string;
}

interface DropdownState {
  show: boolean;
}

class DropdownInternal extends React.Component<DropdownProps & InjectedTeamsProps, DropdownState> {
  state = { show: false };

  render() {
    const { context, className, children, menuRightAlign, label, mainButtonText, ...rest } = this.props;
    const themeClassNames = dropdown(context);
    const itemContainerClass = [themeClassNames.itemContainer];

    if (menuRightAlign) {
      itemContainerClass.push(themeClassNames.itemContainerRight);
    }

    if (this.state.show) {
      itemContainerClass.push(themeClassNames.showItems);
    }

    return (
      <div className={classes(themeClassNames.container, className)}>
        {label ? <label className={themeClassNames.label}>{label}</label> : null}
        <button
          className={themeClassNames.mainButton}
          onClick={this.toggle}
          {...rest}
        >{mainButtonText}</button>
        <div className={itemContainerClass.join(' ')} onClick={this.toggle}>
          {children}
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
