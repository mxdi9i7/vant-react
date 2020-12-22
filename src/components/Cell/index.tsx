import React, { useState } from 'react';

import classnames from '../../utils/classNames';

import './index.scss';
import Icon from '../Icons';
import Checkbox from '../Checkbox';
import { IProps } from './types';
import Radio from '../Radio';

const baseClass = 'vant-cell';

const Cell = ({
  url,
  onClick,
  title,
  titleIcon,
  content,
  contentIcon = url || onClick ? { name: 'arrow', size: '12px' } : null,
  description,
  checkbox,
  radio,
  tag,
  replace,
  round
}: IProps) => {
  const [isActive, setActive] = useState(false);

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

  if (onClick) {
    Object.assign(containerProps, {
      onClick
    });
  }

  if (checkbox) {
    Object.assign(containerProps, {
      onClick: () => {
        setActive(!isActive);
      }
    });
  }

  const renderCustomContent = () => {
    if (checkbox) {
      return (
        <Checkbox
          {...checkbox}
          isActive={isActive}
          checkedColor={checkbox.checkedColor}
        />
      );
    } else if (radio) {
      return <Radio {...radio} checked={isActive} />;
    } else {
      return (
        <div {...contentProps}>
          {content && (
            <p style={{ fontSize: content.fontSize }}>{content.text}</p>
          )}
          {contentIcon && (
            <Icon name={contentIcon.name} size={contentIcon.size} />
          )}
        </div>
      );
    }
  };

  return (
    <CustomTag {...containerProps}>
      <div className={`${baseClass}__block`}>
        <div {...titleProps}>
          {titleIcon && <Icon name={titleIcon.name} size={titleIcon.size} />}
          {title && (
            <span style={{ fontSize: title.fontSize }}>{title.text}</span>
          )}
          {tag && tag}
        </div>
        {renderCustomContent()}
      </div>
      {description && (
        <p style={{ fontSize: description.fontSize }}>{description.text}</p>
      )}
    </CustomTag>
  );
};

export default Cell;
