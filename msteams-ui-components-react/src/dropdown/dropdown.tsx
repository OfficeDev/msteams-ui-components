import { dropdown } from 'msteams-ui-styles-core/lib/components/dropdown';
import * as React from 'react';
import { connectTeamsComponent, InjectedTeamsProps } from '../index';
import classes from '../utils/classes';
import uniqueId from '../utils/uniqueId';

export interface DropdownProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  menuRightAlign?: boolean;
  mainButtonText?: string;
  label?: string;
  renderMainButtonIcon?: () => string | JSX.Element;
}

interface DropdownState {
  show: boolean;
  id: string;
}

class DropdownInternal extends React.Component<DropdownProps & InjectedTeamsProps, DropdownState> {
  state = {
    show: false,
    id: uniqueId('ts-dd-'),
  };

  componentWillUnmount() {
    document.removeEventListener('click', this.close);
  }

  render() {
    const state = this.state;
    const {
      context,
      className,
      children,
      menuRightAlign,
      label,
      mainButtonText,
      style,
      renderMainButtonIcon,
      ...rest,
    } = this.props;
    const themeClassNames = dropdown(context);

    const itemContainerClass = [themeClassNames.itemContainer];
    if (menuRightAlign) {
      itemContainerClass.push(themeClassNames.itemContainerRight);
    }
    if (this.state.show) {
      itemContainerClass.push(themeClassNames.showItems);
    }

    const mainButtonIcon = renderMainButtonIcon ? renderMainButtonIcon() : '▼';

    return (
      <div className={classes(themeClassNames.container, className)} style={style}>
        {label ? <label className={themeClassNames.label} htmlFor={state.id}>{label}</label> : null}
        <button
          className={themeClassNames.mainButton}
          onClick={this.open}
          {...rest}
          id={state.id}
        >
          {mainButtonText}
          <span className={themeClassNames.mainButtonIcon}>{mainButtonIcon}</span>
        </button>
        {state.show ? <div className={itemContainerClass.join(' ')}>{children}</div> : null}
      </div>
    );
  }

  private open = () => {
    if (!this.state.show) {
      this.setState({ show: !this.state.show });
      document.addEventListener('click', this.close);
    }
  }

  private close = () => {
    document.removeEventListener('click', this.close);
    this.setState({ show: false });
  }
}

export const Dropdown = connectTeamsComponent<DropdownProps>(DropdownInternal);
