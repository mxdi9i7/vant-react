import React, { useRef, useEffect } from 'react';

import classnames from '../../utils/classNames';

import { IProps } from './types';

import './index.scss';

const baseClass = 'vant-layout';

const Column = ({
  text,
  color,
  start,
  span,
  gutter,
  offset,
  justify,
  align,
  click
}: IProps) => {
  const columnProps = {
    className: classnames(`${baseClass}__col`, []),
    style: {}
  };

  return (
    <div
      {...columnProps}
      style={{
        backgroundColor: color,
        gridColumn: start,
        gridColumnEnd: span
      }}
    >
      {text}
    </div>
  );
};

export default Column;
