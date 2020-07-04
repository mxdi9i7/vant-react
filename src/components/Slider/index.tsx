import React, { useEffect } from 'react';

import classnames from '../../utils/classNames';
import { IProps } from './types';

import './index.scss';

const baseClass = 'vant-slider';

const Slider = ({
  range = { min: 0, max: 100 },
  size = { width: 200, height: 5 },
  sliderSize = { width: 20, height: 20 },
  disabled,
  vertical,
  activeColor = '#4169e1',
  inactiveColor = '#d3d3d3',
  step = 1,
  value = range.min,
  setValue
}: IProps) => {
  console.log(value);
  const slideRange = range.max - range.min;
  const sliderOffset = sliderSize.width / 2;
  const initialPosition =
    (Math.abs((value as any) - range.min) / slideRange) * size.width;
  console.log(initialPosition);
  const wrapperProps = {
    className: classnames(`${baseClass}__wrapper`, [{ disabled }]),
    style: {}
  };
  const fillProps = {
    className: classnames(`${baseClass}__fill`, [{ disabled }]),
    style: {}
  };
  const sliderProps = {
    className: classnames(`${baseClass}__slider`, [{ disabled }]),
    style: {}
  };

  useEffect(() => {
    !disabled && handleSlide();
  }, [value]);

  const handleSlide = () => {
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
          dom2.style.left = `${size.width - sliderOffset}px`;
          dom3.style.width = `${size.width - sliderOffset}px`;
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

  if (disabled) {
    Object.assign(wrapperProps, {
      disabled
    });
    Object.assign(fillProps, {
      disabled
    });
    Object.assign(sliderProps, {
      disabled
    });
  }

  return (
    <div
      id='wrapper'
      {...wrapperProps}
      style={{
        width: `${size.width}px`,
        height: `${size.height}px`,
        backgroundColor: inactiveColor
      }}
    >
      <div
        id='fill'
        {...fillProps}
        style={{
          width: `${initialPosition}px`,
          height: `${size.height}px`,
          backgroundColor: activeColor
        }}
      >
        <div
          id='slider'
          {...sliderProps}
          style={{
            width: `${sliderSize.width}px`,
            height: `${sliderSize.height}px`,
            left: `${initialPosition}px`
          }}
        >
          {value}
        </div>
      </div>
    </div>
  );
};

export default Slider;
