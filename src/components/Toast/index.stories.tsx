import React from 'react';
import Toast from './Toast';
import Cell from '../Cell';
import { IProps } from '../Cell/types';

import '../../styles/stories.scss';

export default {
  title: 'Toast',
  component: Toast
};
export const BasicUsage = () => {

  return (
    <div className='storybook__container column grey'>
      <Cell
        {...{
          title: {
            text: 'BaseUsage',
            fontSize: '12px'
          },
          onClick: () => Toast('123')
        }}
      ></Cell>
    </div>
  );
};
