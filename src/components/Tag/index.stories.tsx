import React from 'react';
import Tag from './';

import '../../styles/stories.scss';

export default {
  title: 'Tag',
  component: Tag
};

export const Types = () => (
  <div className='container'>
    <Tag text='Default tag' type='default' />
    <Tag text='Primary tag' type='primary' />
    <Tag text='Info tag' type='info' />
    <Tag text='Warning tag' type='warning' />
    <Tag text='Danger tag' type='danger' />
  </div>
);

export const Plain = () => (
  <div className='container'>
    <Tag text='Default tag' type='default' plain />
    <Tag text='Primary tag' type='primary' plain />
    <Tag text='Info tag' type='info' plain />
    <Tag text='Warning tag' type='warning' plain />
    <Tag text='Danger tag' type='danger' plain />
  </div>
);

export const Sizes = () => (
  <div className='container'>
    <Tag text='Small Tag' type='danger' size='small' />
    <Tag text='Medium Tag' type='primary' size='medium' />
    <Tag text='Large Tag' type='info' size='large' />
  </div>
);

export const CustomColors = () => (
  <div className='container'>
    <Tag text='Tag' color='FFA000' />
    <Tag text='Tag' color='FFECB3' />
    <Tag text='Tag' color='5D4037' />
  </div>
);

export const Round = () => (
  <div className='container'>
    <Tag text='Default tag' round type='default' />
    <Tag text='Primary tag' round type='primary' />
    <Tag text='Info tag' round type='info' />
    <Tag text='Warning tag' round type='warning' />
    <Tag text='Danger tag' round type='danger' />
  </div>
);

export const Mark = () => (
  <div className='container'>
    <Tag text='Default tag' mark type='default' />
    <Tag text='Primary tag' mark type='primary' />
    <Tag text='Info tag' mark type='info' />
    <Tag text='Warning tag' mark type='warning' />
    <Tag text='Danger tag' mark type='danger' />
  </div>
);

export const Closeable = () => (
  <div className='container'>
    <Tag text='Warning tag' color='FFA000' closeable />
    <Tag text='Danger tag' closeable type='danger' />
  </div>
);
