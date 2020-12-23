import React, { useState } from 'react';
import shortid from 'shortid';

import classnames from '../../utils/classNames';

import './index.scss';
import Icon from '../Icons';
import { IProps } from './types';
import RateIcon from './subcomponents/rate-icon';

const baseClass = 'vant-rate';

const renderIcon = (
  color,
  size,
  icon,
  numberOfIcons,
  handleClick,
  isActive,
  activeCount,
  gutter
) => {
  const icons = new Array(numberOfIcons);
  for (let i = 0; i < numberOfIcons; i++) {
    icons.push(
      <RateIcon
        index={i}
        gutter={gutter}
        handleClick={(index) =>
          handleClick(isActive ? index : index + activeCount)
        }
        key={shortid.generate()}
        icon={<Icon color={color} size={size} name={icon} />}
        className={`${baseClass}__icon`}
      />
    );
  }
  return icons;
};

const Rate = ({
  currentRate = 5,
  count = 5,
  size = '20px',
  icon = 'star',
  voidIcon = 'star-o',
  gutter = '4px',
  color = '#ffd21e',
  voidColor = '#c8c9cc',
  disabledColor = '#c8c9cc',
  allowHalf,
  disabled,
  readonly,
  onChange
}: IProps) => {
  const [activeCount, setActiveCount] = useState(currentRate || count);

  const rateProps = {
    className: classnames(baseClass, [
      {
        allowHalf,
        disabled,
        readonly
      }
    ])
  };

  // TODO: Add half star feature
  // TODO: Add touchable feature

  const handleClick = (index) => {
    if (!disabled && !readonly) {
      const nextRate = index + 1;
      setActiveCount(nextRate);
      if (!!onChange) onChange(nextRate);
    }
  };

  return (
    <div {...rateProps}>
      {renderIcon(
        disabled ? disabledColor : color,
        size,
        icon,
        activeCount,
        handleClick,
        true,
        activeCount,
        gutter
      )}
      {renderIcon(
        disabled ? disabledColor : voidColor,
        size,
        voidIcon,
        count - activeCount,
        handleClick,
        false,
        activeCount,
        gutter
      )}
    </div>
  );
};

export default Rate;
