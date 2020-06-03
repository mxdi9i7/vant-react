import { ReactElement } from 'react';

export interface IProps {
  isActive: boolean;
  borderRadius?: string;
  size?: [string, string];
  text?: [string, string, string, TextAlign];
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
export type TextAlign = 'left' | 'right' | 'center';
