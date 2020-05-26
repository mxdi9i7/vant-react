import React from 'react';
import Field from '.';
import '../../styles/stories.scss';

export default {
  title: 'Field',
  component: Field
};

export const BasicUsage = () => (
  <div className='container grey'>
    <Field />
  </div>
);

export const CustomTypes = () => (
  <div className='container column grey'>
    <Field label='Text' type='text' />
    <Field label='Phone' type='tel' />
    <Field label='Digit' type='digit' />
    <Field label='Number' type='number' />
    <Field label='Password' type='password' />
  </div>
);
