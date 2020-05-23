export interface Props {
  text?: string;
  color?: string;
  children?: string;
  loadingText?: string;
  plain?: boolean;
  loading?: boolean;
  disabled?: boolean;
  round?: boolean;
  square?: boolean;
  block?: boolean;
  tag?: 'button' | 'a';
  nativeType?: 'button' | 'submit' | 'reset';
  type?: ButtonTypes;
  loadingType?: LoadingTypes;
}

export interface LoadingIconProps {
  className: string;
  loadingType: LoadingTypes;
  loadingText?: string;
}

export type LoadingTypes = 'spinner' | 'circular' | undefined;

export type ButtonTypes = 'default' | 'primary' | 'warning' | 'info' | 'danger';
