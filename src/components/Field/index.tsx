import React, { useState, useRef, useEffect } from 'react';

import classnames from '../../utils/classNames';

import './index.scss';
import Icon from '../Icons';

const ICON_SIZE = '16px';

export interface Props {
  value?: string;
  type?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  clearable?: boolean;
  colon?: boolean;
  clickable?: boolean;
  leftIcon?: string;
  rightIcon?: string;
  input?: Function;
  clear?: Function;
  click?: Function;
  focus?: Function;
  blur?: Function;
  clickInput?: Function;
  clickLeftIcon?: Function;
  clickRightIcon?: Function;
  getContainerRef?: Function;
  getFieldRef?: Function;
}

const baseClass = 'vant-field';

const Field = ({
  value,
  type = 'text',
  label = 'Label',
  name,
  placeholder,
  readonly,
  disabled,
  colon,
  leftIcon,
  rightIcon,
  clearable,
  clickable,
  input,
  clear,
  click,
  focus,
  blur,
  clickInput,
  clickLeftIcon,
  clickRightIcon,
  getContainerRef,
  getFieldRef
}: Props) => {
  const handleInput = (e) => {
    if (input) {
      return input(e);
    }
  };

  const handleClick = (e) => {
    if (clickable && click) {
      return click(e);
    }
  };

  const handleClickInput = (e) => {
    if (clickable && clickInput) {
      return clickInput(e);
    }
  };

  const handleFocus = (e) => {
    if (focus) return focus(e);
  };

  const handleBlur = (e) => {
    if (blur) return blur(e);
  };

  const handleClickLeftIcon = (e) => {
    if (clickLeftIcon && clickable) return clickLeftIcon(e);
  };

  const handleClickRightIcon = (e) => {
    if (clickRightIcon && clickable) return clickRightIcon(e);
  };

  const fieldContainerRef = useRef(null);
  const fieldRef = useRef(null);

  useEffect(() => {
    if (getContainerRef) getContainerRef(fieldContainerRef);
    if (getFieldRef) getFieldRef(fieldRef);
  }, []);

  const containerProps = {
    className: classnames(baseClass, [{ disabled }, { readonly }]),
    onClick: handleClick,
    ref: fieldContainerRef
  };

  const inputProps = {
    value,
    type,
    name,
    placeholder: placeholder || label,
    disabled,
    readOnly: readonly,
    ref: fieldRef,
    onChange: handleInput,
    onBlur: handleBlur,
    onFocus: handleFocus,
    onClick: handleClickInput
  };

  const labelProps = {
    htmlFor: name
  };

  if (type === 'digit')
    Object.assign(inputProps, { inputMode: 'numeric', type: 'tel' });

  return (
    <div {...containerProps}>
      <div className={`${baseClass}__label`}>
        {leftIcon && (
          <Icon click={handleClickLeftIcon} name={leftIcon} size={ICON_SIZE} />
        )}
        <label {...labelProps}>
          {label}
          {colon && ':'}
        </label>
      </div>
      <div className={`${baseClass}__input`}>
        <input {...inputProps} />
        {clearable && value && (
          <Icon click={clear} name='clear' size={ICON_SIZE} />
        )}
        {rightIcon && !clearable && (
          <Icon
            click={handleClickRightIcon}
            name={rightIcon}
            size={ICON_SIZE}
          />
        )}
      </div>
    </div>
  );
};

export default Field;
