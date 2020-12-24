import { CSSProperties } from 'react';

export interface Props {
  dashed?: boolean;
  hairline?: boolean;
  contentPosition?: 'left' | 'center' | 'right';
  children?: string;
  style?: CSSProperties;
}
