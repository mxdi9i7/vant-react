/*
 * @Author: zhaohui
 * @Date: 2021-05-29 12:11:37
 * @LastEditTime: 2021-05-30 15:45:07
 * @LastEditors: zhaohui
 * @Description:
 * @FilePath: /vant-react/src/components/ActionSheet/ActionSheet.tsx
 */
import React from 'react';
import { ActionSheetProps, ActionItem, BaseClass } from './types';
import classnames from '../../utils/classNames';
import { renderLoadingIcon } from '../Button/helper';
import Icon from '../Icons';
import './index.scss';

const ActionSheet = ({
  actions,
  cancelText,
  description,
  cancelClick,
  closeIcon,
  closeable,
  title
}: ActionSheetProps) => {
  const containerStyle = {
    className: classnames(`${BaseClass}__container`, []),
    style: {}
  };
  const actionCon = {
    className: classnames(`${BaseClass}__action__con`, []),
    style: {}
  };
  const actionDescription = {
    className: classnames(`${BaseClass}__description`, []),
    style: {}
  };
  const actionItem = {
    className: classnames(`${BaseClass}__action__item`, []),
    style: {}
  };
  const actionItemSubName = {
    className: classnames(`${BaseClass}__action__item__subName`, []),
    style: {}
  };
  const _closeIcon = {
    className: classnames(`${BaseClass}__close`, []),
    style: {}
  };
  const _titleStyle = {
    className: classnames(`${BaseClass}__title`, []),
    style: {}
  };
  return (
    <div {...containerStyle}>
      {closeable && (
        <div
          {...Object.assign({}, _closeIcon, {
            onClick: () => cancelClick && cancelClick()
          })}
        >
          {typeof closeIcon === 'string' ? (
            <Icon name={closeIcon} />
          ) : (
            <Icon name='cross' />
          )}
        </div>
      )}

      <div {...actionCon}>
        {title && typeof title === 'string' ? (
          <div {..._titleStyle}>{title}</div>
        ) : (
          title
        )}
        {description && typeof description === 'string' ? (
          <div {...actionDescription}>{description}</div>
        ) : (
          description
        )}
        {actions &&
          actions.map((item: ActionItem) => (
            <button
              disabled={item.disabled}
              {...{
                className: classnames(`${BaseClass}__action__item`, [
                  {
                    [item.className || '']: true
                  }
                ]),
                style: {}
              }}
              key={item.value}
              onClick={() => item.callback && item.callback(item)}
            >
              <div
                {...{
                  className: classnames(`${BaseClass}__action__item__name`, [
                    {
                      danger: item.danger
                    }
                  ])
                }}
              >
                <span>{!item.loading && item.name}</span>{' '}
                {item.loading &&
                  renderLoadingIcon({
                    loadingType: item.loadingType || 'circular',
                    className: `${BaseClass}__action__item__loading`,
                    loadingSize: 'large'
                  })}
              </div>
              <div {...actionItemSubName}>{item.subname && item.subname}</div>
            </button>
          ))}
        {cancelText && <div className={`${BaseClass}__gap`} />}
        {cancelText && typeof cancelText === 'string' ? (
          <button
            {...Object.assign({}, actionItem, {
              style: {
                color: '#969799',
                fontSize: '14px'
              },
              onClick: () => cancelClick && cancelClick()
            })}
          >
            {cancelText}
          </button>
        ) : (
          cancelText
        )}
      </div>
    </div>
  );
};
export default ActionSheet;
