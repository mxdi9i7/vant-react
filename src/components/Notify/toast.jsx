import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import classnames from '../../utils/classNames';
import Icon from '../Icons';
import { IProps } from './types';

import './index.scss';

const baseClass = 'vant-notify';

const Notify = ({ notice }) => {
  console.log(notice);
  const {
    closeable,
    textStyle,
    message,
    content,
    borderRadius,
    type,
    color,
    padding
  } = notice;
  const [isActive, setActive] = useState(true);

  useEffect(() => {
    setTimeout(setActive(false), 5000);
  }, [isActive]);

  const notifyProps = {
    className: classnames(baseClass, [{ closeable }, { isActive }, { type }]),
    style: {}
  };

  const contentProps = {
    className: classnames(`${baseClass}__content`, [{ isActive }]),
    style: {}
  };

  if (padding)
    Object.assign(contentProps, {
      style: {
        ...contentProps.style,
        padding
      }
    });

  if (color)
    Object.assign(notifyProps, {
      style: {
        ...notifyProps.style,
        backgroundColor: color,
        borderColor: color
      }
    });

  return (
    <div {...notifyProps}>
      {console.log('hhh')}
      {closeable && (
        <span
          className='closeIcon'
          onClick={() => {
            setActive(false);
          }}
          // style={}
        >
          <Icon name='cross' size='16px' />
        </span>
      )}
      <div {...contentProps}>
        {message && (
          <h3
            style={{
              color: textStyle.color,
              fontSize: textStyle.fontSize,
              textAlign: textStyle.textAlign,
              margin: '15px'
            }}
          >
            {message}
          </h3>
        )}
        {content && content}
      </div>
    </div>
  );
};

export default Notify;
