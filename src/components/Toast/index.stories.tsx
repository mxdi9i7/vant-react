/*
 * @Author: zhaohui
 * @Date: 2021-05-17 14:21:43
 * @LastEditTime: 2021-05-18 15:03:01
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
      ></Cell>
      <Cell
        {...{
          title: {
            text: 'Toast bottom',
            fontSize: '12px'
          },
          onClick: () =>
            Toast.info({ message: 'Toast bottom', position: 'bottom' })
        }}
      ></Cell>
      <Cell
        {...{
          title: {
            text: 'Toast center',
            fontSize: '12px'
          },
          onClick: () =>
            Toast.info({ message: 'Toast top', position: 'center' })
        }}
      ></Cell>
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
            Toast.info({ message: 'ToastSuccess', type: 'success' })
        }}
      ></Cell>
      <Cell
        {...{
          title: {
            text: 'ToastFail',
            fontSize: '12px'
          },
          onClick: () => Toast.info({ message: 'ToastFail', type: 'fail' })
        }}
      ></Cell>
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
              icon: <Icon name='good-job-o'></Icon>
            })
        }}
      ></Cell>
      <Cell
        {...{
          title: {
            text: 'Toast user set img',
            fontSize: '12px'
          },
          onClick: () =>
            Toast.info({
              message: 'Toast user set img',
              icon: <img width="28" src="https://img.yzcdn.cn/vant/logo.png" /> 
            })
        }}
      ></Cell>
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
      ></Cell>
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
      ></Cell>
    </div>
  );
};
