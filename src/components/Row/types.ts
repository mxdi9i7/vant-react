import { ReactElement, ReactFragment, ReactNode } from 'react';

export interface IProps {
  // children?: [ReactElement] | ReactFragment;
  children: ReactNode;
  type?: string;
  gutter?: string;
  justify?: JustifyTypes;
  align?: 'center' | 'flex-start' | 'flex-end';
  span?: string;
}

export type JustifyTypes =
  | 'start'
  | 'flex-end'
  | 'center'
  | 'space-around'
  | 'space-between';
