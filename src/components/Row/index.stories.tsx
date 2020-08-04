import React from 'react';
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
      <Column span='8' />
      <Column span='8' />
      <Column span='8' />
    </Row>
    <Row>
      <Column span='4' />
      <Column span='10' offset='4' />
      <Column span='6' />
    </Row>
    <Row>
      <Column span='12' offset='12' />
    </Row>
  </div>
);
export const ColumnSpacing = () => (
  <div className='container'>
    <Row gutter='20'>
      <Column span='8' />
      <Column span='8' />
      <Column span='8' />
    </Row>
  </div>
);
export const FlexLayout = () => (
  <div className='container'>
    <Row type='flex'>
      <Column span='6' />
      <Column span='6' />
      <Column span='6' />
    </Row>
    <Row type='flex' justify='center'>
      <Column span='6' />
      <Column span='6' />
      <Column span='6' />
    </Row>
    <Row type='flex' justify='flex-end'>
      <Column span='6' />
      <Column span='6' />
      <Column span='6' />
    </Row>
    <Row type='flex' justify='space-between'>
      <Column span='6' />
      <Column span='6' />
      <Column span='6' />
    </Row>
    <Row type='flex' justify='space-around'>
      <Column span='6' />
      <Column span='6' />
      <Column span='6' />
    </Row>
  </div>
);
