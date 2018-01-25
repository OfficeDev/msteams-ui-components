import { baseStyle, iconStyle, iconTypes, iconWeights } from 'msteams-ui-icons-core';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { classes } from 'typestyle';

function values(obj: {[key: string]: string|number}): Array<string|number> {
  const vals = [];
  for (const key in obj) {
    vals.push(obj[key]);
  }
  return vals;
}

export interface MSTeamsIconProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  iconType?: string;
  iconWeight?: number;
}

export interface MSTeamsIconState {
  baseClass: string;
  iconClass: string | null;
}

export class MSTeamsIcon extends React.PureComponent<MSTeamsIconProps, MSTeamsIconState> {
  static propTypes = {
    iconType: PropTypes.oneOf(values(iconTypes)),
    iconWeight: PropTypes.oneOf(values(iconWeights)),
  };

  static defaultProps = {
    iconWeight: iconWeights.Regular,
  };

  render() {
    const { iconWeight, iconType, className, children, ...rest } = this.props;
    const classNames = classes(baseStyle(this.props.iconWeight), iconStyle(this.props.iconType), className);

    return <i aria-hidden={true} className={classNames} {...rest}>{children}</i>;
  }
}

export const MSTeamsIconType = iconTypes;
export const MSTeamsIconWeight = iconWeights;
