import React from 'react';
import classnames from '../../utils/classNames';
import { renderLoadingIcon } from './helper';
import './index.scss';
import { IProps } from './types';

const baseClassName = 'vant-switch';

const Switch = ({
  checked = false,
  disabled = false,
  size = '30px',
  activeColor = 'red',
  inactiveColor = 'blue',
  loading,
  loadingType,
  loadingText,
  loadingSize,
  onClick,
  onChange
}: IProps) => {
  const containerProps = {
    onClick: () => {
      !disabled && onClick && onClick();
    },
    onChange: () => {
      !disabled && onChange && onChange();
    },
    className: classnames(baseClassName, [
      { active: checked },
      { disabled },
      { 'circular-loading': loading }
    ]),
    style: {
      fontSize: typeof size === 'number' ? size + 'px' : size,
      backgroundColor: checked ? activeColor : inactiveColor
    }
  };

  return (
    <div {...containerProps}>
      {loading ? (
        renderLoadingIcon({
          className: loadingType
            ? `${baseClassName}__${loadingType}`
            : `${baseClassName}__circular`,
          loadingType,
          loadingText,
          loadingSize
        })
      ) : (
        <div className={baseClassName + '__node'} />
      )}
    </div>
  );
};

export default Switch;
