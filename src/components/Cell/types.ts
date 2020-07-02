import { ReactElement } from 'react';

export interface IProps {
  title?: { text: string; fontSize: string };
  titleIcon?: { name: string; size: string };
  content?: { text: string; fontSize: string };
  contentIcon?: { name: string; size: string };
  description?: { text: string; fontSize: string };
  Tag?: ReactElement;
  url?: string;
  replace?: boolean;
  round?: boolean;
  click?: Function;
}
