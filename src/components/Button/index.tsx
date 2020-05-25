import React from 'react';

import { renderLoadingIcon, getContrastTextColor, colorType } from './helper';
import classnames from '../../utils/classNames';

import { Props } from './types';

import './index.scss';

const baseClass = 'vant-button';

// TODO: enable icon buttons, need to have icon library done first
// TODO: accept linear gradient

export default function Button({
  text,
  children,
  type = 'default',
  plain,
  disabled,
  loading,
  loadingType,
  loadingText,
  loadingSize,
  round,
  square,
  color,
  tag,
  nativeType,
  block,
  url,
  replace,
  click,
  touchstart,
  icon
}: Props) {
  const CustomTag = tag || 'button';
  const props = {
    className: classnames(baseClass, [
      { type },
      { plain },
      { disabled },
      { loading },
      { round },
      { square },
      { block }
    ]),
    style: {}
  };

  if (nativeType) Object.assign(props, { nativeType });

  if (loadingSize)
    Object.assign(props, { style: { ...props.style, height: loadingSize } });

  if (color)
    Object.assign(props, {
      style: {
        ...props.style,
        color: color ? getContrastTextColor(color) : 'ffffff',
        backgroundColor: colorType(color),
        borderColor: colorType(color)
      }
    });

  if (disabled)
    Object.assign(props, {
      disabled
    });

  if (url && tag === 'a') {
    Object.assign(props, {
      href: url
    });
    if (replace) {
      Object.assign(props, {
        target: '_self'
      });
    } else {
      Object.assign(props, {
        target: '_blank'
      });
    }
  }

  if (click) {
    Object.assign(props, {
      onClick: click
    });
  }

  if (touchstart) {
    Object.assign(props, {
      onTouchStart: touchstart
    });
  }

  return (
    <CustomTag {...props}>
      {icon && <img src={icon} alt='button icon' />}
      {loading
        ? renderLoadingIcon({
            className: loadingType
              ? `${baseClass}__${loadingType}`
              : `${baseClass}__circular`,
            loadingType,
            loadingText,
            loadingSize
          })
        : text || children}
    </CustomTag>
  );
}
