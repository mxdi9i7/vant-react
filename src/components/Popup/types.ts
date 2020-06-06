import { ReactElement } from 'react';
import { TAlignment } from '../Field/types';

export interface IProps {
  isActive: boolean;
  borderRadius?: string;
  size?: [string, string];
  text?: [string, string, string, TAlignment];
  content?: ReactElement;
  type?: PopupTypes;
  color?: string;
  children?: string;
  closeable?: boolean;
  closeIcon?: [string, string];
  closeIconPosition?: object;
  setActive: Function;
  click?: Function;
}

export type PopupTypes = 'center' | 'top' | 'bottom' | 'left' | 'right';
