/*
 * @Author: zhaohui
 * @Date: 2021-05-17 14:50:33
 * @LastEditTime: 2021-05-26 11:21:13
 * @LastEditors: zhaohui
 * @Description:
 * @FilePath: /vant-react/src/components/Toast/CreateToast.tsx
 */
import ReactDom from 'react-dom';
import React from 'react';
import ToastContainer from './ToastContainer';
import { ToastItemProps, ToastProps, LoadingOption } from './types';

const createToast = () => {
  const div = document.createElement('div');
  document.body.appendChild(div);
  const toast = ReactDom.render(<ToastContainer />, div);
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
    },
    Loading: (option: LoadingOption | string) => {
      if (typeof option === 'string') {
        return toast.pushToastItem(
          Object.assign({}, defaultProps, {
            message: option,
            type: 'loading',
            loadingType: 'circular'
          })
        );
      } else {
        return toast.pushToastItem(
          Object.assign({}, defaultProps, {
            type: 'loading',
            message: option.message,
            duration: option.duration,
            loadingType: option.type
          })
        );
      }
    }
  };
};
export default createToast();
