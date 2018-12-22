import { Colors, getContext, IContext, IThemeConfig, ThemeStyle } from 'msteams-ui-styles-core';
import * as React from 'react';

const defaultConfig: IThemeConfig = {
  baseFontSize: 10,
  style: ThemeStyle.Light,
  colors: Colors,
};
const defaultContext = getContext(defaultConfig);

export interface ITeamsThemeContextProps {
  readonly context: IContext;
}
export const TeamsThemeContext: React.Context<IContext> = React.createContext(defaultContext);

export {
  getContext,
  IContext,
  IThemeConfig,
  ThemeStyle,
  Colors
};
