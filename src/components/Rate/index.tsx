import React, { useState, useEffect } from 'react';

import classnames from '../../utils/classNames';

import './index.scss';
import Icon from '../Icons';
import { IProps } from './types';

const baseClass = 'vant-rate';

const renderIcons = (icons, iconCount, iconName, iconColor, iconSize) => {
  for (let i = 0; i < iconCount; i++) {
    icons.push(<Icon color={iconColor} size={iconSize} name={iconName} />);
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
  touchable
}: IProps) => {
  const [rateIcons, setRateIcons] = useState([]);

  useEffect(() => {
    let currentIcons = [...rateIcons];
    if (disabled) {
      currentIcons = renderIcons(
        currentIcons,
        count,
        icon,
        disabledColor,
        size
      );
    } else {
      currentIcons = renderIcons(currentIcons, currentRate, icon, color, size);
      currentIcons = renderIcons(
        currentIcons,
        count - currentRate,
        voidIcon,
        voidColor,
        size
      );
    }
    setRateIcons(currentIcons);
  }, []);

  const rateProps = {
    className: classnames(baseClass, [
      {
        allowHalf,
        disabled,
        readonly
      }
    ])
  };

  return (
    <div {...rateProps}>
      {rateIcons.map((v, i) => (
        <div key={i} className={`${baseClass}__icon`}>
          {v}
        </div>
      ))}
    </div>
  );
};

export default Rate;
