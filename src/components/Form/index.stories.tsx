import React from 'react';
import Form from '.';
import '../../styles/stories.scss';

import Field from '../Field';
import Button from '../Button';

export default {
  title: 'Form',
  component: Form
};

export const BasicUsage = () => (
  <div className='storybook__container form'>
    <Form>
      <Field label='Text' type='text' />
      <Field label='Password' type='password' />
      <Button>Submit</Button>
    </Form>
  </div>
);

export const InlineForm = () => (
  <div className='storybook__container form'>
    <Form layout='horizontal'>
      <Field label='Text' type='text' />
      <Field label='Password' type='password' />
      <Button>Submit</Button>
    </Form>
  </div>
);
