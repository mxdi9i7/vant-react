import React from 'react';

import { renderLoadingIcon } from './helper';
import classnames from '../../utils/classNames';

import { Props } from './types';

import './index.scss';

const baseClass = 'vant-button';

export default function Button({
  text,
  children,
  type = 'default',
  plain,
  disabled,
  loading,
  loadingType,
  loadingText
}: Props) {
  return (
    <button
      className={classnames(baseClass, [
        { type },
        { plain },
        { disabled },
        { loading }
      ])}
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
