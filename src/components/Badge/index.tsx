import React, { FC, ReactNode } from 'react';
import './index.scss';
import classnames from '../../utils/classNames';
export interface BadgeProps {
  content: string | number | ReactNode;
  color?: string;
  dot?: boolean;
  max: number | string;
}
const baseClass = 'vant-badge';
const Badge: FC<BadgeProps> = ({
  content,
  color = '#ee0a24',
  dot = false,
  max,
  children
}) => {
  const renderContent = () => {
    if (dot) return '';
    if (content) {
      if (!!max && Number.isInteger(+content) && +content > max) {
        return <>{`${max}+`}</>;
      } else {
        if (typeof content === 'string' || typeof content === 'number') {
          return <>{`${content}`}</>;
        } else {
          const ContentComponent = content as FC;
          return <>{ContentComponent ? <ContentComponent /> : null}</>;
        }
      }
    }
    return '';
  };
  const renderBadge = () => {
    return (
      <div
        className={classnames(baseClass, [{ dot }, { fixed: !!children }])}
        style={{ background: color }}
      >
        {renderContent()}
      </div>
    );
  };
  if (children) {
    return (
      <div className='vant-badge__wrapper'>
        {children}
        {renderBadge()}
      </div>
    );
  }
  return <>{renderBadge()}</>;
};
export default Badge;
