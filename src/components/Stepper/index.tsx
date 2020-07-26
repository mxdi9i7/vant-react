import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import classnames from '../../utils/classNames';

import './index.scss';

const baseClass = 'vant-stepper';

export interface IProps {
  Value?: number;
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
  loading,
  Value
}: IProps) {
  const [value, setValue] = useState(0);
  const [isMinus, setIsMinus] = useState(false);
  const [isPlus, setIsPlus] = useState(false);
  const [isInput, setIsInput] = useState(false);
  const animationDiv = document.getElementById('loading');
  const animationBackground = document.getElementById('loading-background');
  const [minusBt, setMinusBt] = useState({});
  const [plusBt, setPlusBt] = useState({});
  const [inputBt, setInputBt] = useState({});

  const handleIncrementBtProps = {
    className: classnames(baseClass, [{ disabled }, { theme }]),
    style: {}
  };
  const handleDecrementProps = {
    className: classnames(baseClass, [{ disabled }, { theme }]),
    style: {}
  };
  const inputProps = {
    className: classnames(baseClass, [{ disableInput }, { theme }]),
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
    setIsPlus(false);

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
        setValue(Number(result));
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
      const btStyle = {
        cursor: 'not-allowed',
        opacity: '0.2'
      };
      setMinusBt(btStyle);
      setPlusBt(btStyle);
      setIsPlus(true);
      setIsMinus(true);
      Object.assign(handleDecrementProps, { disabled });
      Object.assign(handleIncrementBtProps, { disabled });
    } else if (size) {
      const Size = `${size}px`;
      setMinusBt({ width: Size, height: Size });
      setInputBt({ width: Size, height: Size });
      setPlusBt({ cursor: 'pointer' });

      if (value === 0 || value === min) {
        const btStyle = {
          cursor: 'not-allowed',
          width: Size,
          height: Size,
          opacity: '0.2'
        };
        const btnStyle = {
          cursor: 'pointer',
          width: Size,
          height: Size
        };
        setMinusBt(btStyle);
        setPlusBt(btnStyle);
      } else if (value === max) {
        const btStyle = {
          cursor: 'not-allowed',
          width: Size,
          height: Size,
          opacity: '0.2'
        };
        setPlusBt(btStyle);
        setIsPlus(true);
      } else {
        const btnStyle = {
          cursor: 'pointer',
          width: Size,
          height: Size
        };
        setMinusBt(btnStyle);
        setInputBt(btnStyle);
        setPlusBt(btnStyle);
      }
    } else {
      if (value === 0 || value === min) {
        const btStyle = { cursor: 'not-allowed', opacity: '0.2' };
        const btnStyle = { cursor: 'pointer' };
        setMinusBt(btStyle);
        setPlusBt(btnStyle);
      } else if (value === max) {
        const btStyle = { cursor: 'not-allowed', opacity: '0.2' };
        setPlusBt(btStyle);
        setIsPlus(true);
      } else {
        const btnStyle = {
          cursor: 'pointer'
        };
        setMinusBt(btnStyle);
        setPlusBt(btnStyle);
      }
    }
  }, [value]);

  useEffect(() => {
    if (disableInput) {
      setIsInput(true);
      Object.assign(inputProps, { disabled });
    }
  }, [disableInput]);
  return (
    <div v-model={value} className='step-container'>
      <button
        id='minus'
        onClick={handleDecrement}
        {...handleDecrementProps}
        disabled={isMinus}
        style={minusBt}
      >
        <div className='minus' />
      </button>
      <input
        value={value}
        {...inputProps}
        onChange={handleInputChange}
        disabled={isInput}
        style={inputBt}
      />
      {loading && (
        <div id='loading-background' className='load'>
          <div id='loading' className='load-background' />
        </div>
      )}
      <button
        onClick={handleIncrement}
        {...handleIncrementBtProps}
        disabled={isPlus}
        style={plusBt}
      >
        <div className='add' />
      </button>
    </div>
  );
}
