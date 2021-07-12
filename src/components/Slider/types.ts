export interface IProps {
  disabled?: boolean;
  hasValue?: boolean;
  activeColor?: string;
  inactiveColor?: string;
  size?: { width: string; height: string };
  sliderSize?: { width: string; height: string };
  sliderStyle?: {
    color?: string;
    fontSize?: string;
    backgroundColor?: string;
    borderRadius?: string;
    borderColor?: string;
  };
  range?: { min: string; max: string };
  id?: string;
  step?: number;
  value: number;
  onSetValue: Function;
}
