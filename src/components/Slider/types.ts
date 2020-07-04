export interface IProps {
  disabled?: Boolean;
  vertical?: Boolean;
  activeColor?: String;
  inactiveColor?: String;
  size?: { width: number; height: number };
  sliderSize?: { width: number; height: number };
  range?: { min: number; max: number };
  step?: Number;
  value: Number | undefined;
  setValue: Function;
}
