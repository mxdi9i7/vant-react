import React, { useRef, useEffect } from 'react';

import classnames from '../../utils/classNames';

import { IProps } from './types';

import './index.scss';

const baseClass = 'vant-layout';
const flexwidth = (1 / 24) * 6;

const Column = ({
  row: Row,
  color,
  span,
  offset,
  align,
  click,
  type
}: IProps) => {
  console.log(type);
  const columnProps = {
    className: classnames(`${baseClass}__col`, []),
    style: {}
  };
  return (
    <div
      {...columnProps}
      style={{
        backgroundColor: color
      }}
    >
      {`span: ${span}`}
    </div>
  );
};

export default Column;
