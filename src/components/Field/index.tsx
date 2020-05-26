import React from 'react';

import classnames from '../../utils/classNames';

import './index.scss';

export interface Props {
  value?: string;
  type?: string;
  name?: string;
  label?: string;
  placeholder?: string;
}

const baseClass = 'vant-field';

const Field = ({
  value,
  type = 'text',
  label = 'Label',
  name,
  placeholder = 'Text'
}: Props) => {
  const containerProps = {
    className: classnames(baseClass, [])
  };
  const inputProps = {
    value,
    type,
    name,
    placeHolder: placeholder
  };
  const labelProps = {
    htmlFor: name
  };
  return (
    <div {...containerProps}>
      <div className={`${baseClass}__label`}>
        <label {...labelProps}>{label}</label>
      </div>
      <div className={`${baseClass}__input`}>
        <input {...inputProps} />
      </div>
    </div>
  );
};

export default Field;
