/*
 * @Author: zhaohui
 * @Date: 2021-05-14 09:32:24
 * @LastEditTime: 2021-05-18 14:15:45
 * @LastEditors: zhaohui
 * @Description:
 * @FilePath: /vant-react/src/components/Toast/types.ts
 */
import React from 'react';
export interface ToastProps {
  overlay?: boolean;
  message?: React.ReactNode;
  type?: 'message' | 'loading' | 'fail' | 'success';
  position?: 'center' | 'top' | 'bottom';
  icon?: React.ReactNode;
  duration?: number;

}
export interface ToastItemProps extends ToastProps {
    id?: string;
}
export const baseClass = 'vant-toast';
