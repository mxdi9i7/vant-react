import React, { useRef, useState, useEffect } from 'react';

import classnames from '../../utils/classNames';
import Icon from '../Icons';

import './index.scss';

export interface IProps {
  isActive: boolean;
  borderRadius?: string;
  text?: string;
  position?: 'center' | 'top' | 'bottom' | 'left' | 'right';
  color?: string;
  children?: string;
  closeable?: boolean;
  tag?: 'i' | 'span';
  setActive: Function;
  click?: Function;
  touchstart?: Function;
}

const baseClass = 'vant-popup';

const Popup = ({
  closeable,
  text,
  borderRadius,
  position = 'center',
  color,
  isActive,
  setActive
}: IProps) => {
  const popupRef = useRef(null) || { current: {} };
  const props = {
    className: classnames(baseClass, [
      { closeable },
      { isActive },
      { position }
    ]),
    style: {}
  };
  const containerProps = {
    className: classnames(`${baseClass}__container`, [
      { isActive },
      { position }
    ]),
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
    Object.assign(props, {
      style: {
        ...props.style,
        backgroundColor: color,
        borderColor: color
      }
    });

  return (
    <div {...containerProps}>
      <div ref={popupRef} {...props}>
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
      </div>
    </div>
  );
};

export default Popup;
