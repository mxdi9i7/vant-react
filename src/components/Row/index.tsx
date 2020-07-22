import React, { useRef, useEffect, FC } from 'react';

import classnames from '../../utils/classNames';
import Column from '../Column';
import { Props } from './types';

import './index.scss';

const baseClass = 'vant-layout';

const Row: FC<Props> = ({
  children,
  type = 'grid',
  gutter,
  justify = 'start',
  align,
  click
}: Props) => {
  const rowProps = {
    className: classnames(`${baseClass}__row`, [{ type }]),
    style: {}
  };

  if (gutter)
    Object.assign(rowProps, {
      style: {
        ...rowProps.style,
        gridGap: gutter
      }
    });

  if (type === 'flex' && justify)
    Object.assign(rowProps, {
      style: {
        ...rowProps.style,
        justifyContent: justify
      }
    });

  return <div {...rowProps}>{children}</div>;
};

export default Row;
