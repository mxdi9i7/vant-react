import { ReactElement } from 'react';

export interface Props {
  imageSize?: number | string;
  description?: string | ReactElement;
  image?: string | ReactElement;
  bottom?: ReactElement;
}
