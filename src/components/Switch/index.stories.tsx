import React from 'react';
import Switch from '.';

import '../../styles/stories.scss';

export default {
  title: 'Switch',
  component: Switch
};

export const BasicUsage = () => (
  <div className='storybook__container'>
    <Switch />
  </div>
);

export const Disabled = () => (
  <div className='storybook__container'>
    <Switch />
  </div>
);
