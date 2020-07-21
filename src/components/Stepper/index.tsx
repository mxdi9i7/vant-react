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
  const [isMinus, setIsMinus] = useState(false);
  const [isPlus, setIsPlus] = useState(false);
  const [isInput, setIsInput] = useState(false);
  const animationDiv = document.getElementById('loading');
  const animationBackground = document.getElementById('loading-background');
  const [minusBt, setMinusBt] = useState({});

  const handleIncrementBtProps = {
    className: classnames(baseClass, [{ disabled }, { theme }]),
    style: {}
  };
  const handleDecrementProps = {
    className: classnames(baseClass, [{ disabled }, { theme }]),
    style: {}
  };
  const inputProps = {
    className: classnames(baseClass, [{ disableInput }]),
    style: {}
  };

  const handleIncrement = () => {
    if (loading) {
      ReactDOM.findDOMNode(animationDiv).style.opacity = 1;
      ReactDOM.findDOMNode(animationBackground).style.opacity = 1;
      const handlePlus = () => {
        if (step) {
          setValue(value + step);
          ReactDOM.findDOMNode(animationDiv).style.opacity = 0;
          ReactDOM.findDOMNode(animationBackground).style.opacity = 0;
        } else {
          setValue(value + 1);
          ReactDOM.findDOMNode(animationDiv).style.opacity = 0;
          ReactDOM.findDOMNode(animationBackground).style.opacity = 0;
        }
      };

      setTimeout(handlePlus, 2000);
    } else if (step) {
      setValue(value + step);
    } else {
      setValue(value + 1);
    }
  };
  const handleDecrement = () => {
    const canMinus = value - step;
    if (loading) {
      ReactDOM.findDOMNode(animationDiv).style.opacity = 1;
      ReactDOM.findDOMNode(animationBackground).style.opacity = 1;

      const Decrement = () => {
        if (step) {
          setValue(value - step);
          ReactDOM.findDOMNode(animationDiv).style.opacity = 0;
          ReactDOM.findDOMNode(animationBackground).style.opacity = 0;
        } else {
          setValue(value - 1);
          ReactDOM.findDOMNode(animationDiv).style.opacity = 0;
          ReactDOM.findDOMNode(animationBackground).style.opacity = 0;
        }
      };
      setTimeout(Decrement, 2000);
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
    const result = e.target.value;
    if (loading) {
      ReactDOM.findDOMNode(animationDiv).style.opacity = 1;
      ReactDOM.findDOMNode(animationBackground).style.opacity = 1;
      const changeInput = () => {
        setValue(result);
        ReactDOM.findDOMNode(animationDiv).style.opacity = 0;
        ReactDOM.findDOMNode(animationBackground).style.opacity = 0;
      };
      setTimeout(changeInput, 2000);
    } else {
      setValue(Number(e.target.value));
    }
  };
  useEffect(() => {
    if (disabled) {
      setIsPlus(true);
      setIsMinus(true);
    } else {
      if (value === 0 || value === min) {
        setIsMinus(true);
      } else if (value === max) {
        setIsPlus(true);
      } else {
        setIsMinus(false);
        setIsPlus(false);
      }
    }
  }, [disabled, value, max, min, handleDecrementProps, handleIncrementBtProps]);
  useEffect(() => {
    if (value === 0) {
      const btStyle = { cursor: 'not-allowed' };
      setMinusBt(btStyle);
    } else {
      setMinusBt({});
    }
  }, [value]);

  if (disabled) {
    Object.assign(handleDecrementProps, { disabled });
    Object.assign(handleIncrementBtProps, { disabled });
  }
  if (theme) {
    Object.assign(handleIncrementBtProps, {
      style: {
        ...handleIncrementBtProps.style,
        background: '#ee0a24',
        color: 'white'
      }
    });
    Object.assign(handleDecrementProps, {
      style: {
        ...handleDecrementProps.style,
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

    Object.assign(handleDecrementProps, {
      style: {
        ...handleDecrementProps.style,
        width: Size,
        height: Size
      }
    });
    Object.assign(handleIncrementBtProps, {
      style: {
        ...handleIncrementBtProps.style,
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
      setIsInput(true);
      Object.assign(inputProps, { disabled });
    }
  }, [disableInput]);

  return (
    <div className='step-container'>
      <button
        onClick={handleDecrement}
        {...handleDecrementProps}
        disabled={isMinus}
        style={minusBt}
      >
        <img
          src='https://res.cloudinary.com/dlapk94rx/image/upload/v1595307854/icons8-minus-24_y8dnmc.png'
          alt=''
        />{' '}
      </button>
      <input
        value={value}
        {...inputProps}
        onChange={handleInputChange}
        disabled={isInput}
      />

      <button
        onClick={handleIncrement}
        {...handleIncrementBtProps}
        disabled={isPlus}
      >
        <img
          src='https://res.cloudinary.com/dlapk94rx/image/upload/v1595307854/icons8-plus-24_wnv2uo.png'
          alt=''
        />
      </button>
      {loading && (
        <div id='loading-background' className='load'>
          <div id='loading' className='load-background' />
        </div>
      )}
    </div>
  );
}
