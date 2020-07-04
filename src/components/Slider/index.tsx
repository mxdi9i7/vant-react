import React, { useEffect } from 'react';

import classnames from '../../utils/classNames';
import { IProps } from './types';

import './index.scss';

const baseClass = 'vant-slider';

const Slider = ({
  range = { min: 0, max: 100 },
  size = { width: 400, height: 5 },
  sliderSize = { width: 20, height: 20 },
  sliderStyle = {
    color: '#000',
    fontSize: '10px',
    backgroundColor: '#fff',
    borderRadius: '50%',
    borderColor: '#000'
  },
  disabled,
  hasValue,
  activeColor = '#4169e1',
  inactiveColor = '#d3d3d3',
  id,
  value = range.min,
  setValue
}: IProps) => {
  const {
    color,
    fontSize,
    backgroundColor,
    borderRadius,
    borderColor
  } = sliderStyle;
  const slideRange = range.max - range.min;
  const sliderOffset = sliderSize.width / 2;
  const initialPosition =
    (Math.abs((value as any) - range.min) / slideRange) * size.width -
    sliderOffset;
  const HIDE_ROUND = 4;

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
    const wrapper = document.getElementById(`wrapper${id}`);
    const fill = document.getElementById(`fill${id}`);
    const slider = document.getElementById(`slider${id}`);
    move(wrapper, slider, fill);
  };

  const getValue = (e, dom1) => {
    return Math.round(
      ((e.pageX - dom1.offsetLeft) / size.width) * slideRange + range.min
    );
  };

  const move = (dom1, dom2, dom3) => {
    const CLICKABLE = 1;
    const NON_CLICK = 0;
    let drag = NON_CLICK;
    dom1.addEventListener('click', function (e) {
      if (e.target === dom2) {
      } else {
        if (e.offsetX > size.width) {
          dom2.style.left = `${size.width}px`;
          dom3.style.width = `${size.width}px`;
        } else if (e.offsetX < sliderOffset) {
          dom2.style.left = '0px';
          dom3.style.width = '0px';
        } else {
          dom2.style.left = `${e.offsetX - sliderOffset}px`;
          dom3.style.width = `${e.offsetX - sliderOffset + HIDE_ROUND}px`;
        }
      }
      setValue(getValue(e, dom1));
    });
    dom2.addEventListener('mousedown', function () {
      drag = CLICKABLE;
    });
    document.addEventListener('mouseup', function (e) {
      drag = NON_CLICK;
      if (e.target === dom1 && e.target === dom3) {
        setValue(getValue(e, dom1));
      }
    });
    document.addEventListener('mousemove', function (e) {
      if (e.offsetX && drag === CLICKABLE) {
        if (e.pageX > dom1.offsetLeft + size.width) {
          dom2.style.left = `${size.width - sliderOffset}px`;
          dom3.style.width = `${size.width - sliderOffset + HIDE_ROUND}px`;
          setValue(range.max);
        } else if (e.pageX < dom1.offsetLeft) {
          dom2.style.left = `${0 - sliderOffset}px`;
          dom3.style.width = '0px';
          setValue(range.min);
        } else {
          dom2.style.left = `${e.pageX - dom1.offsetLeft - sliderOffset}px`;
          dom3.style.width = `${
            e.pageX - dom1.offsetLeft - sliderOffset + HIDE_ROUND
          }px`;
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
      id={`wrapper${id}`}
      {...wrapperProps}
      style={{
        width: `${size.width}px`,
        height: `${size.height}px`,
        backgroundColor: inactiveColor
      }}
    >
      <div
        id={`fill${id}`}
        {...fillProps}
        style={{
          width: `${initialPosition + HIDE_ROUND}px`,
          height: `${size.height}px`,
          backgroundColor: activeColor
        }}
      >
        <div
          id={`slider${id}`}
          {...sliderProps}
          style={{
            width: `${sliderSize.width}px`,
            height: `${sliderSize.height}px`,
            left: `${initialPosition}px`,
            boxShadow: hasValue ? '' : '0px 2px 5px #888',
            border: hasValue ? `1px solid ${borderColor}` : '',
            backgroundColor,
            marginRight: '4px',
            borderRadius
          }}
        >
          {hasValue && (
            <span
              style={{
                color,
                fontSize
              }}
            >
              {value}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Slider;
