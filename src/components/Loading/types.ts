export type LoadingType = 'circular' | 'spinner';

export interface IProps {
  color?: string;
  type?: LoadingType;
  size?: number | string;
  text?: string;
  textSize?: number | string;
  textColor?: string;
  vertical?: boolean;
}
