export interface Props {
  text?: string;
  color?: string;
  fontColor?: string;
  children?: string;
  loadingText?: string;
  loadingSize?: string;
  size?: 'large' | 'small' | 'mini' | 'normal';
  icon?: string;
  hairline?: boolean;
  url?: string;
  plain?: boolean;
  loading?: boolean;
  disabled?: boolean;
  round?: boolean;
  square?: boolean;
  replace?: boolean;
  block?: boolean;
  tag?: 'button' | 'a';
  nativeType?: 'button' | 'submit' | 'reset';
  type?: ButtonTypes;
  loadingType?: LoadingTypes;
  click?: Function;
  touchstart?: Function;
}

export interface LoadingIconProps {
  className: string;
  loadingType: LoadingTypes;
  loadingText?: string;
  loadingSize?: string;
}

export type LoadingTypes = 'spinner' | 'circular' | undefined;

export type ButtonTypes = 'default' | 'primary' | 'warning' | 'info' | 'danger';
