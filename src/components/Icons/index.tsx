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
  tag?: 'a';
  url?: string;
  replace: boolean;
}

const baseClass = 'vant-icon';

export default function Icon({
  name,
  dot,
  badge,
  color,
  size,
  classPrefix = baseClass,
  tag,
  url,
  replace
}: IProps) {
  const CustomTag = tag || 'a';
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
  if (url && tag === 'a') {
    Object.assign(iconProps, {
      href: url
    });
    if (replace) {
      Object.assign(iconProps, {
        target: '_self'
      });
    } else {
      Object.assign(iconProps, {
        target: '_blank'
      });
    }
  }

  return (
    <CustomTag {...containerProps}>
      <i {...iconProps} />
      {dot && !badge && <span className={`${classPrefix}--dot`} />}
      {badge && <span className={`${classPrefix}--badge`}>{badge}</span>}
    </CustomTag>
  );
}
