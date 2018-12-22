import { surface } from 'msteams-ui-styles-core/lib/components/surface';
import * as React from 'react';
import { connectTeamsComponent, ITeamsThemeContextProps } from '../teams-context';
import classes from '../utils/classes';

export interface ISurfaceProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

const SurfaceView: React.FunctionComponent<ISurfaceProps & ITeamsThemeContextProps> =
  (props) => {
    const { context, className, ...rest } = props;
    const themeClassName = surface(context);

    return (
      <div
        data-component-type="Surface"
        className={classes(themeClassName, className)} {...rest}>{props.children}</div>
    );
  };

export const Surface = connectTeamsComponent<ISurfaceProps>(SurfaceView);
