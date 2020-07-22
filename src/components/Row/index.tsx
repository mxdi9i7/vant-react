import React, { useRef, useEffect } from 'react';

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
  console.log(children.length);
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

  const childrenWithProps = children.map((child) =>
    React.cloneElement(child, { type })
  );

  return <div {...rowProps}>{childrenWithProps}</div>;
};

export default Row;
