import React from 'react';
import Template from './';

import '../../styles/stories.scss';

export default {
  title: 'Component Template',
  component: Template
};

export const BasicUsage = () => (
  <div className='storybook__container'>
    <Template foo='bar' bar={420} />
  </div>
);
