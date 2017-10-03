import * as IconStyles from 'msteams-ui-icons-core';
import * as React from 'react';
import { classes } from 'typestyle';

export enum MSTeamsIconType {
  Plus = 1,
  File = 2,
  Monkey = 3,
}

export enum MSTeamsIconWeight {
  Regular = 1,
  Light = 2,
}

function weightClass(iconWeight?: MSTeamsIconWeight): string {
  if (iconWeight && iconWeight === MSTeamsIconWeight.Light) {
    return IconStyles.light();
  } else {
    return IconStyles.regular();
  }
}

function typeClass(iconType?: MSTeamsIconType): string {
  switch (iconType) {
    case MSTeamsIconType.Plus:
      return IconStyles.plus();
    case MSTeamsIconType.File:
      return IconStyles.file();
    case MSTeamsIconType.Monkey:
      return IconStyles.monkey();
    default:
      return '';
  }
}

export interface MSTeamsIconProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  iconType?: MSTeamsIconType;
  iconWeight?: MSTeamsIconWeight;
}

export const MSTeamsIcon: React.StatelessComponent<MSTeamsIconProps> = (props) => {
  const { iconWeight, iconType, className, ...rest } = props;
  const classNames = classes(className, weightClass(iconWeight), typeClass(iconType));

  return <i className={classNames} {...rest}/>;
};
