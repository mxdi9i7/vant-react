/*
 * @Author: zhaohui
 * @Date: 2021-05-17 14:21:43
 * @LastEditTime: 2021-05-26 11:25:59
 * @LastEditors: zhaohui
 * @Description:
 * @FilePath: /vant-react/src/components/Toast/index.stories.tsx
 */
import React from 'react';
import Toast from '.';
import Cell from '../Cell';
import Icon from '../Icons';

import '../../styles/stories.scss';

export default {
  title: 'Toast',
  component: Toast
};
export const BasicUsage = () => {
  return (
    <div className='storybook__container column grey'>
      <Cell
        {...{
          title: {
            text: 'BaseUsage',
            fontSize: '12px'
          },
          onClick: () => Toast.info({ message: 'Base Usage' })
        }}
      />
      <Cell
        {...{
          title: {
            text: 'Toast bottom',
            fontSize: '12px'
          },
          onClick: () =>
            Toast.info({ message: 'Toast bottom', position: 'bottom' })
        }}
      />
      <Cell
        {...{
          title: {
            text: 'Toast center',
            fontSize: '12px'
          },
          onClick: () =>
            Toast.info({ message: 'Toast center', position: 'center' })
        }}
      />
    </div>
  );
};

export const ToastStatus = () => {
  return (
    <div className='storybook__container column grey'>
      <Cell
        {...{
          title: {
            text: 'ToastSuccess',
            fontSize: '12px'
          },
          onClick: () =>
            Toast.info({ message: 'ToastSuccess', type: 'checked' })
        }}
      />
      <Cell
        {...{
          title: {
            text: 'ToastFail',
            fontSize: '12px'
          },
          onClick: () => Toast.info({ message: 'ToastFail', type: 'fail' })
        }}
      />
    </div>
  );
};
export const ToastLoading = () => {
  return (
    <div className='storybook__container column grey'>
      <Cell
        {...{
          title: {
            text: 'ToastLoadingWithString',
            fontSize: '12px'
          },
          onClick: () => Toast.Loading('Loading')
        }}
      />
      <Cell
        {...{
          title: {
            text: 'ToastLoadingWithSpinner',
            fontSize: '12px'
          },
          onClick: () =>
            Toast.Loading({
              type: 'spinner',
              message: 'ToastLoadingWithSpinner'
            })
        }}
      />
      <Cell
        {...{
          title: {
            text: 'ToastLoadingWithCircular',
            fontSize: '12px'
          },
          onClick: () =>
            Toast.Loading({
              type: 'circular',
              message: 'ToastLoadingWithCpinner'
            })
        }}
      />
      <Cell
        {...{
          title: {
            text: 'ToastLoadingBackSync',
            fontSize: '12px'
          },
          onClick: () => toastSync()
        }}
      />
    </div>
  );
};

export const ToastUserSet = () => {
  return (
    <div className='storybook__container column grey'>
      <Cell
        {...{
          title: {
            text: 'Toast user set icon',
            fontSize: '12px'
          },
          onClick: () =>
            Toast.info({
              message: 'Toast user set icon',
              icon: <Icon name='good-job-o' />
            })
        }}
      />
      <Cell
        {...{
          title: {
            text: 'Toast user set img',
            fontSize: '12px'
          },
          onClick: () =>
            Toast.info({
              message: 'Toast user set img',
              icon: <img width='28' src='https://img.yzcdn.cn/vant/logo.png' />
            })
        }}
      />
    </div>
  );
};

export const ToastSetDefaultOptionGlobal = () => {
  return (
    <div className='storybook__container column grey'>
      <Cell
        {...{
          title: {
            text: 'Set default option 5000ms',
            fontSize: '12px'
          },
          onClick: () =>
            Toast.setDefaultOptions({
              duration: 5000
            })
        }}
      />
      <Cell
        {...{
          title: {
            text: 'Set default option 1000ms',
            fontSize: '12px'
          },
          onClick: () =>
            Toast.setDefaultOptions({
              duration: 1000
            })
        }}
      />
    </div>
  );
};

const toastSync = () => {
  Toast.Loading({
    type: 'circular',
    message: 'ToastLoadingBackSync'
  }).then(() => {
    alert('finished');
  });
};
