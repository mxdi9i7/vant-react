export interface IProps {
  disabled?: boolean;
  hasValue?: boolean;
  activeColor?: string;
  inactiveColor?: string;
  size?: { width: number; height: number };
  sliderSize?: { width: number; height: number };
  sliderStyle?: {
    color: string;
    fontSize: string;
    backgroundColor: string;
    borderRadius: string;
    borderColor: string;
  };
  range?: { min: number; max: number };
  id?: string;
  value: number | undefined;
  setValue: Function;
}
