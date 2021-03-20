import React from 'react';

import classnames from '../../utils/classNames';

import './index.scss';
import { Props } from './types';

const baseClass = 'vant-loading';

const CircularIcon = (
  <svg className={`${baseClass}__circular`} viewBox='25 25 50 50'>
    <circle cx='50' cy='50' r='20' fill='none' />
  </svg>
);

const SpinIcon: JSX.Element[] = [];
for (let i = 0; i < 12; i++) {
  SpinIcon.push(<i />);
}

const Loading = ({ type = 'circular' }: Props) => {
  return (
    <div className={classnames(baseClass, [])}>
      <span className={classnames(baseClass, [{ type }])}>
        {type === 'spinner' ? SpinIcon : CircularIcon}
      </span>
    </div>
  );
};

export default Loading;
