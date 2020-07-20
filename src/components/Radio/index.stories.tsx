import React from 'react';
import Radio from '.';

import '../../styles/stories.scss';

export default {
  title: 'Radio',
  component: Radio
};

export const BasicUsage = () => (
  <div className='storybook__container'>
    <Radio foo='bar' bar={420} />
  </div>
);
