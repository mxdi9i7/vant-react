import React, { useRef, useEffect } from 'react';

import classnames from '../../utils/classNames';

import { IProps } from './types';

import './index.scss';

const baseClass = 'vant-layout';
const flexwidth = (1 / 24) * 6;

const Column = ({ color, span, offset, align, click }: IProps) => {
  const columnProps = {
    className: classnames(`${baseClass}__col`, []),
    style: {}
  };

  if (type === 'grid')
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
