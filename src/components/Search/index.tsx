import React, { useState } from 'react';

import classnames from '../../utils/classNames';

import './index.scss';
import { IProps } from './types';
import Field from '../Field';

const baseClass = 'vant-search';

const Search = ({
  label,
  shape = 'square',
  background,
  maxLength,
  placeholder,
  clearable = true,
  autofocus,
  showAction,
  disabled,
  readonly,
  error,
  inputAlign = 'left',
  leftIcon = 'search',
  rightIcon,
  actionText = 'Cancel',
  onSearch,
  onChange,
  onFocus,
  onBlur,
  onClear,
  onCancel,
  action,
  errorMessage,
  labelAlign,
  labelWidth
}: IProps) => {
  const [value, setValue] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(e);
  };
  const handleActionClick = (e) => {
    e.preventDefault();
    if (onCancel) onCancel(e);
  };

  const handleInput = (e) => {
    if (onChange) onChange(e);
    setValue(e.target.value);
  };

  const handleFocus = (e) => {
    if (onFocus) onFocus(e);
  };

  const handleBlur = (e) => {
    if (onBlur) onBlur(e);
  };

  const handleClear = (e) => {
    e.preventDefault();
    if (onClear) {
      onClear(e);
    }
    setValue('');
  };

  const searchProps = {
    className: classnames(baseClass, [
      { label },
      { [shape]: shape },
      { disabled },
      { showAction },
      { leftIcon }
    ]),
    style: {},
    onSubmit: handleSearch
  };

  if (background)
    Object.assign(searchProps, { style: { backgroundColor: background } });

  return (
    <form {...searchProps}>
      <Field
        value={value}
        label={label}
        labelAlign={labelAlign}
        labelWidth={labelWidth}
        onChange={handleInput}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onClear={handleClear}
        clearable={clearable}
        leftIcon={leftIcon}
        maxLength={maxLength}
        placeholder={placeholder}
        autofocus={autofocus}
        readonly={readonly}
        disabled={disabled}
        error={error}
        errorMessage={errorMessage}
        inputAlign={inputAlign}
        rightIcon={rightIcon}
      />
      {showAction && (
        <div className={`${baseClass}__action`}>
          {action || (
            <button
              onClick={handleActionClick}
              className={`${baseClass}__cancel`}
            >
              {actionText}
            </button>
          )}
        </div>
      )}
    </form>
  );
};

export default Search;
