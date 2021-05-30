/*
 * @Author: zhaohui
 * @Date: 2021-05-29 11:34:24
 * @LastEditTime: 2021-05-30 14:47:58
 * @LastEditors: zhaohui
 * @Description:
 * @FilePath: /vant-react/src/components/ActionSheet/types.ts
 */
import { LoadingTypes } from '../Button/types';

export interface ActionSheetProps {
  visible: boolean;
  actions?: ActionItem[];
  title?: string | React.ReactNode;
  cancelText?: string | React.ReactNode;
  description?: string | React.ReactNode;
  closeIcon?: string | React.ReactNode;
  safeAreaInsetBottom?: boolean;
  closeable?: boolean;
  maskClick?: Function; // click mask
  cancelClick?: Function;
}

export interface ActionItem {
  name: string | React.ReactNode;
  value: any;
  subname?: string | React.ReactNode;
  color?: string;
  className?: string;
  loading?: boolean;
  loadingType?: LoadingTypes;
  disabled?: boolean;
  callback?: Function;
  danger?: boolean;
}
export const BaseClass = 'vant-action-sheet';
