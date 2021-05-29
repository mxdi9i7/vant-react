/*
 * @Author: zhaohui
 * @Date: 2021-05-13 18:18:19
 * @LastEditTime: 2021-05-29 12:22:25
 * @LastEditors: zhaohui
 * @Description:
 * @FilePath: /vant-react/src/components/ActionSheet/index.stories.tsx
 */
import React from 'react';
import ActionSheet from '.';
import Cell from '../Cell'
import '../../styles/stories.scss';

export default {
  title: 'ActionSheet',
  component: ActionSheet
};

export const ActionSheetDefault = () => {
  return (
    <div className='storybook__container column grey'>
      <Cell {...{
          title: {
            text: 'ActionSheetDefault',
            fontSize: '12px',
        },
        onClick: () => {}
      }} />
      <ActionSheet visible={true}/>
    </div>
  );
};
