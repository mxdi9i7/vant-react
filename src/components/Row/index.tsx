import React, { useRef, useEffect } from 'react';

import classnames from '../../utils/classNames';
import Column from '../Column';
import { IProps } from './types';

import './index.scss';

const baseClass = 'vant-layout';

const Row = ({
  children,
  type = 'grid',
  gutter,
  justify = 'start',
  align,
  click
}: IProps) => {
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
