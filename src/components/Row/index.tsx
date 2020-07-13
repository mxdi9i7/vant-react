import React, { useRef, useEffect } from 'react';

import classnames from '../../utils/classNames';

import { IProps } from './types';
import Column from '../Column';
import './index.scss';

const baseClass = 'vant-layout';

const Row = ({
  text,
  firstCol = {
    color: '#39a9ed',
    start: '1',
    span: 'span 8'
  },
  middleCol = { color: '#66c6f2', start: '9', span: 'span 8' },
  lastCol = { color: '#39a9ed', start: '17', span: 'span 8' },
  gutter,

  offset,
  justify,
  align,
  click
}: IProps) => {
  const rowProps = {
    className: classnames(`${baseClass}__row`, []),
    style: {}
  };
  const start = text?.split(' ')[1];
  return (
    <div
      {...rowProps}
      style={{
        gridGap: gutter
      }}
    >
      <Column
        text={text}
        color={firstCol.color}
        start={firstCol.start}
        span={firstCol.span}
      />
      <Column
        text={text}
        color={middleCol.color}
        start={middleCol.start}
        span={middleCol.span}
      />
      <Column
        text={text}
        color={lastCol.color}
        start={lastCol.start}
        span={lastCol.span}
      />
    </div>
  );
};

export default Row;
