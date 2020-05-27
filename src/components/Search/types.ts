import { TAlignment } from '../Field/types';

export interface IProps {
  label?: string;
  shape?: 'round' | 'square';
  background?: string;
  maxLength?: number;
  placeholder?: string;
  clearable?: boolean;
  autoFocus?: boolean;
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
  foucs?: Function;
  blur?: Function;
  clear?: Function;
  cancel?: Function;
}
