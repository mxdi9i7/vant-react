import React from 'react';
import Switch from '.';

import '../../styles/stories.scss';

export default {
  title: 'Switch',
  component: Switch
};

export const BasicUsage = () => (
  <div className='storybook__container'>
    <Switch checked />
  </div>
);

export const Disabled = () => (
  <div className='storybook__container'>
    <Switch checked disabled />
  </div>
);

export const Loading = () => (
  <div className='storybook__container'>
    <Switch checked loading />
  </div>
);

export const CustomSize = () => (
  <div className='storybook__container'>
    <Switch size={24} checked />
  </div>
);

export const CustomColor = () => (
  <div className='storybook__container'>
    <Switch checked activeColor='#ee0a24' inactiveColor='#dcdee0' loading />
  </div>
);
