import React from 'react';

import classnames from '../../utils/classNames';

import './index.scss';
import Icon from '../Icons';
import { IProps } from './types';

const baseClass = 'vant-cell';

const Cell = ({
  title,
  titleIcon,
  content,
  contentIcon,
  description,
  Tag,
  url,
  replace,
  round,
  click
}: IProps) => {
  const CustomTag = url ? 'a' : 'div';
  const containerProps = {
    className: classnames(`${baseClass}__container`, []),
    style: {}
  };
  const titleProps = {
    className: classnames(`${baseClass}__title`, [])
  };
  const contentProps = {
    className: classnames(`${baseClass}__content`, [])
  };

  if (round)
    Object.assign(containerProps, {
      style: { ...containerProps.style, borderRadius: '16px' }
    });

  if (url) {
    Object.assign(containerProps, {
      href: url
    });
    if (replace) {
      Object.assign(containerProps, {
        target: '_self'
      });
    } else {
      Object.assign(containerProps, {
        target: '_blank'
      });
    }
  }

  if (click) {
    Object.assign(containerProps, {
      onClick: click
    });
  }

  return (
    <CustomTag {...containerProps}>
      <div className={`${baseClass}__block`}>
        <div {...titleProps}>
          {titleIcon && <Icon name={titleIcon.name} size={titleIcon.size} />}
          {title && (
            <span style={{ fontSize: title.fontSize }}>{title.text}</span>
          )}
          {Tag && Tag}
        </div>
        <div {...contentProps}>
          {content && (
            <p style={{ fontSize: content.fontSize }}>{content.text}</p>
          )}
          {contentIcon && (
            <Icon name={contentIcon.name} size={contentIcon.size} />
          )}
        </div>
      </div>
      {description && (
        <p style={{ fontSize: description.fontSize }}>{description.text}</p>
      )}
    </CustomTag>
  );
};

export default Cell;
