export interface IProps {
  isActive: boolean;
  borderRadius?: string;
  text?: string;
  Content?: object;
  type?: PopupTypes;
  color?: string;
  children?: string;
  closeable?: boolean;
  tag?: 'i' | 'span';
  setActive: Function;
  click?: Function;
  touchstart?: Function;
}

export type PopupTypes = 'center' | 'top' | 'bottom' | 'left' | 'right';
