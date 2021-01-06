import React, { useState } from 'react';

import classnames from '../../utils/classNames';

import CircularLoading from '../../assets/icons/loaders/Circular';
import './index.scss';
import { Props } from './types';

const baseClass = 'vant-switch';

const Switch = ({ checked = false, disabled, loading, size }: Props) => {
  const [isChecked, handleCheck] = useState(checked);
  const onClick = (e) => {
    e.preventDefault();
    if (!disabled && !loading) {
      handleCheck(!isChecked);
    }
  };

  const isNumeric = (value) => {
    return typeof value === 'number' || /^\d+(\.\d+)?$/.test(value);
  };

  const addUnit = (value) => {
    if (value === undefined || value === null) {
      return undefined;
    }

    return isNumeric(value) ? `${value}px` : String(value);
  };

  const style = {
    fontSize: addUnit(size)
  };
  return (
    <div
      className={classnames(baseClass, [
        { on: isChecked },
        { disabled },
        { loading }
      ])}
      style={style}
      role='switch'
      aria-checked={checked}
      onClick={onClick}
    >
      <div className={`${baseClass}__node`}>
        {loading ? <CircularLoading className={`${baseClass}--loading`} /> : ''}
      </div>
    </div>
  );
};

export default Switch;
