import React from 'react';
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
  const handleClick = (e) => {
    if (!disabled && !loading) {
      const value = !checked ? activeValue : inactiveValue;
      onChange && onChange(value);
      onClick && onClick(e);
    }
  };

  const containerProps = {
    onClick: (e) => handleClick(e),
    className: classnames(baseClass, [{ checked }, { disabled }, { loading }]),
    style: {
      fontSize: typeof size === 'number' ? size + 'px' : size,
      backgroundColor: checked ? activeColor : inactiveColor
    }
  };

  const renderLoading = () => {
    if (loading) {
      const color = checked ? activeColor : inactiveColor;
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
