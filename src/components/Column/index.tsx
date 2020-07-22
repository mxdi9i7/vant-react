import React, { useRef, useEffect, FC } from 'react';

import classnames from '../../utils/classNames';

import { IProps } from './types';

import './index.scss';
import Row from '../Row';

const baseClass = 'vant-layout';
const flexwidth = (1 / 24) * 6;

const Column: FC<IProps> = ({
  row: Row,
  color,
  span,
  offset,
  align,
  click
}: IProps) => {
  const columnProps = {
    className: classnames(`${baseClass}__col`, []),
    style: {}
  };
  console.log(Row);
  if (row === 'grid')
    Object.assign(columnProps, {
      style: {
        ...columnProps.style,
        gridColumn: `span ${span}`
      }
    });
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
