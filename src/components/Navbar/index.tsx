import React, { ReactElement } from 'react';

import Icon from '../Icons';

import classnames from '../../utils/classNames';

import './index.scss';

interface Props {
  title?: string;
  leftText?: string;
  rightText?: string;
  border?: boolean;
  fixed?: boolean;
  leftIcon?: string;
  rightIcon?: string;
  onClickLeft?: Function;
  onClickRight?: Function;
  zIndex?: number;
}

const baseClass = 'vant-navbar';

// TODO: Enable placeholder: Whether to generate a placeholder element when fixed

export default function Navbar({
  title,
  leftText,
  rightText,
  leftIcon,
  rightIcon,
  border,
  fixed,
  zIndex = 1,
  onClickLeft = () => {},
  onClickRight = () => {}
}: Props): ReactElement {
  const navProps = {
    style: {
      zIndex
    },
    className: classnames(baseClass, [{ border }, { fixed }])
  };

  const NAV_ICON_SIZE = '16px';

  return (
    <nav {...navProps}>
      <div className={`${baseClass}__left`} onClick={(e) => onClickLeft(e)}>
        <div className={`${baseClass}__icon--left`} />
        {leftIcon && <Icon name={leftIcon} size={NAV_ICON_SIZE} />}
        <div className={`${baseClass}__text--left`}>{leftText}</div>
      </div>
      <div className={`${baseClass}__title`}>{title || 'Title'}</div>
      <div className={`${baseClass}__right`} onClick={(e) => onClickRight(e)}>
        <div className={`${baseClass}__text--right`}>{rightText}</div>
        {rightIcon && <Icon name={rightIcon} size={NAV_ICON_SIZE} />}
      </div>
    </nav>
  );
}
