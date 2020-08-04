import React from 'react';

import classnames from '../../utils/classNames';

import { IProps } from './types';

import './index.scss';

const baseClass = 'vant-layout';
const flexwidth = 100 / 24;

const Column = ({ span, offset, display, gutter }: IProps) => {
  const columnProps = {
    className: classnames(`${baseClass}__col`, []),
    style: {
      display: display,
      width: flexwidth * Number(span) + '%'
    }
  };

  if (offset)
    Object.assign(columnProps, {
      style: {
        ...columnProps.style,
        marginLeft: flexwidth * Number(offset) + '%'
      }
    });

  if (gutter) {
    Object.assign(columnProps, {
      style: {
        ...columnProps.style,
        marginLeft: gutter.left + 'px',
        marginRight: gutter.right + 'px'
      }
    });
  }

  return (
    <div {...columnProps}>
      {offset ? `offset: ${offset}, span: ${span}` : `span: ${span}`}
    </div>
  );
};

export default Column;
