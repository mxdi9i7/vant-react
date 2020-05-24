import React, { ReactElement } from 'react';

import classnames from '../../utils/classNames';

import './index.scss';

interface Props {
  title?: string;
  leftText?: string;
  rightText?: string;
  border?: boolean;
  fixed?: boolean;
  placeholder?: boolean;
  leftArrow?: boolean;
  clickLeft?: Function;
  clickRight?: Function;
}

const baseClass = 'vant-navbar';

export default function Navbar({
  title,
  leftText,
  rightText,
  leftArrow,
  border,
  fixed,
  placeholder,
  clickLeft,
  clickRight
}: Props): ReactElement {
  return (
    <nav
      className={classnames(baseClass, [
        {
          leftArrow
        },
        {
          border
        },
        { fixed },
        { placeholder }
      ])}
    >
      <div className={`${baseClass}__left`}>
        <div className={`${baseClass}__icon--left`} />
        <div className={`${baseClass}__text--left`}>{leftText}</div>
      </div>
      <div className={`${baseClass}__title`}>{title || 'Title'}</div>
      <div className={`${baseClass}__right`}>
        <div className={`${baseClass}__icon--right`} />
        <div className={`${baseClass}__text--right`}>{rightText}</div>
      </div>
    </nav>
  );
}
