/*
 * @Author: zhaohui
 * @Date: 2021-05-12 18:14:09
 * @LastEditTime: 2021-05-13 18:27:10
 * @LastEditors: zhaohui
 * @Description:
 * @FilePath: /vant-react/src/components/Cell/index.stories.tsx
 */
import React from 'react';

import Cell from './Cell';
import Tag from '../Tag';
import '../../styles/stories.scss';

export default {
  title: 'Cell',
  component: Cell
};

export const BasicUsage = () => (
  <div className='storybook__container column grey'>
    <Cell
      title={{ text: 'Title', fontSize: '14px' }}
      content={{ text: 'Content', fontSize: '12px' }}
    />
    <Cell
      title={{ text: 'Title', fontSize: '14px' }}
      content={{ text: 'Content', fontSize: '12px' }}
      description={{ text: 'description', fontSize: '12px' }}
    />
  </div>
);

export const cellIcon = () => (
  <div className='storybook__container column grey'>
    <Cell
      titleIcon={{ name: 'location-o', size: '12px' }}
      title={{ text: 'Title', fontSize: '14px' }}
      contentIcon={{ name: 'arrow', size: '12px' }}
      content={{ text: 'Content', fontSize: '12px' }}
    />
  </div>
);

export const cellTag = () => (
  <div className='storybook__container column grey'>
    <Cell
      title={{ text: 'Title', fontSize: '14px' }}
      tag={<Tag type='danger' text='Tag' />}
      content={{ text: 'Content', fontSize: '12px' }}
    />
  </div>
);

export const roundCell = () => (
  <div className='storybook__container column grey'>
    <Cell title={{ text: 'Title', fontSize: '14px' }} round />
  </div>
);

export const valueOnly = () => (
  <div className='storybook__container column grey'>
    <Cell content={{ text: 'Content', fontSize: '14px' }} />
  </div>
);

export const URL = () => (
  <div className='storybook__container column grey'>
    <Cell
      title={{ text: 'URL', fontSize: '14px' }}
      url='https://www.google.com'
      replace
    />
  </div>
);

export const checkbox = () => (
  <div className='storybook__container column grey'>
    <Cell
      title={{ text: 'Title', fontSize: '14px' }}
      content={{ text: 'Content', fontSize: '12px' }}
      description={{ text: 'description', fontSize: '12px' }}
      checkbox={{ checkedColor: '#b90000' }}
    />
  </div>
);

export const OnClick = () => (
  <div className='storybook__container column grey'>
    <Cell
      title={{ text: 'Click', fontSize: '14px' }}
      onClick={(e) => {
        alert(e);
      }}
    />
  </div>
);

export const CellGroup = () => {
  return (
    <div className='storybook__container column grey'>
      <Cell.Group title='CellGroupTitle'>
        <Cell title={{ text: 'Title', fontSize: '14px' }} />
      </Cell.Group>
    </div>
  );
};
