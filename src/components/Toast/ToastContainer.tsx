/*
 * @Author: zhaohui
 * @Date: 2021-05-17 18:50:48
 * @LastEditTime: 2021-05-18 14:51:29
 * @LastEditors: zhaohui
 * @Description:
 * @FilePath: /vant-react/src/components/Toast/ToastContainer.tsx
 */
import React, { Component } from 'react';
import classnames from '../../utils/classNames';
import Toast from './Toast';
import './index.scss';
import { ToastProps, baseClass, ToastItemProps } from './types';

interface ToastContainerState {
  toastList: ToastProps[];
}
class ToastContainer extends Component<any, ToastContainerState> {
  constructor(props) {
    super(props);
    this.state = {
      toastList: []
    };
  }
  pushToastItem = (info: ToastItemProps) => {
    let toastList: ToastProps[] = this.state.toastList;
    const toastItem = Object.assign({}, info, { id: getUid() });
    const { duration } = toastItem;
    toastList.push(toastItem);
    this.setState({ toastList }, () => {
      setTimeout(() => {
        this.popToast(toastItem.id);
      }, duration || 2000);
    });
  };
  popToast = (id: string) => {
    let { toastList } = this.state;
    let newToastList: ToastItemProps[] = toastList.filter(
      (item: ToastItemProps) => item.id !== id
    );
    this.setState({
      toastList: newToastList
    });
  };
  render() {
    let toastContainerStyle = {
      className: classnames(`${baseClass}__container`, []),
      style: {}
    };
    let toastMaskStyle = {
      className: classnames(`${baseClass}__mask`, []),
      style: {}
    };
    return (
      <div {...toastContainerStyle}>
        {this.state.toastList.map((item: ToastItemProps) => (
          <div key={item.id}>
            {item.overlay ? <div {...toastMaskStyle}></div> : ''}
            <Toast {...item}></Toast>
          </div>
        ))}
      </div>
    );
  }
}
let toastCount = 0;
const getUid = () => {
  return `${baseClass}__container__${new Date().getTime()}__${toastCount++}`;
};
export default ToastContainer;
