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
  isActive,
  setActive,
  click,
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
      setActive(false);
    }
  };

  if (size)
    Object.assign(popupProps, {
      style: {
        ...popupProps.style,
        width: size[0],
        height: size[1]
      }
    });

  if (click) {
    Object.assign(contentProps, {
      onClick: click
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
              setActive(false);
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
                margin: '10px'
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
