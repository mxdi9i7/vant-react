import React, { useState, useEffect, Children } from 'react';

import { Iprops } from './types';
import classnames from '../../utils/classNames';

import './index.scss';

const baseClass = 'vant-swipe';
// const iconClass = 'vant-swipe-icon'
// const indicatorClass = 'vant-swipe-indicator';

export default function Swipe({ children }: Iprops) {
  const baseProps = {
    className: classnames(`${baseClass}`, []),
    style: {}
  };
  const wrapperProps = {
    className: classnames(`${baseClass}-wrapper`, []),
    style: {}
  };
  const imageProps = {
    className: classnames(`${baseClass}-image`, []),
    style: {}
  };
  const indicatorProps = {
    className: classnames(`${baseClass}-indicator`, []),
    style: {}
  };
  const dotProps = {
    className: classnames(`${baseClass}-dot`, []),
    style: {}
  };
  const [current, setCurrent] = useState(0);
  const length = Children.count(children);
  useEffect(() => {
    const handleSlider = () => {
      const next = length && (current + 1) % length;
      const activeIndex = setTimeout(() => setCurrent(next), 3000);
      return () => clearTimeout(activeIndex);
    };
    handleSlider();
  }, [current]);
  return (
    <div {...baseProps}>
      <div {...wrapperProps}>
        {children?.map((child, index) => {
          if (index === current) {
            return (
              <div
                key={index}
                {...imageProps}
                style={{
                  width: '100%',
                  height: '100%',
                  textAlign: 'center',
                  backgroundColor: '#1EA7FD',
                  display: 'block',
                  margin: 'auto'
                }}
              >
                {child}
              </div>
            );
          } else {
            return null;
          }
        })}
        <div {...indicatorProps}>
          {[...Array(length)].map((_, index) => (
            <span
              key={index}
              {...dotProps}
              style={{ opacity: index === current ? '1' : '0.1' }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
