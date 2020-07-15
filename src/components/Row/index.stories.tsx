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
    <Row>
      <Column span='8' color='#39a9ed' />
      <Column span='8' color='#66c6f2' />
      <Column span='8' color='#39a9ed' />
    </Row>
  </div>
);
export const ColumnSpacing = () => (
  <div className='container'>
    <Row gutter='20px'>
      <Column span='8' color='#39a9ed' />
      <Column span='8' color='#66c6f2' />
      <Column span='8' color='#39a9ed' />
    </Row>
  </div>
);
export const FlexLayout = () => (
  <div className='container'>
    <Row type='flex'>
      <Column span='6' color='#39a9ed' />
      <Column span='6' color='#66c6f2' />
      <Column span='6' color='#39a9ed' />
    </Row>
    <Row type='flex' justify='center'>
      <Column span='6' color='#39a9ed' />
      <Column span='6' color='#66c6f2' />
      <Column span='6' color='#39a9ed' />
    </Row>
  </div>
);
