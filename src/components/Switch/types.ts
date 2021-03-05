export interface IProps {
  checked?: boolean;
  disabled?: boolean;
  size?: number | string;
  activeColor?: string;
  inactiveColor?: string;
  onClick?: Function;
  onChange?: Function;
  loading?: boolean;
  loadingText?: string;
  loadingSize?: string;
  loadingType?: LoadingTypes;
}

export interface LoadingIconProps {
  className: string;
  loadingType: LoadingTypes;
  loadingText?: string;
  loadingSize?: string;
}

export type LoadingTypes = 'spinner' | 'circular' | undefined;
