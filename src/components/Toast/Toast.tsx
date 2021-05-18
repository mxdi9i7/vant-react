/*
 * @Author: zhaohui
 * @Date: 2021-05-14 09:30:56
 * @LastEditTime: 2021-05-18 14:46:33
 * @LastEditors: zhaohui
 * @Description:
 * @FilePath: /vant-react/src/components/Toast/Toast.tsx
 */
import React from 'react';
import classnames from '../../utils/classNames';
import { baseClass, ToastProps } from './types';
import Icon from '../Icons';

const Toast = ({
  message = '',
  position = 'center',
  type,
  icon
}: ToastProps) => {
  const toastItem = {
    className: classnames(`${baseClass}`, [
      {
        toastItem: 'toastItem'
      },
      {
        [`position`]: 'position'
      },
      {
        [`position__${position}`]: `position__${position}`
      },
      { type },
      {
        [type === 'message' && icon ? 'user__type' : '']:
          type === 'message' && icon ? 'user__type' : ''
      }
    ]),
    style: {}
  };
  switch (type) {
    case 'success':
    case 'fail':
      icon = <Icon name={type}></Icon>;
      break;
    default:
      break;
  }
  const contentStyle = {
    className: classnames(`${baseClass}__text`, []),
    style: {}
  };
  return (
    <div {...toastItem}>
      {icon}
      <div {...contentStyle}>{message}</div>
    </div>
  );
};
export default Toast;
