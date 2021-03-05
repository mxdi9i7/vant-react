import React, { useState } from 'react';
import classnames from '../../utils/classNames';
import './index.scss';
import { IProps } from './types';
import CircularLoading from '../../assets/icons/loaders/Circular';
const baseClass = 'vant-switch';

const Switch = ({
  checked = false,
  disabled = false,
  size = '30px',
  activeColor = '#1989fa',
  inactiveColor = 'gray',
  activeValue = true,
  inactiveValue = false,
  loading,
  onClick,
  onChange
}: IProps) => {
  const [isChecked, setChecked] = useState(checked);

  const handleClick = (e) => {
    if (!disabled && !loading) {
      setChecked(() => {
        const value = !isChecked ? activeValue : inactiveValue;
        onChange && onChange(value);
        return !isChecked;
      });
      onClick && onClick(e);
    }
  };

  const containerProps = {
    onClick: handleClick,
    className: classnames(baseClass, [
      { checked: isChecked },
      { disabled },
      { loading }
    ]),
    style: {
      fontSize: typeof size === 'number' ? size + 'px' : size,
      backgroundColor: isChecked ? activeColor : inactiveColor
    }
  };

  const renderLoading = () => {
    if (loading) {
      const color = isChecked ? activeColor : inactiveColor;
      return (
        <CircularLoading className={`${baseClass}--loading`} color={color} />
      );
    }
    return '';
  };

  return (
    <div {...containerProps}>
      <div className={`${baseClass}__node`}>{renderLoading()}</div>
    </div>
  );
};

export default Switch;
