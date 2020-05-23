import React from 'react';

import { renderLoadingIcon, getContrastTextColor } from './helper';
import classnames from '../../utils/classNames';

import { Props } from './types';

import './index.scss';

const baseClass = 'vant-button';

// @todo: add hairline props
// @todo: accept color in rgb

export default function Button({
  text,
  children,
  type = 'default',
  plain,
  disabled,
  loading,
  loadingType,
  loadingText,
  round,
  square,
  color
}: Props) {
  return (
    <button
      className={classnames(baseClass, [
        { type },
        { plain },
        { disabled },
        { loading },
        { round },
        { square }
      ])}
      style={{
        color: color ? getContrastTextColor(color) : 'ffffff',
        backgroundColor: `#${color}`,
        borderColor: `#${color}`
      }}
      disabled={disabled}
    >
      {loading
        ? renderLoadingIcon({
            className: loadingType
              ? `${baseClass}__${loadingType}`
              : `${baseClass}__circular`,
            loadingType,
            loadingText
          })
        : text || children}
    </button>
  );
}
