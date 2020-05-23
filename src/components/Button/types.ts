export interface Props {
  text?: string;
  children?: string;
  plain?: boolean;
  disabled?: boolean;
  loading?: boolean;
  loadingType?: LoadingTypes;
  loadingText?: string;
  type?: ButtonTypes;
}

export interface LoadingIconProps {
  className: string;
  loadingType: LoadingTypes;
  loadingText?: string;
}

export type LoadingTypes = 'spinner' | 'circular' | undefined;

export type ButtonTypes = 'default' | 'primary' | 'warning' | 'info' | 'danger';
