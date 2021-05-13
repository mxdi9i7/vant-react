/*
 * @Author: zhaohui
 * @Date: 2021-05-13 10:21:02
 * @LastEditTime: 2021-05-13 15:20:52
 * @LastEditors: zhaohui
 * @Description:
 * @FilePath: /vant-react/src/components/Cell/Group.tsx
 */
import React, { FC } from 'react';

import { GroupProps } from './types';
import './group.scss';
import classnames from '../../utils/classNames';

const baseClass = 'vant-cell-group';
const Group: FC<GroupProps> = ({ children, title }) => {
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
  if (title) {
    GroupTitle = title;
  }
  return (
    <ContainerGroup {...containerProps}>
      <div {...titleProps}>{GroupTitle}</div>
      {children}
    </ContainerGroup>
  );
};
export default React.memo(Group);
