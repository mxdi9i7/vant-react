import React, { useState } from 'react';

import classnames from '../../utils/classNames';

import './index.scss';
import Icon from '../Icons';

export interface IProps {
  checked?: boolean;
  name?: string;
  activeIcon?: string;
  inactiveIcon?: string;
  checkedColor?: string;
  labelText?: string;
  disabled?: boolean;
  labelDisabled?: boolean;
}

const baseClass = 'vant-checkbox';

// TODO: Round/Square checkbox

const Checkbox = ({
  checked,
  name,
  activeIcon = 'checked',
  checkedColor = '#1989fa',
  labelText,
  inactiveIcon = 'passed',
  disabled,
  labelDisabled
}: IProps) => {
  const [isChecked, handleCheck] = useState(checked);

  const handleContainerClick = (e) => {
    e.preventDefault();
    if (!disabled && !labelDisabled) {
      handleCheck(!isChecked);
    }
  };

  const handleIconClick = (e) => {
    e.preventDefault();
    if (!disabled) {
      handleCheck(!isChecked);
    }
  };

  return (
    <div
      className={classnames(baseClass, [
        {
          disabled
        }
      ])}
      onClick={handleContainerClick}
    >
      <div className={`${baseClass}__icon-container`} onClick={handleIconClick}>
        <Icon
          color={disabled ? '#c8c9cc' : checkedColor}
          name={isChecked ? activeIcon : inactiveIcon}
          size='20px'
        />
      </div>
      <label htmlFor={name}>{labelText}</label>
    </div>
  );
};

export default Checkbox;
