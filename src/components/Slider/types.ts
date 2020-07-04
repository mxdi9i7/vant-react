export interface IProps {
  disabled?: Boolean;
  vertical?: Boolean;
  barHeight?: Number;
  buttonSize?: Number;
  activeColor?: String;
  inactiveColor?: String;
  size?: { width: number; height: number };
  sliderSize?: { width: number; height: number };
  range?: { min: number; max: number };
  step?: Number;
  value?: Number;
  setValue: Function;
}
