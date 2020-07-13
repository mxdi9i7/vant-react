import React, { useState } from 'react';
import Row from '.';
import '../../styles/stories.scss';
import '../../styles/colors.scss';

export default {
  title: 'Layout',
  component: Row
};

export const BasicUsage = () => (
  <div className='container'>
    <Row
      text='span: 8'
      // firstCol={{ start: 1 }}
      // middleCol={{ start: 9 }}
      // lastCol={{ start: 17 }}
    />
  </div>
);
export const ColumnSpacing = () => (
  <div className='container'>
    <Row gutter='20px' text='span: 8' />
  </div>
);
export const FlexLayout = () => (
  <div className='container'>
    <Row gutter='20px' text='span: 6' />
  </div>
);
