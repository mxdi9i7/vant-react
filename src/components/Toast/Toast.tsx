/*
 * @Author: zhaohui
 * @Date: 2021-05-14 09:30:56
 * @LastEditTime: 2021-05-26 11:30:38
 * @LastEditors: zhaohui
 * @Description:
 * @FilePath: /vant-react/src/components/Toast/Toast.tsx
 */
import React from 'react';
import classnames from '../../utils/classNames';
import { baseClass, ToastProps } from './types';
import Icon from '../Icons';
import { renderLoadingIcon } from '../Button/helper';

const Toast = ({
  message = '',
  position = 'center',
  type,
  icon,
  loadingType = 'spinner'
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
      { extra: type !== 'message' },
      {
        [type === 'message' && icon ? 'user__type' : '']:
          type === 'message' && icon ? 'user__type' : ''
      }
    ]),
    style: {}
  };
  switch (type) {
    case 'checked':
    case 'fail':
      icon = <Icon name={type} />;
      break;
    case 'loading':
      icon = renderLoadingIcon({
        loadingType,
        className: '',
        loadingSize: 'large'
      });
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
