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
    <Cell title={['Title', '20px']} content={['Content', '16px']} />
    <Cell
      title={['Title', '16px']}
      content={['Content', '16px']}
      description='description'
    />
  </div>
);

export const cellIcon = () => (
  <div className='container column grey'>
    <Cell
      titleIcon={['location-o', '16px']}
      title={['Title', '20px']}
      contentIcon={['arrow', '16px']}
      content={['Content', '16px']}
    />
  </div>
);

export const cellTag = () => (
  <div className='container column grey'>
    <Cell
      title={['Title', '20px']}
      Tag={<Tag type='danger' text='Tag' />}
      content={['Content', '16px']}
    />
  </div>
);

export const roundCell = () => (
  <div className='container column grey'>
    <Cell title={['Title', '20px']} round />
  </div>
);

export const valueOnly = () => (
  <div className='container column grey'>
    <Cell content={['Content', '16px']} />
  </div>
);

export const URL = () => (
  <div className='container column grey'>
    <Cell title={['URL', '20px']} url='www.google.com' replace />
  </div>
);

export const Active = () => (
  <div className='container column grey'>
    <Cell
      title={['Click', '20px']}
      click={(e) => {
        alert(e);
      }}
    />
  </div>
);
