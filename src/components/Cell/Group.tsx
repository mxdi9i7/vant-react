/*
 * @Author: zhaohui
 * @Date: 2021-05-13 10:21:02
 * @LastEditTime: 2021-05-13 19:41:44
 * @LastEditors: zhaohui
 * @Description:
 * @FilePath: /vant-react/src/components/Cell/Group.tsx
 */
import React, { FC } from 'react';

import { GroupProps } from './types';
import './group.scss';
import classnames from '../../utils/classNames';

const baseClass = 'vant-cell-group';
const Group: FC<GroupProps> = (props) => {
  const ContainerGroup = 'div';
  const containerProps = {
    className: classnames(`${baseClass}__container`, []),
    style: {}
  };
  const titleProps = {
    className: classnames(`${baseClass}__title`, []),
    style: {}
  };
  let GroupTitle;
  if (props.title) {
    GroupTitle = props.title;
  }
  return (
    <ContainerGroup {...containerProps}>
      <div {...titleProps}>{GroupTitle}</div>
      {props.children}
    </ContainerGroup>
  );
};
export default React.memo(Group);
