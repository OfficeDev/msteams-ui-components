import 'mousetrap';
import { MSTeamsIcon, MSTeamsIconType, MSTeamsIconWeight } from 'msteams-ui-icons-react';
import { dropdown } from 'msteams-ui-styles-core/lib/components/dropdown';
import * as React from 'react';
import { connectTeamsComponent, ITeamsThemeContextProps } from '../teams-context';
import classes from '../utils/classes';
import uniqueId from '../utils/uniqueId';
import { DropdownItem } from './item';

export interface IDropdownProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  menuRightAlign?: boolean;
  mainButtonText?: string;
  label?: string;
  items: IDropdownItemProps[];
  selected?: string;
}

export interface IDropdownItemProps {
  text?: string;
  render?: () => string | JSX.Element;
  onClick: () => void;
}

interface IDropdownState {
  show: boolean;
  id: string;
  expandableRegionId: string;
}

class DropdownInternal extends React.Component<IDropdownProps & ITeamsThemeContextProps, IDropdownState> {
  state = {
    show: false,
    id: uniqueId('ts-dd-'),
    expandableRegionId: uniqueId('ts-dd-e-'),
  };

  private mounted: boolean = false;
  private dropdown: HTMLDivElement | null = null;
  private mousetrap: MousetrapInstance | null = null;
  private mainButton: HTMLButtonElement | null = null;
  private itemButtons: DropdownItem[] = [];

  componentDidMount() {
    if (this.dropdown) {
      this.mousetrap = new Mousetrap(this.dropdown);
    }
    this.mounted = true;
    this.trapKeyboard();
  }

  componentWillUnmount() {
    this.untrapKeyboard();
    this.close();
    this.mounted = false;
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
      selected,
      // tslint:disable-next-line:trailing-comma
      ...rest
    } = this.props;
    const themeClassNames = dropdown(context);

    const itemContainerClass = [themeClassNames.itemContainer];
    if (menuRightAlign) {
      itemContainerClass.push(themeClassNames.itemContainerRight);
    }
    if (this.state.show) {
      itemContainerClass.push(themeClassNames.showItems);
    }

    return (
      <div
        ref={(ref) => this.dropdown = ref!}
        className={classes(themeClassNames.container, className)}
        style={style}
      >
        {label ? <label className={themeClassNames.label} htmlFor={state.id}>{label}</label> : null}
        <button
          ref={(ref) => this.mainButton = ref!}
          role="combobox"
          onMouseDown={(e) => e.preventDefault()}
          aria-controls={this.state.expandableRegionId}
          aria-expanded={this.state.show}
          className={themeClassNames.mainButton.container}
          onClick={this.open}
          {...rest}
          id={state.id}
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
        <div
          id={this.state.expandableRegionId}
          role="listbox"
          aria-hidden={!this.state.show}
          style={{ display: this.state.show ? undefined : 'none' }}
          className={itemContainerClass.join(' ')}>
          {items.map((item, idx) => (
            <DropdownItem
              key={idx}
              role="option"
              context={context}
              tabIndex={-1}
              text={item.text}
              render={item.render}
              onClick={item.onClick}
              ref={(ref: any) => ref && this.itemButtons.push(ref)}>
              {item.text}
            </DropdownItem>
          ))}
        </div>
      </div>
    );
  }

  private open = () => {
    if (this.mounted) {
      this.setState({ show: true }, () => {
        if (!this.props.selected) {
          return
        }
        const selected = this.itemButtons.findIndex((elm) => elm.text() === this.props.selected);
        if (selected >= 0) {
          return this.itemButtons[selected].focus();
        }
      });
      document.addEventListener('click', this.close);
    }
  }

  private close = () => {
    if (this.mounted) {
      document.removeEventListener('click', this.close);
      this.setState({ show: false });
    }
  }

  private trapKeyboard = () => {
    if (this.mousetrap) {
      this.mousetrap.bind('shift+tab', this.onTabUpKey);
      this.mousetrap.bind('tab', this.onTabDownKey);
      this.mousetrap.bind('esc', this.onEscKey);
      this.mousetrap.bind('up', this.onUpKey);
      this.mousetrap.bind('down', this.onDownKey);
    }
  }

  private untrapKeyboard = () => {
    if (this.mousetrap) {
      this.mousetrap.reset();
    }
  }

  private onUpKey = (e: ExtendedKeyboardEvent) => {
    e.preventDefault();
    if (!this.state.show) {
      this.setState({ show: true }, this.focusPrevious);
    } else {
      this.focusPrevious();
    }
  }

  private onDownKey = (e: ExtendedKeyboardEvent) => {
    e.preventDefault();
    if (!this.state.show) {
      this.setState({ show: true }, this.focusNext);
    } else {
      this.focusNext();
    }
  }

  private onTabUpKey = (e: ExtendedKeyboardEvent) => {
    this.onEscKey(e);
  }

  private onTabDownKey = (e: ExtendedKeyboardEvent) => {
    this.onEscKey(e);
  }

  private onEscKey = (e: ExtendedKeyboardEvent) => {
    if (this.state.show) {
      e.preventDefault();
      if (this.mainButton) {
        this.mainButton.focus();
      }
      this.close();
    }
  }

  private currentIndex = () => this.itemButtons.findIndex((elm) => elm.hasFocus());

  private focusNext = () => {
    const current = this.currentIndex();
    const next = current + 1 > this.itemButtons.length - 1 ? 0 : current + 1;
    this.itemButtons[next].focus();
  }
  private focusPrevious = () => {
    const current = this.currentIndex();
    const next = current - 1 < 0 ? this.itemButtons.length - 1 : current - 1;
    this.itemButtons[next].focus();
  }
}

export const Dropdown = connectTeamsComponent<IDropdownProps>(DropdownInternal);
