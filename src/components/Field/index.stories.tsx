import React from 'react';
import Field from '.';
import '../../styles/stories.scss';

export default {
  title: 'Field',
  component: Field
};

export const BasicUsage = () => (
  <div className='container column grey'>
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

export const Disabled = () => (
  <div className='container column grey'>
    <Field disabled value='Input Disabled' />
    <Field readonly value='Input Readonly' />
  </div>
);

export const Colon = () => (
  <div className='container column grey'>
    <Field colon />
  </div>
);

export const ShowIcon = () => (
  <div className='container column grey'>
    <Field leftIcon='phone-o' rightIcon='cart-o' />
    <Field leftIcon='fire-o' rightIcon='success' />
    <Field leftIcon='fire-o' rightIcon='success' clearable />
  </div>
);
