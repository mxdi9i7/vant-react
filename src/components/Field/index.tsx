import React, { useRef, useEffect, useState } from 'react';

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
  labelIcon,
  leftIcon,
  rightIcon,
  clearable,
  clickable,
  onChange,
  onClear,
  onClick,
  onFocus,
  onBlur,
  onClickInput,
  onClickLeftIcon,
  onClickRightIcon,
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
  errorAlign = 'left',
  required,
  border = true
}: IProps) => {
  const [containerFocus, setContainerFocus] = useState(false);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (formatter(inputValue)) {
      if (onChange) {
        if (!maxLength) {
          return onChange(e);
        } else {
          if (
            (value && value.length < maxLength) ||
            inputValue.length < maxLength
          ) {
            return onChange(e);
          }
        }
      }
    }
  };

  const handleClick = (e) => {
    if (clickable && onClick) {
      return onClick(e);
    }
  };

  const handleClickInput = (e) => {
    if (clickable && onClickInput) {
      return onClickInput(e);
    }
  };

  const handleFocus = (e) => {
    if (onFocus) return onFocus(e);
  };

  const handleBlur = (e) => {
    if (onBlur) return onBlur(e);
  };

  const handleClickLeftIcon = (e) => {
    if (onClickLeftIcon && clickable) return onClickLeftIcon(e);
  };

  const handleClickRightIcon = (e) => {
    if (onClickRightIcon && clickable) return onClickRightIcon(e);
  };

  const fieldContainerRef = useRef(null);
  const fieldRef = useRef(null);

  useEffect(() => {
    if (getContainerRef) getContainerRef(fieldContainerRef);
    if (getFieldRef) getFieldRef(fieldRef);
  }, [getContainerRef, getFieldRef]);

  useEffect(() => {
    window.addEventListener('click', (e) => {
      // @ts-ignore: Object is possibly 'null'.
      if (fieldContainerRef?.current?.contains(e.target)) {
        setContainerFocus(true);
      } else {
        setContainerFocus(false);
      }
    });
    return () => window.removeEventListener('click', () => {});
  }, []);

  const containerProps = {
    className: classnames(baseClass, [
      { disabled },
      { readonly },
      { error },
      { showWordLimit },
      { [`input-${inputAlign}`]: inputAlign },
      { [`label-${labelAlign}`]: labelAlign },
      { [`error-${errorAlign}`]: errorAlign },
      { border },
      { required }
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
    onChange: handleChange,
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
          {labelIcon && <Icon name={labelIcon} size={ICON_SIZE} />}
          <label {...labelProps}>
            {label}
            {colon && ':'}
          </label>
        </div>
      )}
      <div className={`${baseClass}__input`}>
        <div className={`${baseClass}__field`}>
          {leftIcon && (
            <Icon
              color='#323233'
              onClick={handleClickLeftIcon}
              name={leftIcon}
              size={ICON_SIZE}
            />
          )}
          <input {...inputProps} />
          {clearable && value && containerFocus && (
            <Icon onClick={onClear} name='clear' size={ICON_SIZE} />
          )}
          {rightIcon && !clearable && (
            <Icon
              onClick={handleClickRightIcon}
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
