import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

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
  loading?: Boolean;
}

export default function Stepper({
  disabled,
  step,
  min,
  max,
  disableInput,
  size,
  theme,
  loading
}: IProps) {
  const [value, setValue] = useState(0);
  const [minus, setMinus] = useState(false);
  const [plus, setPlus] = useState(false);
  const [Input, setInput] = useState(false);
  const animationDiv = document.getElementById('loading');

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
    if (loading) {
      ReactDOM.findDOMNode(animationDiv).style.opacity = 1;
      const handlePlus = () => {
        if (step) {
          setValue(value + step);
          ReactDOM.findDOMNode(animationDiv).style.opacity = 0;
        } else {
          setValue(value + 1);
          ReactDOM.findDOMNode(animationDiv).style.opacity = 0;
        }
      };

      setTimeout(handlePlus, 2000);
    } else if (step) {
      setValue(value + step);
    } else {
      setValue(value + 1);
    }
  };
  const handleMinus = () => {
    const canMinus = value - step;
    if (loading) {
      ReactDOM.findDOMNode(animationDiv).style.opacity = 1;
      const handleMinus = () => {
        if (step) {
          setValue(value - step);
          ReactDOM.findDOMNode(animationDiv).style.opacity = 0;
        } else {
          setValue(value - 1);
          ReactDOM.findDOMNode(animationDiv).style.opacity = 0;
        }
      };
      setTimeout(handleMinus, 2000);
    } else if (step) {
      if (canMinus >= 0) {
        setValue(value - step);
      }
    } else {
      if (value > 0) {
        setValue(value - 1);
      }
    }
  };
  const handleInputChange = (e) => {
    if (e.target.value) {
      setValue(Number(e.target.value));
    }
  };
  useEffect(() => {
    if (value === 0 || value === min) {
      setMinus(true);
    } else if (value === max) {
      setPlus(true);
    } else {
      setMinus(false);
      setPlus(false);
    }
  }, [value, max, min]);

  if (disabled) {
    Object.assign(minusBtProps, { disabled });
    Object.assign(plusBtProps, { disabled });
    Object.assign(inputProps, { disabled });
  }
  if (theme) {
    Object.assign(plusBtProps, {
      style: {
        ...plusBtProps.style,
        background: '#ee0a24',
        color: 'white'
      }
    });
    Object.assign(minusBtProps, {
      style: {
        ...minusBtProps.style,
        border: '1px solid #ee0a24',
        color: '#ee0a24',
        background: 'white'
      }
    });
    Object.assign(inputProps, {
      style: {
        ...inputProps.style,
        background: 'white'
      }
    });
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
  }, [disableInput]);
  useEffect(() => {
    if (disabled) {
      setMinus(true);
    }
  }, [disabled]);
  useEffect(() => {
    if (disabled) {
      setPlus(true);
    }
  }, [disabled]);

  return (
    <div className='step-container'>
      <button onClick={handleMinus} {...minusBtProps} disabled={minus}>
        -
      </button>
      <input
        value={value}
        {...inputProps}
        onChange={handleInputChange}
        disabled={Input}
      />

      <button onClick={handleIncrement} {...plusBtProps} disabled={plus}>
        +
      </button>
      {loading && <div id='loading' className='loading' />}
    </div>
  );
}
