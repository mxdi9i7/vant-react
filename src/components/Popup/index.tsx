import React, { useRef, useEffect } from 'react';

import classnames from '../../utils/classNames';
import Icon from '../Icons';
import { IProps } from './types';

import './index.scss';

const baseClass = 'vant-popup';

const Popup = ({
  closeable,
  text,
  content,
  borderRadius,
  type = 'center',
  color,
  size,
  padding,
  isActive,
  onSetActive,
  onClick,
  closeIcon = { name: 'cross', size: '20px' },
  closeIconPosition = { top: '10px', right: '10px' }
}: IProps) => {
  const popupRef = useRef(null) || { current: {} };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  const containerProps = {
    className: classnames(`${baseClass}__container`, [{ isActive }, { type }]),
    style: {}
  };

  const popupProps = {
    className: classnames(baseClass, [{ closeable }, { isActive }, { type }]),
    style: {}
  };

  const contentProps = {
    className: classnames(`${baseClass}__content`, [{ isActive }]),
    style: {}
  };

  const handleClickOutside = (e) => {
    if (popupRef.current && !(popupRef as any).current.contains(e.target)) {
      onSetActive(false);
    }
  };

  if (size)
    Object.assign(popupProps, {
      style: {
        ...popupProps.style,
        width: size.width && size.width,
        height: size.height && size.height
      }
    });

  if (size)
    Object.assign(contentProps, {
      style: {
        ...contentProps.style,
        width: 'inherit',
        height: 'inherit'
      }
    });

  if (padding)
    Object.assign(contentProps, {
      style: {
        ...contentProps.style,
        padding
      }
    });

  if (onClick) {
    Object.assign(contentProps, {
      onClick
    });
  }

  if (color)
    Object.assign(popupProps, {
      style: {
        ...popupProps.style,
        backgroundColor: color,
        borderColor: color
      }
    });

  const isInclude: Function = (data: string) => {
    return popupProps.className.includes(data);
  };

  if (borderRadius)
    Object.assign(popupProps, {
      style: {
        ...popupProps.style,
        borderTopLeftRadius:
          (isInclude('right') || isInclude('center') || isInclude('bottom')) &&
          borderRadius,
        borderTopRightRadius:
          (isInclude('left') || isInclude('center') || isInclude('bottom')) &&
          borderRadius,
        borderBottomLeftRadius:
          (isInclude('right') || isInclude('center') || isInclude('top')) &&
          borderRadius,
        borderBottomRightRadius:
          (isInclude('left') || isInclude('center') || isInclude('top')) &&
          borderRadius
      }
    });

  return (
    <div {...containerProps}>
      <div ref={popupRef} {...popupProps}>
        {closeable && (
          <span
            className='closeIcon'
            onClick={() => {
              onSetActive(false);
            }}
            style={closeIconPosition}
          >
            <Icon name={closeIcon.name} size={closeIcon.size} />
          </span>
        )}
        <div {...contentProps}>
          {text && (
            <h3
              style={{
                color: text.color,
                fontSize: text.fontSize,
                textAlign: text.textAlign,
                margin: '15px'
              }}
            >
              {text.text}
            </h3>
          )}
          {content && content}
        </div>
      </div>
    </div>
  );
};

export default Popup;
