import React, { useRef, useEffect } from 'react';

import classnames from '../../utils/classNames';
import Icon from '../Icons';
import { IProps } from './types';

import './index.scss';

const baseClass = 'vant-popup';

const Popup = ({
  closeable,
  text,
  Content,
  borderRadius,
  type = 'center',
  color,
  isActive,
  setActive
}: IProps) => {
  const popupRef = useRef(null) || { current: {} };
  const popupProps = {
    className: classnames(baseClass, [{ closeable }, { isActive }, { type }]),
    style: {}
  };
  const containerProps = {
    className: classnames(`${baseClass}__container`, [{ isActive }, { type }]),
    style: {}
  };

  const handleClickOutside = (e) => {
    if (popupRef.current && !(popupRef as any).current.contains(e.target)) {
      setActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

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
          (isInclude('right') || isInclude('center')) && borderRadius,
        borderTopRightRadius:
          (isInclude('left') || isInclude('center')) && borderRadius,
        borderBottomLeftRadius:
          (isInclude('right') || isInclude('center')) && borderRadius,
        borderBottomRightRadius:
          (isInclude('left') || isInclude('center')) && borderRadius
      }
    });

  return (
    <div {...containerProps}>
      <div ref={popupRef} {...popupProps}>
        {closeable && (
          <span
            onClick={() => {
              setActive(false);
            }}
          >
            <Icon size='20px' name='cross' />
          </span>
        )}
        <h2>{text && text}</h2>
        {Content && <Content />}
      </div>
    </div>
  );
};

export default Popup;
