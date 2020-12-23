import React, { MouseEvent, useEffect, useState } from 'react';

import classnames from '../../utils/classNames';
import Icon from '../Icons';

import './index.scss';
import { IProps } from './types';

const baseClass = 'vant-radio';

const Radio = ({
  name,
  disabled,
  checked,
  labelDisabled,
  checkedColor,
  onClick,
  onChange,
  rtl,
  label = 'radio button'
}: IProps) => {
  const [isChecked, setChecked] = useState(checked);
  const handleClick = (event: MouseEvent): void => {
    if (!labelDisabled) {
      setChecked(!isChecked);
      onClick && onClick(event);
    }
  };

  const handleRadioClick = (event: MouseEvent): void => {
    if (labelDisabled) {
      setChecked(!isChecked);
      onClick && onClick(event);
    }
  };

  useEffect(() => {
    onChange && onChange(isChecked);
  }, [isChecked]);

  const iconName = isChecked ? 'checked' : 'circle';
  const iconColor = disabled ? '#c8c9cc' : isChecked ? checkedColor : '#000';

  // TODO: Add form related inputs here when working on form element
  return (
    <div
      onClick={handleClick}
      className={classnames(baseClass, [
        { labelDisabled },
        { disabled },
        { rtl }
      ])}
    >
      <div
        className={`${baseClass}__icon-container`}
        onClick={handleRadioClick}
      >
        <Icon color={iconColor} name={iconName} size='20px' />
      </div>
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default Radio;
