export interface IProps {
  currentRate?: number;
  count?: number;
  size?: string;
  icon?: string;
  gutter?: string;
  voidIcon?: string;
  allowHalf?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  color?: string;
  voidColor?: string;
  disabledColor?: string;
  touchable?: boolean;
  change?: Function;
}
