import { ReactElement } from 'react';
import { TAlignment } from '../Field/types';

export interface IProps {
  text?: string;
  color?: string;
  children?: string;
  gutter?: string;

  offset: number;
  justify: string;
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
