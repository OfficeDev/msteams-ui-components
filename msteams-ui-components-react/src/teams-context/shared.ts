import { IContext } from 'msteams-ui-styles-core';
import * as PropTypes from 'prop-types';

export const ContextProps = {
  subscribe: PropTypes.func.isRequired,
};

export interface IThemeObserver {
  (context: IContext): void;
}

export interface IComponentContext {
  subscribe: (observer: IThemeObserver) => IUnsubscribe;
}

export interface IUnsubscribe {
  (): void;
}
