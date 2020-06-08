import React, { useState, useEffect } from 'react';

import classnames from '../../utils/classNames';

import './index.scss';

const baseClass = 'vant-stepper';

export interface IProps {
  value?: number;
  theme?: String | any;
  disabled?: Boolean;
  disableInput?: Boolean;
  min?: number | any;
  max?: number | any;
  step?: number | any;
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
}: IProps) {
  const [value, setValue] = useState(0);
  const [minus, setMinus] = useState(false);
  const [plus, setPlus] = useState(false);
  const [Input, setInput] = useState(false);
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

  const handleIncrement = () => {
    if (step) {
      setValue(value + step);
    } else if (max && max === value) {
      setPlus(true);
    } else {
      setValue(value + 1);
    }
  };
  const handleMinus = () => {
    const canMinus = value - step;
    if (step && canMinus > 0) {
      setValue(value - step);
    } else {
      setMinus(true);
    }
    if (min > value && min) {
      setMinus(true);
    } else {
      if (value > 0) {
        setValue(value - 1);
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
    if (step && value === 1) {
      setMinus(true);
    } else {
      setMinus(false);
    }
    if (min && min === value) {
      setMinus(true);
    } else {
      setMinus(false);
    }
    if (max && max === value) {
      setPlus(true);
    } else {
      setPlus(false);
    }
  }, [value, step, min, max]);

  if (disabled) {
    Object.assign(minusBtProps, { disabled });
    Object.assign(plusBtProps, { disabled });
    Object.assign(inputProps, { disabled });
  }

  if (size) {
    const Size = `${size}px`;
    Object.assign(minusBtProps, {
      style: {
        ...minusBtProps.style,
        width: Size,
        height: Size
      }
    });
    Object.assign(plusBtProps, {
      style: {
        ...plusBtProps.style,
        width: Size,
        height: Size
      }
    });
    Object.assign(inputProps, {
      style: {
        ...inputProps.style,
        width: Size,
        height: Size
      }
    });
  }

  useEffect(() => {
    if (disableInput) {
      setInput(true);
    }
  }, [Input]);
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
        disabled={Input}
      />
      <button onClick={handleIncrement} {...plusBtProps} disabled={plus} />
    </div>
  );
}
