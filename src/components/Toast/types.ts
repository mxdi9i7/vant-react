/*
 * @Author: zhaohui
 * @Date: 2021-05-14 09:32:24
 * @LastEditTime: 2021-05-26 11:17:15
 * @LastEditors: zhaohui
 * @Description:
 * @FilePath: /vant-react/src/components/Toast/types.ts
 */
import React from 'react';
import { LoadingTypes } from '../Button/types';
export interface ToastProps {
  overlay?: boolean;
  message?: React.ReactNode;
  type?: 'message' | 'loading' | 'fail' | 'checked';
  position?: 'center' | 'top' | 'bottom';
  icon?: React.ReactNode;
  duration?: number;
  loadingType?: LoadingTypes;
}
export interface ToastItemProps extends ToastProps {
  id?: string;
}
export interface LoadingOption {
  type?: LoadingTypes;
  duration?: number;
  message?: string;
}
export const baseClass = 'vant-toast';
