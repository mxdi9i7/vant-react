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
    <Switch disabled />
  </div>
);
export const Loading = () => (
  <div className='storybook__container'>
    <Switch checked loading />
  </div>
);
