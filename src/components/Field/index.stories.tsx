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
