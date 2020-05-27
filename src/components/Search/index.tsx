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
  autoFocus,
  showAction,
  disabled,
  readonly,
  error,
  inputAlign = 'left',
  leftIcon = 'search',
  rightIcon,
  actionText,
  search,
  input,
  foucs,
  blur,
  clear,
  cancel
}: IProps) => {
  const [value, setValue] = useState('');

  const searchProps = {
    className: classnames(baseClass, [{ label }, { shape }])
  };
  const ICON_SIZE = '16px';
  return (
    <form {...searchProps}>
      {/* <Icon name='search' size={ICON_SIZE} /> */}
      <Field
        value={value}
        input={(e) => setValue(e.target.value)}
        clearable={clearable}
        clear={() => setValue('')}
        leftIcon={leftIcon}
      />
    </form>
  );
};

export default Search;
