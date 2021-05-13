/*
 * @Author: zhaohui
 * @Date: 2021-05-12 18:14:09
 * @LastEditTime: 2021-05-13 17:49:01
 * @LastEditors: zhaohui
 * @Description:
 * @FilePath: /vant-react/src/components/Cell/types.ts
 */
import { ReactElement } from 'react';
import { IProps as RadioProps } from '../Radio/types';
import { IProps as CheckboxProps } from '../Checkbox/index';

export interface IProps {
  title?: { text: string; fontSize: string };
  titleIcon?: { name: string; size: string };
  content?: { text: string; fontSize: string };
  contentIcon?: { name: string; size: string } | null;
  description?: { text: string; fontSize: string };
  checkbox?: CheckboxProps;
  radio?: RadioProps;
  tag?: ReactElement;
  url?: string;
  replace?: boolean;
  round?: boolean;
  onClick?: Function;
}

export interface GroupProps {
  title?: string | ReactElement;
}