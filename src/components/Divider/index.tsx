import React from 'react';

import { Props } from './types';

import './index.scss';
import classnames from '../../utils/classNames';

const baseClass = 'vant-divider';

export default function Divider({
  dashed,
  hairline = true,
  contentPosition = 'center',
  children,
  style = {}
}: Props) {
  const props = {
    className: classnames(`${baseClass}`, [
      { dashed },
      { hairline },
      {
        [`content-${contentPosition}`]: !!children
      }
    ]),
    style
  };
  return (
    <div role='separator' {...props}>
      {children}
    </div>
  );
}
