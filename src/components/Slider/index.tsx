import React, { useEffect } from 'react';

import classnames from '../../utils/classNames';
import { IProps } from './types';

import './index.scss';

const baseClass = 'vant-slider';

const Slider = ({
  range = { min: 0, max: 100 },
  size = { width: 100, height: 5 },
  sliderSize = { width: 20, height: 20 },
  disabled,
  vertical,
  barHeight,
  buttonSize,
  activeColor = '#1989fa',
  inactiveColor = '#e5e5e5',
  step = 1,
  value = range.min,
  setValue
}: IProps) => {
  const slideRange = range.max - range.min;
  const sliderOffset = sliderSize.width / 2;
  const containerProps = {
    className: classnames(`${baseClass}__container`, []),
    id: 'all',
    style: {}
  };

  useEffect(() => {
    init();
  }, [value]);

  const init = () => {
    const wrapper = document.getElementById('wrapper');
    const fill = document.getElementById('fill');
    const slider = document.getElementById('slider');
    move(wrapper, slider, fill);
  };

  const getValue = (e, dom1) => {
    return Math.round(
      ((e.pageX - dom1.offsetLeft) / size.width) * slideRange + range.min
    );
  };

  const move = (dom1, dom2, dom3) => {
    let drag = 0;
    dom1.addEventListener('click', function (e) {
      if (e.target === dom2) {
        return null;
      } else {
        if (e.offsetX > size.width) {
          dom2.style.left = `${size.width}px`;
          dom3.style.width = `${size.width}px`;
        } else if (e.offsetX < 0) {
          dom2.style.left = '0px';
          dom3.style.width = '0px';
        } else {
          dom2.style.left = `${e.offsetX - sliderOffset - 1}px`;
          dom3.style.width = `${e.offsetX - sliderOffset - 1}px`;
        }
      }
      setValue(getValue(e, dom1));
    });
    dom2.addEventListener('mousedown', function () {
      drag = 1;
    });
    document.addEventListener('mouseup', function (e) {
      drag = 0;
      if (e.target === dom1 && e.target === dom3) {
        setValue(getValue(e, dom1));
      }
    });
    document.addEventListener('mousemove', function (e) {
      if (e.offsetX && drag === 1) {
        if (e.pageX > dom1.offsetLeft + size.width) {
          dom2.style.left = `${size.width}px`;
          dom3.style.width = `${size.width}px`;
          setValue(range.max);
        } else if (e.pageX < dom1.offsetLeft) {
          dom2.style.left = '0px';
          dom3.style.width = '0px';
          setValue(range.min);
        } else {
          dom2.style.left = `${e.pageX - dom1.offsetLeft - sliderOffset}px`;
          dom3.style.width = `${e.pageX - dom1.offsetLeft - sliderOffset}px`;
          setValue(getValue(e, dom1));
        }
      }
    });
  };

  // if (size)
  //   Object.assign(popupProps, {
  //     style: {
  //       ...popupProps.style,
  //       width: size[0],
  //       height: size[1]
  //     }
  //   });

  return (
    <div
      id='wrapper'
      style={{
        width: `${size.width}px`,
        height: `${size.height}px`
      }}
    >
      <div
        id='fill'
        style={{
          height: `${size.height}px`
        }}
      />
      <div
        id='slider'
        style={{
          width: `${sliderSize.width}px`,
          height: `${sliderSize.height}px`
        }}
      >
        {value}
      </div>
    </div>
  );
};

export default Slider;
