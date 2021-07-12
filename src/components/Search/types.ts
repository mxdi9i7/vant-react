import { ReactElement } from 'react';
import TShape from '../../types/shapes';
import { TAlignment } from '../Field/types';

export interface IProps {
  label?: string;
  labelWidth?: string;
  labelAlign?: TAlignment;
  shape?: TShape;
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
  onSearch?: Function;
  onChange?: Function;
  onFocus?: Function;
  onBlur?: Function;
  onClear?: Function;
  onCancel?: Function;
  action?: ReactElement;
}
