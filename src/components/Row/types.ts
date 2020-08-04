import { ReactElement, ReactFragment } from 'react';

export interface IProps {
  children?: [ReactElement] | ReactFragment;
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
