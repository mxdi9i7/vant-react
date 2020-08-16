import { ReactNode } from 'react';

export interface IProps {
  name?: string;
  children?: ReactNode;
  layout?: FormLayout;
  itemAlign?: FormItemAlign;
  submit?: Function;
}

export type FormLayout = 'vertical' | 'horizontal';
export type FormItemAlign = 'right' | 'left' | 'center';
