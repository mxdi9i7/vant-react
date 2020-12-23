import { ReactElement } from 'react';
import { TAlignment } from '../Field/types';

export interface IProps {
  isActive: boolean;
  borderRadius?: string;
  size?: { width: string; height: string };
  text?: {
    text: string;
    color: string;
    fontSize: string;
    textAlign: TAlignment;
  };
  content?: ReactElement;
  type?: PopupTypes;
  color?: string;
  children?: string;
  padding?: string;
  closeable?: boolean;
  closeIcon?: { name: string; size: string };
  closeIconPosition?: object;
  onSetActive: Function;
  onClick?: Function;
}

export type PopupTypes = 'center' | 'top' | 'bottom' | 'left' | 'right';
