import React, { useRef, useEffect } from 'react';

import classnames from '../../utils/classNames';

import { IProps } from './types';

import './index.scss';

const baseClass = 'vant-layout';

const Layout = ({
  size,
  text,
  content,
  color,
  type,
  gutter,
  span,
  offset,
  justify,
  align,
  click
}: IProps) => {
  const containerProps = {
    className: classnames(`${baseClass}__row`, [])
  };
  const columnProps = {
    className: classnames(`${baseClass}__col`, [])
  };

  const MARGIN_BOTTOM_SIZE = '10px';
  return (
    <div {...containerProps}>
      {text && (
        <div
          {...columnProps}
          style={{
            fontSize: text.fontSize,
            lineHeight: text.lineHight,
            textAlign: text.textAlign,
            marginBottom: MARGIN_BOTTOM_SIZE
          }}
        >
          {text.text}
        </div>
      )}
      {(!offset || offset <= 4) && text && (
        <div
          {...columnProps}
          style={{
            fontSize: text.fontSize,
            lineHeight: text.lineHight,
            textAlign: text.textAlign,
            marginBottom: MARGIN_BOTTOM_SIZE
          }}
        >
          {text.text}
        </div>
      )}
      {text && (
        <div
          {...columnProps}
          style={{
            fontSize: text.fontSize,
            lineHeight: text.lineHight,
            textAlign: text.textAlign,
            marginBottom: MARGIN_BOTTOM_SIZE
          }}
        >
          {text.text}
        </div>
      )}
    </div>
  );
};

export default Layout;
