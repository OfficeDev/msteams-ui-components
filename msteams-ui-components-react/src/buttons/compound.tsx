import { compoundButton } from 'msteams-ui-styles-core/lib/components/compound-button';
import * as React from 'react';
import { InjectedTeamsProps } from '../index';
import { connectTeamsComponent } from '../teams-context';
import classes from '../utils/classes';

export interface CompoundButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  disabled?: boolean;
  icon?: (() => React.ReactNode);
  primaryText?: string;
  secondaryText?: string;
}

const CompoundButtonView: React.StatelessComponent<CompoundButtonProps & InjectedTeamsProps> =
  (props: CompoundButtonProps & InjectedTeamsProps) => {
    const { context, icon, primaryText, secondaryText, className, ...rest } = props;

    const themeClassNames = compoundButton(context);

    return <button className={classes(themeClassNames.container, className)} {...rest}>
      { props.icon ?
      <div className={themeClassNames.icon}>
        {props.icon()}
      </div> : null }
      <div>
        <div className={themeClassNames.primaryText}>
          {props.primaryText}
        </div>
        <div className={themeClassNames.secondaryText}>
          {props.secondaryText}
        </div>
      </div>
      {props.children}
    </button>;
  };

export const CompoundButton = connectTeamsComponent(CompoundButtonView);
