import { ReactElement } from 'react';

export interface IProps {
  title?: [string, string];
  titleIcon?: [string, string];
  content?: [string, string];
  contentIcon?: [string, string];
  description?: string;
  Tag?: ReactElement;
  url?: string;
  replace?: boolean;
  round?: boolean;
  click?: Function;
}
