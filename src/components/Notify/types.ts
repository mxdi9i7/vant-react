import { ReactElement } from 'react';
import { TAlignment } from '../Field/types';

export interface IProps {
  borderRadius?: string;
  textStyle?: {
    color?: string;
    fontSize?: string;
    textAlign?: TAlignment;
  };
  message?: string;
  content?: ReactElement;
  type?: NotifyTypes;
  color?: string;
  children?: string;
  padding?: string;
  closeable?: boolean;
}

export type NotifyTypes = 'primary' | 'success' | 'warning' | 'danger';
