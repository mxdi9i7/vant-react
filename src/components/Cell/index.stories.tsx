import React from 'react';
import Cell from '.';
import Tag from '../Tag';
import '../../styles/stories.scss';

export default {
  title: 'Cell',
  component: Cell
};

export const BasicUsage = () => (
  <div className='container column grey'>
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
  <div className='container column grey'>
    <Cell
      titleIcon={{ name: 'location-o', size: '12px' }}
      title={{ text: 'Title', fontSize: '14px' }}
      contentIcon={{ name: 'arrow', size: '12px' }}
      content={{ text: 'Content', fontSize: '12px' }}
    />
  </div>
);

export const cellTag = () => (
  <div className='container column grey'>
    <Cell
      title={{ text: 'Title', fontSize: '14px' }}
      Tag={<Tag type='danger' text='Tag' />}
      content={{ text: 'Content', fontSize: '12px' }}
    />
  </div>
);

export const roundCell = () => (
  <div className='container column grey'>
    <Cell title={{ text: 'Title', fontSize: '14px' }} round />
  </div>
);

export const valueOnly = () => (
  <div className='container column grey'>
    <Cell content={{ text: 'Content', fontSize: '14px' }} />
  </div>
);

export const URL = () => (
  <div className='container column grey'>
    <Cell
      title={{ text: 'URL', fontSize: '14px' }}
      url='www.google.com'
      replace
    />
  </div>
);

export const Active = () => (
  <div className='container column grey'>
    <Cell
      title={{ text: 'Click', fontSize: '14px' }}
      click={(e) => {
        alert(e);
      }}
    />
  </div>
);
