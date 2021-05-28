/*
 * @Author: zhaohui
 * @Date: 2021-05-17 18:50:48
 * @LastEditTime: 2021-05-26 11:27:45
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
let timer;
class ToastContainer extends Component<any, ToastContainerState> {
  constructor(props) {
    super(props);
    this.state = {
      toastList: []
    };
  }

  pushToastItem = (info: ToastItemProps): void | Promise<void> => {
    const toastItem = Object.assign({}, info, { id: getUid() });
    const { duration } = toastItem;
    clearTimeout(timer);
    if (toastItem.type === 'loading') {
      return new Promise((resolve) => {
        this.setState({ toastList: [toastItem] }, () => {
          timer = setTimeout(() => {
            this.popToast(toastItem.id);
            clearTimeout(timer);
            resolve();
          }, duration || 2000);
        });
      });
    } else {
      this.setState({ toastList: [toastItem] }, () => {
        timer = setTimeout(() => {
          this.popToast(toastItem.id);
        }, duration || 2000);
      });
    }
  };

  popToast = (id: string) => {
    const { toastList } = this.state;
    const newToastList: ToastItemProps[] = toastList.filter(
      (item: ToastItemProps) => item.id !== id
    );
    this.setState({
      toastList: newToastList
    });
  };

  render() {
    const toastContainerStyle = {
      className: classnames(`${baseClass}__container`, []),
      style: {}
    };
    const toastMaskStyle = {
      className: classnames(`${baseClass}__mask`, []),
      style: {}
    };
    return (
      <div {...toastContainerStyle}>
        {this.state.toastList.map((item: ToastItemProps) => (
          <div key={item.id}>
            {item.overlay ? <div {...toastMaskStyle} /> : ''}
            <Toast {...item} />
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
