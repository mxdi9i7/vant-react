import React, { FC } from 'react';
import classnames from '../../utils/classNames';

import './index.scss';

export type contentPosition = 'center' | 'left' | 'right';
export interface DividerProps {
  dashed?: boolean;
  hairline?: boolean;
  contentPosition?: contentPosition;
  className?: string;
}
const baseClass = 'vant-divider';
const Divider: FC<DividerProps> = ({
  dashed = false,
  hairline = true,
  contentPosition = 'center',
  children,
  className,
  ...restProps
}) => {
  if (children) {
    className = classnames(baseClass, [
      { dashed },
      { hairline },
      { type: 'content-' + contentPosition }
    ]);
  } else {
    className = classnames(baseClass, [{ dashed }, { hairline }]);
  }
  return (
    <div className={className} role='separator' {...restProps}>
      {children || ''}
    </div>
  );
};
export default Divider;
