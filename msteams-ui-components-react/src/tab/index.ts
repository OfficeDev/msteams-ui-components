import * as PropTypes from 'prop-types';

export const TabContextType = {
  isSelected: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export interface TabContext {
  isSelected: (myTabId: string) => boolean;
  onSelect: (myTabId: string) => void;
}

export * from './tab';
export * from './tab-group';
