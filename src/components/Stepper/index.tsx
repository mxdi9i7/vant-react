import React, { useState, useEffect, ReactElement, createRef } from 'react';

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
  tag?: ReactElement;
  onChange: Function;
  onAsyncChange?: Function | any;
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
  onChange,
  onAsyncChange
}: IProps) {
  const [value, setValue] = useState(0);
  const [isMinus, setIsMinus] = useState(false);
  const [isPlus, setIsPlus] = useState(false);
  const [isInput, setIsInput] = useState(false);

  const [minusBt, setMinusBt] = useState({});
  const [plusBt, setPlusBt] = useState({});
  const [inputBt, setInputBt] = useState({});
  const animationDiv = createRef<HTMLDivElement>();
  const animationBackgroundDiv = createRef<HTMLDivElement>();

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
      const aniNode = animationDiv.current;
      const aniBgNode = animationBackgroundDiv.current;
      if (aniNode && aniBgNode) {
        aniNode.style.opacity = '1';
        aniBgNode.style.opacity = '1';
      }

      const handlePlus = () => {
        const nextValue = value + (step || 1);
        setValue(nextValue);

        if (aniNode && aniBgNode) {
          aniNode.style.opacity = '0';
          aniBgNode.style.opacity = '0';
        }
        onChange(nextValue);
        onAsyncChange();
      };
      setTimeout(handlePlus, 1000);
    } else {
      const nextValue = value + (step || 1);
      setValue(nextValue);
      onChange(nextValue);
    }
  };

  const handleDecrement = () => {
    setIsPlus(false);
    if (loading) {
      const aniNode = animationDiv.current;
      const aniBgNode = animationBackgroundDiv.current;
      if (aniNode && aniBgNode) {
        aniNode.style.opacity = '1';
        aniBgNode.style.opacity = '1';
      }

      const decrement = () => {
        const nextValue = value - (step || 1);
        setValue(nextValue);
        onChange(nextValue);
        if (aniNode && aniBgNode) {
          aniNode.style.opacity = '0';
          aniBgNode.style.opacity = '0';
        }
      };
      setTimeout(decrement, 1000);
    } else {
      const nextValue = value - (step || 1);
      if (nextValue >= 0) {
        setValue(nextValue);
        onChange(nextValue);
      }
    }
  };

  const handleInputChange = (e) => {
    const result = e.target.value;
    if (loading) {
      const aniNode = animationDiv.current;
      const aniBgNode = animationBackgroundDiv.current;
      if (aniNode && aniBgNode) {
        aniNode.style.opacity = '1';
        aniBgNode.style.opacity = '1';
      }
      const changeInput = () => {
        setValue(Number(result));
        onChange(Number(result));
        if (aniNode && aniBgNode) {
          aniNode.style.opacity = '0';
          aniBgNode.style.opacity = '0';
        }
      };
      setTimeout(changeInput, 2000);
    } else {
      setValue(Number(e.target.value));
      onChange(Number(e.target.value));
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
    <div className='vant-stepper-container'>
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
        <div ref={animationBackgroundDiv} className='load'>
          <div ref={animationDiv} className='load-background' />
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
