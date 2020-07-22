import { ReactElement } from 'react';
import { TAlignment } from '../Field/types';
import { Props } from '../Row/types';
export interface IProps {
  row?: Props[];
  span?: string;
  color?: string;
  gutter?: string;
  offset?: number;
  justify?: string;
  align?: string;

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
