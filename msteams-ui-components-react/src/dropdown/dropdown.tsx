import 'mousetrap';
import { MSTeamsIcon, MSTeamsIconType, MSTeamsIconWeight } from 'msteams-ui-icons-react';
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
  items: DropdownItem[];
}

export interface DropdownItem {
  text?: string;
  render?: () => string | JSX.Element;
  onClick: () => void;
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

  private dropdown: HTMLDivElement;
  private mousetrap: MousetrapInstance;
  private mainButton: HTMLButtonElement;
  private itemButtons: HTMLButtonElement[];

  componentDidMount() {
    this.mousetrap = new Mousetrap(this.dropdown);
    this.trapKeyboard();
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.close);
    this.mousetrap.reset();
  }

  render() {
    const state = this.state;
    this.itemButtons = [];
    const {
      context,
      className,
      children,
      menuRightAlign,
      label,
      mainButtonText,
      style,
      items,
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

    const renderItem = this.renderItemWithClass(themeClassNames.item);

    return (
      <div
        className={classes(themeClassNames.container, className)}
        style={style}
        ref={(ref) => this.dropdown = ref!}
      >
        {label ? <label className={themeClassNames.label} htmlFor={state.id}>{label}</label> : null}
        <button
          className={themeClassNames.mainButton.container}
          onClick={this.open}
          {...rest}
          id={state.id}
          ref={(ref) => this.mainButton = ref!}
          role="combobox"
        >
          {mainButtonText ?
            <span className={themeClassNames.mainButton.text}>
              {mainButtonText}
            </span> : null}
          <MSTeamsIcon
            className={themeClassNames.mainButton.icon}
            iconType={MSTeamsIconType.ChevronDown}
            iconWeight={MSTeamsIconWeight.Light} />
        </button>
        {state.show ? <div className={itemContainerClass.join(' ')} role="listbox">
          {items.map(renderItem)}
        </div> : null}
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

  private renderItemWithClass = (className: string) => {
    const renderItem = (item: DropdownItem, index: number) => {
      if ((item.render && item.text) || (!item.render && !item.text)) {
        throw new Error('DropdownItem needs to have at one and only one of text and render property.');
      }

      return <button
        tabIndex={-1}
        key={index}
        className={className}
        ref={(ref) => this.itemButtons.push(ref!)}
        onClick={item.onClick}
        role="option"
      >
        {item.text ? item.text : null}
        {item.render ? item.render() : null}
      </button>;
    };

    return renderItem;
  }

  private trapKeyboard = () => {
    this.mousetrap.bind('tab', this.onTabKey);
    this.mousetrap.bind('esc', this.onEscKey);
    this.mousetrap.bind('up', this.onUpKey);
    this.mousetrap.bind('down', this.onDownKey);
  }

  private onTabKey = (e: ExtendedKeyboardEvent) => {
    if (this.state.show) {
      e.preventDefault();
      const current = this.currentIndex();
      const next = (current + 1) % this.itemButtons.length;
      this.itemButtons[next].focus();
    }
  }

  private onUpKey = (e: ExtendedKeyboardEvent) => {
    e.preventDefault();
    if (!this.state.show) {
      this.setState({
        show: true,
      }, this.focusPrevious);
    } else {
      this.focusPrevious();
    }
  }

  private onDownKey = (e: ExtendedKeyboardEvent) => {
    e.preventDefault();
    if (!this.state.show) {
      this.setState({
        show: true,
      }, this.focusNext);
    } else {
      this.focusNext();
    }
  }

  private onEscKey = (e: ExtendedKeyboardEvent) => {
    if (this.state.show) {
      e.preventDefault();
      this.mainButton.focus();
      this.close();
    }
  }

  private currentIndex = () => this.itemButtons.findIndex((elm) => elm === document.activeElement);
  private focusNext = () => {
    const current = this.currentIndex();
    const next = current + 1 > this.itemButtons.length - 1 ? this.itemButtons.length - 1 : current + 1;
    this.itemButtons[next].focus();
  }
  private focusPrevious = () => {
    const current = this.currentIndex();
    const next = current - 1 < 0 ? 0 : current - 1;
    this.itemButtons[next].focus();
  }
}

export const Dropdown = connectTeamsComponent<DropdownProps>(DropdownInternal);
