
import { TAlignment } from '../Field/types';

export interface Props {
  children?: string;
  type?: 'grid' | 'flex';
  gutter?: string;
  justify?: JustifyTypes;
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
