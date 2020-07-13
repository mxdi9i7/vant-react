import React, { useState } from 'react';
import Row from './';
import Column from '../Column';
import '../../styles/stories.scss';

export default {
  title: 'Layout',
  component: Row
};

export const BasicUsage = () => (
  <div className='container'>
    <Row />
    <Column span='8' color='#66c6f2' />
    <Column span='8' color='#39a9ed' />
    <Column span='8' color='#66c6f2' />
  </div>
);
export const ColumnSpacing = () => (
  <div className='container'>
    <Row gutter='20px'>
      <Column span='8' color='#66c6f2' />
      <Column span='8' color='#39a9ed' />
      <Column span='8' color='#66c6f2' />
    </Row>
  </div>
);
// export const FlexLayout = () => (
//   // <div className='container'>
//   //   <Column
//   //     text={content}
//   //     firstCol={{ color: '#66c6f2', start: '1', span: content }}
//   //     middleCol={{ color: '#39a9ed', start: '7', span: content }}
//   //     lastCol={{ color: '#66c6f2', start: '13', span: content }}
//   //   />
//   // </div>
// );
