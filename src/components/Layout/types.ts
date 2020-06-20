import { ReactElement } from 'react';
import { TAlignment } from '../Field/types';

export interface IProps {
  size?: [string, string];
  text?: {
    text: string;
    fontSize: string;
    lineHight: string;
    textAlign: TAlignment;
  };
  content?: ReactElement; //????
  color?: string;
  type?: string;
  gutter?: string; //or number
  span: string;
  offset: number;

  justify: string; //?
  align: string;

  click?: Function;
}

// export type TAlignment = 'center' | 'right' | 'left';

export type JustifyTypes =
  | 'start'
  | 'end'
  | 'center'
  | 'space-around'
  | 'space-between';

//align='top'|'center'|'bottom'
