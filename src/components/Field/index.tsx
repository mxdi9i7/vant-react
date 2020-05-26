import React, { useState } from 'react';

import classnames from '../../utils/classNames';

import './index.scss';
import Icon from '../Icons';

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
  leftIcon?: string;
  rightIcon?: string;
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
  clearable
}: Props) => {
  const [fieldValue, setValue] = useState(value);
  const containerProps = {
    className: classnames(baseClass, [{ disabled }, { readonly }])
  };
  const inputProps = {
    value: fieldValue,
    type,
    name,
    placeHolder: placeholder || label,
    disabled,
    readonly,
    onChange: (e) => {
      setValue(e.target.value);
    }
  };
  const labelProps = {
    htmlFor: name
  };

  if (type === 'digit')
    Object.assign(inputProps, { inputmode: 'numeric', type: 'tel' });

  const ICON_SIZE = '16px';

  return (
    <div {...containerProps}>
      <div className={`${baseClass}__label`}>
        {leftIcon && <Icon name={leftIcon} size={ICON_SIZE} />}
        <label {...labelProps}>
          {label}
          {colon && ':'}
        </label>
      </div>
      <div className={`${baseClass}__input`}>
        <input {...inputProps} />
        {clearable && fieldValue && <Icon name='clear' size={ICON_SIZE} />}
        {rightIcon && !clearable && <Icon name={rightIcon} size={ICON_SIZE} />}
      </div>
    </div>
  );
};

export default Field;
