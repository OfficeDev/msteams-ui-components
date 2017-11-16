import 'mousetrap';
import { tab, TabStyles } from 'msteams-ui-styles-core/lib/components/tab';
import * as React from 'react';
import { connectTeamsComponent, InjectedTeamsProps } from '../index';

export interface TabProps {
  tabs: TabItem[];
  selectedTabId: any;
}

export interface TabItem {
  text: string;
  onSelect: () => void;
  id: any;
}

class TabInternal extends React.Component<TabProps & InjectedTeamsProps> {
  private tab: HTMLDivElement;
  private mousetrap: MousetrapInstance;
  private itemButtons: HTMLButtonElement[];

  componentDidMount() {
    this.mousetrap = new Mousetrap(this.tab);
    this.handleKeyboard();
  }

  componentWillUnmount() {
    this.mousetrap.reset();
  }

  render() {
    this.itemButtons = [];
    const { context, tabs } = this.props;
    const styles = tab(context);

    const renderTab = this.renderTabWithStyle(styles);

    return (
      <div
        data-component-type="Tab"
        className={styles.container}
        ref={(ref) => this.tab = ref!}
      >
        {tabs.map(renderTab)}
      </div>
    );
  }

  private renderTabWithStyle = (styles: TabStyles) => {
    const renderTab = (item: TabItem) => {
      const classes = [styles.normal];

      if (this.props.selectedTabId === item.id) {
        classes.push(styles.active);
      }

      return (
        <div
          className={styles.itemContainer}
          key={item.id}
        >
          <button
            data-component-type="Tab"
            onClick={item.onSelect}
            className={classes.join(' ')}
            ref={(ref) => {
              if (ref) {
                this.itemButtons.push(ref);
              }
            }}
          >
            {item.text}
          </button>
        </div>
      );
    };

    return renderTab;
  }

  private handleKeyboard = () => {
    this.mousetrap.bind('left', this.onLeftKey);
    this.mousetrap.bind('right', this.onRightKey);
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
