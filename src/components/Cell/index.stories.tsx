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
      title={{ text: 'Title', fontSize: '20px' }}
      content={['Content', '16px']}
    />
    <Cell
      title={{ text: 'Title', fontSize: '16px' }}
      content={['Content', '16px']}
      description='description'
    />
  </div>
);

export const cellIcon = () => (
  <div className='container column grey'>
    <Cell
      titleIcon={{ name: 'location-o', size: '16px' }}
      title={{ text: 'Title', fontSize: '20px' }}
      contentIcon={{ name: 'arrow', size: '16px' }}
      content={{ text: 'Content', fontSize: '16px' }}
    />
  </div>
);

export const cellTag = () => (
  <div className='container column grey'>
    <Cell
      title={{ text: 'Title', fontSize: '20px' }}
      Tag={<Tag type='danger' text='Tag' />}
      content={{ text: 'Content', fontSize: '16px' }}
    />
  </div>
);

export const roundCell = () => (
  <div className='container column grey'>
    <Cell title={{ text: 'Title', fontSize: '20px' }} round />
  </div>
);

export const valueOnly = () => (
  <div className='container column grey'>
    <Cell content={{ text: 'Content', fontSize: '16px' }} />
  </div>
);

export const URL = () => (
  <div className='container column grey'>
    <Cell
      title={{ text: 'URL', fontSize: '20px' }}
      url='www.google.com'
      replace
    />
  </div>
);

export const Active = () => (
  <div className='container column grey'>
    <Cell
      title={{ text: 'Click', fontSize: '20px' }}
      click={(e) => {
        alert(e);
      }}
    />
  </div>
);
