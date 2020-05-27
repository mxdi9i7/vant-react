import React, { useState } from 'react';

import Icon from '../Icons';

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
  search,
  input,
  focus,
  blur,
  clear,
  cancel,
  action,
  errorMessage,
  labelAlign,
  labelWidth
}: IProps) => {
  const [value, setValue] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (search) search(e);
  };
  const handleActionClick = (e) => {
    e.preventDefault();
    if (cancel) cancel(e);
  };

  const handleInput = (e) => {
    if (input) input(e);
    setValue(e.target.value);
  };

  const handleFocus = (e) => {
    if (focus) focus(e);
  };

  const handleBlur = (e) => {
    if (focus) blur(e);
  };

  const handleClear = (e) => {
    e.preventDefault();
    if (clear) {
      clear(e);
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
        input={handleInput}
        blur={handleBlur}
        focus={handleFocus}
        clear={handleClear}
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
