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
  loading,
  onClick,
  onChange
}: IProps) => {
  const containerProps = {
    onClick: () => {
      !loading && !disabled && onClick && onClick();
    },
    onChange: () => {
      !loading && !disabled && onChange && onChange();
    },
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
