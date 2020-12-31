import React, { useState } from 'react';

import classnames from '../../utils/classNames';

import './index.scss';
import { Props } from './types';

const baseClass = 'vant-switch';

const Switch = ({ checked = false, disabled }: Props) => {
  const [isChecked, handleCheck] = useState(checked);
  const onClick = (e) => {
    e.preventDefault();
    if (!disabled) {
      handleCheck(!isChecked);
    }
  };

  return (
    <div
      className={classnames(baseClass, [{ on: isChecked }, { disabled }])}
      role='switch'
      aria-checked={checked}
      onClick={onClick}
    >
      <div className={`${baseClass}__node`} />
    </div>
  );
};

export default Switch;
