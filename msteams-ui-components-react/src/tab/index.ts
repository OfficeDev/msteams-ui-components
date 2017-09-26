import * as PropTypes from 'prop-types';

export const TabContextType = {
  isSelected: PropTypes.func.isRequired,
};

export interface TabContext {
  isSelected: (myTabId: string) => boolean;
}

export * from './tab';
export * from './tab-group';
