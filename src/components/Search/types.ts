import { ReactElement } from 'react';
import { TAlignment } from '../Field/types';

export interface IProps {
  label?: string;
  labelWidth?: string;
  labelAlign?: TAlignment;
  shape?: 'round' | 'square';
  background?: string;
  maxLength?: number;
  placeholder?: string;
  errorMessage?: string;
  clearable?: boolean;
  autofocus?: boolean;
  showAction?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  error?: boolean;
  inputAlign?: TAlignment;
  leftIcon?: string;
  rightIcon?: string;
  actionText?: string;
  search?: Function;
  input?: Function;
  focus?: Function;
  blur?: Function;
  clear?: Function;
  cancel?: Function;
  action?: ReactElement;
}
