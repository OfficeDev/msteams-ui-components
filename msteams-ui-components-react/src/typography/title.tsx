import { fontSizes } from 'msteams-ui-styles-core/dist/typestyle-binding/font-sizes';
import { fontWeights } from 'msteams-ui-styles-core/dist/typestyle-binding/font-weights';
import * as React from 'react';
import { connectTeamsComponent, InjectedTeamsProps } from '../index';
import classes from '../utils/classes';

const TitleInternal: React.StatelessComponent<InjectedTeamsProps> = (props) => {
  const { context } = props;
  const sizes = fontSizes(context);
  const weight = fontWeights(context);

  return <div className={classes(sizes.title, weight.bold)}>
    {props.children}
  </div>;
};

export const Title = connectTeamsComponent<{}>(TitleInternal);
