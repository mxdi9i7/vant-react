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
  const [count, setCount] = useState(0);
  useEffect(() => {
    const handleSlider = () => {
      const next = length && (current + 1) % length;
      const activeIndex = setTimeout(() => setCurrent(next), 3000);
      return () => clearTimeout(activeIndex);
    };
    handleSlider();
  }, [current]);

  useEffect(() => {
    const move = () => {
      const currentNode = document.getElementsByTagName('img')[current];
      let prevNode = document.getElementsByTagName('img')[
        (current - 1) % length
      ];

      if (current === 0 && count) {
        prevNode = document.getElementsByTagName('img')[
          ((current - 1) % length) + length
        ];
      }
      if (current === 3) {
        setCount(1);
      }
      if (currentNode && prevNode) {
        const offset = -current * currentNode.clientWidth;
        console.log(offset);
        prevNode.style.transform = `translateX(${offset}px)`;
        currentNode.style.transform = `translateX(${offset}px)`;
        currentNode.style.transition = `0.2s`;
        prevNode.style.transition = `0.2s`;
        if (count && current === 0) {
          const nodes = document.getElementsByTagName('img');
          for (let i = 0; i < nodes.length; i++) {
            nodes[i].style.transform = `translateX(0px)`;
            nodes[i].style.transition = `0.1s`;
          }
        }
      }
    };
    move();
  }, [current]);

  // to-add consider the case when move to end and start moving.... needs to fix calculation.

  return (
    <div {...baseProps}>
      <div {...wrapperProps}>
        <div {...imageProps}>{children?.map((child) => child)}</div>
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
