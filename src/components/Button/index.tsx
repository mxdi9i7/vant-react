import React from 'react';

import { renderLoadingIcon, getContrastTextColor, colorType } from './helper';
import classnames from '../../utils/classNames';

import { Props } from './types';
import Icon from '../Icons';

import './index.scss';

const baseClass = 'vant-button';

// TODO: add hairline props
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
  fontColor,
  tag,
  nativeType,
  block,
  url,
  replace,
  click,
  touchstart,
  icon,
  hairline
}: Props) {
  const CustomTag = tag || 'button';
  const props = {
    className: classnames(baseClass, [
      { type },
      { plain: plain || hairline },
      { disabled },
      { loading },
      { round },
      { square },
      { block },
      { hairline }
    ]),
    style: {}
  };

  if (nativeType) Object.assign(props, { nativeType });

  if (loadingSize)
    Object.assign(props, { style: { ...props.style, height: loadingSize } });

  if (fontColor)
    Object.assign(props, { style: { ...props.style, color: fontColor } });

  if (color) {
    if (color.indexOf('linear-gradient') === -1) {
      Object.assign(props, {
        style: {
          ...props.style,
          color: fontColor || getContrastTextColor(color),
          backgroundColor: colorType(color),
          borderColor: colorType(color)
        }
      });
    } else {
      Object.assign(props, {
        style: {
          ...props.style,
          color: fontColor || getContrastTextColor(color),
          background: color
        }
      });
    }
  }

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

  if (click && loading) {
    Object.assign(props, {
      onClick: () => {}
    });
  }

  if (touchstart) {
    Object.assign(props, {
      onTouchStart: touchstart
    });
  }

  if (touchstart && loading) {
    Object.assign(props, {
      onTouchStart: () => {}
    });
  }

  return (
    <CustomTag {...props}>
      {<Icon name={icon} /> && <img src={icon} alt='button icon' />}
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
