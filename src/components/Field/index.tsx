import React, { useRef, useEffect } from 'react';

import classnames from '../../utils/classNames';

import './index.scss';
import Icon from '../Icons';
import { IProps } from './types';

const ICON_SIZE = '16px';

const baseClass = 'vant-field';

// TODO: Resize inputs

const Field = ({
  value,
  type = 'text',
  label,
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
  getFieldRef,
  autofocus,
  error,
  errorMessage,
  maxLength,
  showWordLimit,
  button,
  formatter = () => true,
  labelClass,
  labelWidth,
  labelAlign = 'left',
  inputAlign = 'left',
  errorAlign = 'left'
}: IProps) => {
  const handleInput = (e) => {
    const inputValue = e.target.value;
    if (formatter(inputValue)) {
      if (input) {
        if (!maxLength) {
          return input(e);
        } else {
          if (
            (value && value.length < maxLength) ||
            inputValue.length < maxLength
          ) {
            return input(e);
          }
        }
      }
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
  }, [getContainerRef, getFieldRef]);

  const containerProps = {
    className: classnames(baseClass, [
      { disabled },
      { readonly },
      { error },
      { showWordLimit },
      { [`input-${inputAlign}`]: inputAlign },
      { [`label-${labelAlign}`]: labelAlign },
      { [`error-${errorAlign}`]: errorAlign }
    ]),
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
    autoFocus: autofocus,
    onChange: handleInput,
    onBlur: handleBlur,
    onFocus: handleFocus,
    onClick: handleClickInput
  };

  const labelProps = {
    htmlFor: name,
    className: labelClass
  };

  const labelContainerProps = {
    style: {},
    className: `${baseClass}__label ${labelClass || ''}`
  };

  if (type === 'digit')
    Object.assign(inputProps, { inputMode: 'numeric', type: 'tel' });

  if (labelWidth)
    Object.assign(labelContainerProps, { style: { width: labelWidth } });

  return (
    <div {...containerProps}>
      {label && (
        <div {...labelContainerProps}>
          {leftIcon && (
            <Icon
              click={handleClickLeftIcon}
              name={leftIcon}
              size={ICON_SIZE}
            />
          )}
          <label {...labelProps}>
            {label}
            {colon && ':'}
          </label>
        </div>
      )}
      <div className={`${baseClass}__input`}>
        <div className={`${baseClass}__field`}>
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
          {button && button}
        </div>
        {error && errorMessage && (
          <div className={`${baseClass}__error`}>{errorMessage}</div>
        )}
        {showWordLimit && (
          <div
            className={`${baseClass}__word-limit ${
              value?.length === maxLength ? 'full' : ''
            }`}
          >
            {value ? value.length : 0}/{maxLength}
          </div>
        )}
      </div>
    </div>
  );
};

export default Field;
