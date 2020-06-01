import React, { useState, createRef, useRef, useEffect } from 'react';

import classnames from '../../utils/classNames';
import './index.scss';

const baseClass = 'vant-stepper';

export interface Props {
  value?: number;
  theme?: String;
  disabled?: Boolean;
  disableInput?: Boolean;
  min?: number;
  max?: number;
  step?: number;
  longPress?: Boolean;
  plus?: Boolean;
  minus?: Boolean;
  size?: number;
}
export default function Stepper({
  disabled,
  step,
  min,
  max,
  disableInput,
  size,
  theme
}: Props) {
  const [value, setValue] = useState(1);
  const [minus, setMinus] = useState(false);
  const [plus, setPlus] = useState(false);
  const [disInput, setDisInput] = useState(false);
  const plusBtProps = {
    className: classnames(baseClass, [{ disabled }, { theme }]),
    style: {}
  };
  const minusBtProps = {
    className: classnames(baseClass, [{ disabled }, { theme }]),
    style: {}
  };
  const inputProps = {
    className: classnames(baseClass, [{}]),
    style: {}
  };

  const handlePlus = () => {
    const limit = max - 1 - value;
    if (step) {
      setValue(value + step);
    } else if (max && limit < 0) {
      Object.assign(plusBtProps, { disabled });
    } else {
      setValue(value + 1);
      setMinus(true);
    }
  };
  const handleMinus = () => {
    const canMinus = value - step;
    if (step) {
      if (canMinus > 0) {
        setValue(value - step);
      } else {
        Object.assign(minusBtProps, {
          style: {
            ...minusBtProps.style,
            cursor: 'not-allowed'
          }
        });
      }
    } else if (min > value && min) {
      Object.assign(minusBtProps, {
        style: {
          ...minusBtProps.style,
          cursor: 'not-allowed'
        }
      });
    } else {
      if (value > 0) {
        setValue(value - 1);
        setMinus(false);
      } else {
        setMinus(true);
      }
    }
  };
  const handleInputChange = (e) => {
    if (e.target.value) {
      setValue(Number(e.target.value));
    }
  };
  useEffect(() => {
    if (value > 0) {
      setMinus(false);
    }
    if (value === 0) {
      Object.assign(minusBtProps, {
        style: {
          ...minusBtProps.style,
          cursor: 'not-allowed'
        }
      });
    }
  }, [value]);
  if (step > value) {
    Object.assign(minusBtProps, {
      style: {
        ...minusBtProps.style,
        cursor: 'not-allowed'
      }
    });
  }

  if (max - 1 < value) {
    Object.assign(plusBtProps, {
      style: {
        ...plusBtProps.style,
        cursor: 'not-allowed'
      }
    });
  }
  if (disabled) {
    Object.assign(minusBtProps, { disabled });
    Object.assign(plusBtProps, { disabled });
    Object.assign(inputProps, { disabled });
  }

  if (size) {
    Object.assign(minusBtProps, {
      style: {
        ...minusBtProps.style,
        width: `${size}px`,
        height: `${size}px`
      }
    });
    Object.assign(plusBtProps, {
      style: {
        ...plusBtProps.style,
        width: `${size}px`,
        height: `${size}px`
      }
    });
    Object.assign(inputProps, {
      style: {
        ...inputProps.style,
        width: `${size}px`,
        height: `${size}px`
      }
    });
  }

  useEffect(() => {
    if (disableInput) {
      setDisInput(true);
    }
  }, [disInput]);
  useEffect(() => {
    if (disabled) {
      setMinus(true);
    }
  }, [minus]);
  useEffect(() => {
    if (disabled) {
      setPlus(true);
    }
  }, [plus]);

  return (
    <div className='step-container'>
      <button onClick={handleMinus} {...minusBtProps} disabled={minus} />
      <input
        value={value}
        {...inputProps}
        onChange={handleInputChange}
        disabled={disInput}
      />
      <button onClick={handlePlus} {...plusBtProps} disabled={plus} />
    </div>
  );
}
