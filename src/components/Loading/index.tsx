import React, { FC } from 'react';
import { IProps } from './types';
import { addUnit, classnames, getSizeStyle } from '../../utils';

import './index.scss';

const baseClass = 'vant-loading';

const SpinIcon = () => {
  const arr: JSX.Element[] = [];
  for (let i = 0; i < 12; i++) {
    arr.push(<i key={i} />);
  }
  return arr;
};

const CircularIcon = (
  <svg
    className={classnames(`${baseClass}--circular`, [])}
    viewBox='25 25 50 50'
  >
    <circle cx='50' cy='50' r='20' fill='none' />
  </svg>
);

const Loading: FC<IProps> = ({
  size = '30px',
  type = 'circular',
  color = '#c9c9c9',
  text,
  textSize = '14px',
  textColor = '#c9c9c9',
  vertical
}) => {
  console.log('loading');
  const contentProps = {
    className: classnames(`${baseClass}`, [{ vertical }]),
    style: {}
  };

  const iconProps = {
    className: classnames(`${baseClass}--spinner`, [{ [type]: type }]),
    style: {
      color,
      ...getSizeStyle(size)
    }
  };

  const textProps = {
    className: classnames(`${baseClass}--text`, []),
    style: {
      fontSize: addUnit(textSize),
      color: textColor ?? color
    }
  };

  return (
    <div {...contentProps}>
      <span {...iconProps}>
        {type === 'spinner' ? SpinIcon() : CircularIcon}
      </span>
      {text && <span {...textProps}>{text}</span>}
    </div>
  );
};

export default Loading;
