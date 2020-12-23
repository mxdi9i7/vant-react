import React, { useEffect } from 'react';

import classnames from '../../utils/classNames';
import { IProps } from './types';

import './index.scss';

const baseClass = 'vant-slider';

const Slider = ({
  range = { min: '0px', max: '100px' },
  size = { width: '400px', height: '5px' },
  sliderSize = { width: '20px', height: '20px' },
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
  step = 1,
  value = parseInt(range.min),
  onSetValue
}: IProps) => {
  const {
    color,
    fontSize,
    backgroundColor,
    borderRadius,
    borderColor
  } = sliderStyle;
  const slideRange = parseInt(range.max) - parseInt(range.min);
  const sliderOffset = parseInt(sliderSize.width) / 2;
  const initialPosition =
    (Math.abs(value - parseInt(range.min)) / slideRange) *
      parseInt(size.width) -
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

  const handleStep = (value) => {
    return (
      Math.round(
        Math.max(parseInt(range.min), Math.min(value, parseInt(range.max))) /
          step
      ) * step
    );
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
    const result = Math.round(
      ((e.pageX - dom1.offsetLeft) / parseInt(size.width)) * slideRange +
        parseInt(range.min)
    );
    return handleStep(result);
  };

  const move = (dom1, dom2, dom3) => {
    const CLICKABLE = 1;
    const NON_CLICK = 0;
    let drag = NON_CLICK;
    dom1.addEventListener('click', function (e) {
      if (e.target === dom2) {
      } else {
        if (e.offsetX > parseInt(size.width)) {
          dom2.style.left = size.width;
          dom3.style.width = size.width;
        } else if (e.offsetX < sliderOffset) {
          dom2.style.left = '0px';
          dom3.style.width = '0px';
        } else {
          dom2.style.left = `${e.offsetX - sliderOffset}px`;
          dom3.style.width = `${e.offsetX - sliderOffset + HIDE_ROUND}px`;
        }
      }
      onSetValue(getValue(e, dom1));
    });
    dom2.addEventListener('mousedown', function () {
      drag = CLICKABLE;
    });
    document.addEventListener('mouseup', function (e) {
      drag = NON_CLICK;
      if (e.target === dom1 && e.target === dom3) {
        onSetValue(getValue(e, dom1));
      }
    });
    document.addEventListener('mousemove', function (e) {
      if (e.offsetX && drag === CLICKABLE) {
        if (e.pageX > dom1.offsetLeft + parseInt(size.width)) {
          dom2.style.left = `${parseInt(size.width) - sliderOffset}px`;
          dom3.style.width = `${
            parseInt(size.width) - sliderOffset + HIDE_ROUND
          }px`;
          onSetValue(handleStep(parseInt(range.max)));
        } else if (e.pageX < dom1.offsetLeft) {
          dom2.style.left = `${0 - sliderOffset}px`;
          dom3.style.width = '0px';
          onSetValue(handleStep(parseInt(range.min)));
        } else {
          dom2.style.left = `${e.pageX - dom1.offsetLeft - sliderOffset}px`;
          dom3.style.width = `${
            e.pageX - dom1.offsetLeft - sliderOffset + HIDE_ROUND
          }px`;
          onSetValue(getValue(e, dom1));
        }
      }
    });
  };

  if (disabled)
    Object.assign(wrapperProps, {
      disabled
    });

  return (
    <div
      id={`wrapper${id}`}
      {...wrapperProps}
      style={{
        width: size.width,
        height: size.height,
        backgroundColor: inactiveColor
      }}
    >
      <div
        id={`fill${id}`}
        {...fillProps}
        style={{
          width: `${initialPosition + HIDE_ROUND}px`,
          height: size.height,
          backgroundColor: activeColor
        }}
      >
        <div
          id={`slider${id}`}
          {...sliderProps}
          style={{
            width: sliderSize.width,
            height: sliderSize.height,
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
