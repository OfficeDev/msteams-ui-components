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

const MSTeamsIconInternal: React.StatelessComponent<MSTeamsIconProps> = (props) => {
  const { iconWeight, iconType, className, ...rest } = props;
  const classNames = classes(baseStyle(iconWeight), iconStyle(iconType), className);

  return <i className={classNames} {...rest}>{props.children}</i>;
};

MSTeamsIconInternal.propTypes = {
  iconType: PropTypes.oneOf(values(iconTypes)),
  iconWeight: PropTypes.oneOf(values(iconWeights)),
};

MSTeamsIconInternal.defaultProps = {
  iconWeight: iconWeights.regular,
};

export const MSTeamsIcon = MSTeamsIconInternal;
export const MSTeamsIconType = iconTypes;
export const MSTeamsIconWeight = iconWeights;
