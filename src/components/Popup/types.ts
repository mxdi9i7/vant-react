export interface IProps {
  isActive: boolean;
  borderRadius?: string;
  size?: [string, string];
  text?: [string, string, string, TextAlign];
  Content?: object;
  type?: PopupTypes;
  color?: string;
  children?: string;
  closeable?: boolean;
  closeIcon?: [string, string];
  closeIconPosition?: object;
  setActive: Function;
  click?: Function;
  touchstart?: Function;
}

export type PopupTypes = 'center' | 'top' | 'bottom' | 'left' | 'right';
export type TextAlign =
  | 'start'
  | 'end'
  | 'left'
  | 'right'
  | 'center'
  | 'justify'
  | ' match-parent';
