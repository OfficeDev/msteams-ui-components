import 'mousetrap';
import { tab, TabStyles } from 'msteams-ui-styles-core/lib/components/tab';
import * as React from 'react';
import { connectTeamsComponent, IInjectedTeamsProps } from '../index';

export interface ITabProps {
  tabs: ITabItem[];
  selectedTabId: any;
  autoFocus?: boolean;
}

export interface ITabItem {
  text: string;
  onSelect: () => void;
  id: any;
}

class TabInternal extends React.Component<ITabProps & IInjectedTeamsProps> {
  private tab: HTMLDivElement | null = null;
  private mousetrap: MousetrapInstance | null = null;
  private itemButtons: HTMLButtonElement[] = [];

  componentDidMount() {
    if (this.tab) {
      this.mousetrap = new Mousetrap(this.tab);
    }
    this.handleKeyboard();
  }

  componentWillUnmount() {
    if (this.mousetrap) {
      this.mousetrap.reset();
    }
  }

  render() {
    this.itemButtons = [];
    const { context, tabs } = this.props;
    const styles = tab(context);

    const renderTab = this.renderTabWithStyle(styles);

    return (
      <div
        className={styles.container}
        ref={(ref) => this.tab = ref!}
        role="tablist">
        {tabs.map(renderTab)}
      </div>
    );
  }

  private renderTabWithStyle = (styles: TabStyles) => {
    const renderTab = (item: ITabItem) => {
      const selected = this.props.selectedTabId === item.id;

      const classes = [styles.normal];
      if (selected) {
        classes.push(styles.active);
      }

      return (
        <button
          tabIndex={selected ? 0 : -1}
          autoFocus={this.props.autoFocus && selected}
          key={item.id}
          onMouseDown={(e) => e.preventDefault()}
          onClick={item.onSelect}
          className={classes.join(' ')}
          ref={(ref) => {
            if (ref) {
              this.itemButtons.push(ref);
            }
          }}
          role="tab">
          {item.text}
        </button>
      );
    };

    return renderTab;
  }

  private handleKeyboard = () => {
    if (this.mousetrap) {
      this.mousetrap.bind('left', this.onLeftKey);
      this.mousetrap.bind('right', this.onRightKey);
    }
  }

  private onRightKey = (e: ExtendedKeyboardEvent) => {
    e.preventDefault();
    const current = this.currentIndex();
    const next = current + 1 > this.itemButtons.length - 1 ? this.itemButtons.length - 1 : current + 1;
    this.itemButtons[next].focus();
  }

  private onLeftKey = (e: ExtendedKeyboardEvent) => {
    e.preventDefault();
    const current = this.currentIndex();
    const next = current - 1 < 0 ? 0 : current - 1;
    this.itemButtons[next].focus();
  }

  private currentIndex = () => this.itemButtons.findIndex((elm) => elm === document.activeElement);
}

export const Tab = connectTeamsComponent(TabInternal);
