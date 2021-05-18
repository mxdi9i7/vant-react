/*
 * @Author: zhaohui
 * @Date: 2021-05-17 14:50:33
 * @LastEditTime: 2021-05-18 14:53:23
 * @LastEditors: zhaohui
 * @Description:
 * @FilePath: /vant-react/src/components/Toast/CreateToast.tsx
 */
import ReactDom from 'react-dom';
import React from 'react';
import ToastContainer from './ToastContainer';
import { ToastItemProps, ToastProps } from './types';

const createToast = () => {
  const div = document.createElement('div');
  document.body.appendChild(div);
  const toast = ReactDom.render(<ToastContainer></ToastContainer>, div);
  let defaultProps: ToastProps = {
    type: 'message',
    position: 'top',
    duration: 2000
  };
  return {
    info: (info: ToastItemProps) => {
      toast.pushToastItem(Object.assign({}, defaultProps, info));
    },
    desdroy: () => {
      ReactDom.unmountComponentAtNode(div);
    },
    setDefaultOptions(info: ToastProps) {
      defaultProps = Object.assign({}, defaultProps, info);
    }
  };
};
export default createToast();
