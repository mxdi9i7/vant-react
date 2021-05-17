/*
 * @Author: zhaohui
 * @Date: 2021-05-14 09:30:56
 * @LastEditTime: 2021-05-14 21:19:36
 * @LastEditors: zhaohui
 * @Description:
 * @FilePath: /vant-react/src/components/Toast/Toast.tsx
 */
import React, { useState, useEffect, forwardRef, useRef } from 'react';
import classnames from '../../utils/classNames';
import ReactDom from 'react-dom';
import { ToastProps } from './types';
const baseClass = 'vant-toast';
const Toast = (props: ToastProps) => {
    const toastContainer = {
        className: classnames(`${baseClass}__container`, []),
        style: {}
      };
      const init = () => {
        console.log(1111);
      };
      return <div {...toastContainer}>这个是toast</div>;
} 

const createToast = (option?: ToastProps | string) => {
  const div = document.createElement('div');
  document.body.appendChild(div);
//   const ref = useRef();
  ReactDom.render(React.forwardRef((props: ToastProps, ref) => <Toast ref={ref}/>), div);
//   console.log(ref);
  if (typeof option === 'string') {
  } else {
    return {};
  }
};
export default createToast;
