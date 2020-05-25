import React from 'react';

import './index.scss';
import classnames from '../../utils/classNames';

interface IProps {
  name: string;
  dot?: boolean;
  badge?: boolean;
  color?: string;
  size?: string;
  classPrefix?: string;
  tag?: string;
}

const baseClass = 'vant-icon';

// TODO Accept custom tag element

export default function Icon({
  name,
  dot,
  badge,
  color,
  size,
  classPrefix = baseClass
}: IProps) {
  const containerProps = {
    className: classnames(`${classPrefix}__container`, [
      {
        dot: dot || badge
      }
    ])
  };
  const iconProps = {
    className: `${classPrefix} ${classPrefix}-${name}`,
    style: {
      fontSize: '28px'
    }
  };

  if (color)
    Object.assign(iconProps, {
      style: {
        ...iconProps.style,
        color
      }
    });

  if (size) {
    Object.assign(iconProps, {
      style: {
        ...iconProps.style,
        fontSize: size
      }
    });
  }

  return (
    <div {...containerProps}>
      <i {...iconProps} />
      {dot && !badge && <span className={`${classPrefix}--dot`} />}
      {badge && <span className={`${classPrefix}--badge`}>{badge}</span>}
    </div>
  );
}
