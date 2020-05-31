import React, { useRef, useState, useEffect } from 'react';

import classnames from '../../utils/classNames';
import Icon from '../Icons';

import './index.scss';

export interface IProps {
  borderRadius?: string;
  text?: string;
  direction?: string;
  color?: string;
  children?: string;

  closeable?: boolean;
  tag?: 'i' | 'span';
  click?: Function;
  touchstart?: Function;
}

const baseClass = 'vant-popup';

const Popup = ({ closeable, text, borderRadius, direction, color }: IProps) => {
  const popupRef = useRef(null) || { current: {} };
  const props = {
    className: classnames(baseClass, [{ closeable }]),
    style: {}
  };
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleClickOutside = (e) => {
    if (popupRef.current && !(popupRef as any).current.contains(e.target)) {
      setPopupOpen(false);
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
    <div className='popup-container'>
      {closeable && (
        <span
          onClick={() => {
            if (popupRef !== null) {
              const current = popupRef.current;
              if (current) {
                const style = (current as any).style;
                style.display = 'none';
              }
            }
          }}
        >
          <Icon size='10px' name='cross' />
        </span>
      )}
      <div ref={popupRef} {...props}>
        <h1>its popup</h1>
      </div>
    </div>
  );
};

export default Popup;
