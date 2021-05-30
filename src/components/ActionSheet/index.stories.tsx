/*
 * @Author: zhaohui
 * @Date: 2021-05-13 18:18:19
 * @LastEditTime: 2021-05-30 15:51:25
 * @LastEditors: zhaohui
 * @Description:
 * @FilePath: /vant-react/src/components/ActionSheet/index.stories.tsx
 */
import React, { useState } from 'react';
import ActionSheet from '.';
import { ActionItem } from './types';
import Cell from '../Cell';
import '../../styles/stories.scss';
import Toast from '../Toast';

export default {
  title: 'ActionSheet',
  component: ActionSheet
};

export const ActionSheetDefault = () => {
  const [visible, setVisible] = useState(false);
  const actions: ActionItem[] = [
    {
      name: 'Option1',
      value: 1,
      callback: (item: ActionItem) => {
        Toast.info({ message: item.name });
        setVisible(false);
      }
    },
    {
      name: 'Option2',
      value: 2,
      subname: 'This is a description',
      callback: (item: ActionItem) => {
        Toast.info({ message: item.name });
        setVisible(false);
      }
    }
  ];
  return (
    <div className='storybook__container column grey'>
      <Cell
        {...{
          title: {
            text: 'ActionSheetDefault',
            fontSize: '12px'
          },
          onClick: () => {
            setVisible(true);
          }
        }}
      />
      <ActionSheet
        visible={visible}
        maskClick={() => setVisible(false)}
        actions={actions}
      />
    </div>
  );
};
export const ActionSheetWithStatus = () => {
  const [visible, setVisible] = useState(false);
  const actions: ActionItem[] = [
    {
      name: 'Disabled',
      value: 1,
      disabled: true,
      callback: (item: ActionItem) => {
        Toast.info({ message: item.name });
        setVisible(false);
      }
    },
    {
      name: 'Loading...',
      value: 2,
      loading: true,
      callback: (item: ActionItem) => {
        Toast.info({ message: item.name });
        setVisible(false);
      }
    },
    {
      name: 'Danger...',
      value: 3,
      danger: true,
      callback: (item: ActionItem) => {
        Toast.info({ message: item.name });
        setVisible(false);
      }
    }
  ];
  return (
    <div className='storybook__container column grey'>
      <Cell
        {...{
          title: {
            text: 'ActionSheetWithStatus',
            fontSize: '12px'
          },
          onClick: () => {
            setVisible(true);
          }
        }}
      />
      <ActionSheet
        visible={visible}
        maskClick={() => setVisible(false)}
        actions={actions}
      />
    </div>
  );
};
export const ActionSheetWithDiffrentButton = () => {
  const [visibleTitle, setVisibleTitle] = useState(false);
  const [visibleDescription, setVisibleDescription] = useState(false);
  const [visibleCancel, setVisibleCancel] = useState(false);
  const [visibleCancelIcon, setVisibleCancelIcon] = useState(false);
  const actionsTitle: ActionItem[] = [
    {
      name: 'Option',
      value: 1,
      callback: (item: ActionItem) => {
        Toast.info({ message: item.name });
        setVisibleTitle(false);
      }
    }
  ];
  const actionsCancel: ActionItem[] = [
    {
      name: 'Option',
      value: 1,
      callback: (item: ActionItem) => {
        Toast.info({ message: item.name });
        setVisibleTitle(false);
      }
    }
  ];
  const actionsCancelIcon: ActionItem[] = [
    {
      name: 'Option',
      value: 1,
      callback: (item: ActionItem) => {
        Toast.info({ message: item.name });
        setVisibleTitle(false);
      }
    }
  ];
  const actionTitle: ActionItem[] = [
    {
      name: 'Option',
      value: 1,
      callback: (item: ActionItem) => {
        Toast.info({ message: item.name });
        setVisibleTitle(false);
      }
    }
  ];
  const actionsDescription: ActionItem[] = [
    {
      name: 'Option',
      value: 1,
      callback: (item: ActionItem) => {
        Toast.info({ message: item.name });
        setVisibleTitle(false);
      }
    }
  ];
  return (
    <div className='storybook__container column grey'>
      <Cell
        {...{
          title: {
            text: 'Title',
            fontSize: '12px'
          },
          onClick: () => {
            setVisibleTitle(true);
          }
        }}
      />
      <Cell
        {...{
          title: {
            text: 'Description',
            fontSize: '12px'
          },
          onClick: () => {
            setVisibleDescription(true);
          }
        }}
      />
      <Cell
        {...{
          title: {
            text: 'CancelText',
            fontSize: '12px'
          },
          onClick: () => {
            setVisibleCancel(true);
          }
        }}
      />
      <Cell
        {...{
          title: {
            text: 'CancelIcon',
            fontSize: '12px'
          },
          onClick: () => {
            setVisibleCancelIcon(true);
          }
        }}
      />
      <ActionSheet
        visible={visibleTitle}
        maskClick={() => setVisibleTitle(false)}
        actions={actionTitle}
        title='This is title'
      />
      <ActionSheet
        visible={visibleDescription}
        maskClick={() => setVisibleDescription(false)}
        actions={actionsDescription}
        description='This is description'
      />
      <ActionSheet
        visible={visibleCancel}
        cancelText='CancelButton'
        cancelClick={() => setVisibleCancel(false)}
        actions={actionsCancel}
      />
      <ActionSheet
        visible={visibleCancelIcon}
        cancelText='CancelButton'
        cancelClick={() => setVisibleCancelIcon(false)}
        closeable
        actions={actionsCancelIcon}
      />
      <ActionSheet
        visible={visibleCancelIcon}
        cancelText='CancelButton'
        cancelClick={() => setVisibleCancelIcon(false)}
        closeable
        actions={actionsTitle}
      />
    </div>
  );
};
