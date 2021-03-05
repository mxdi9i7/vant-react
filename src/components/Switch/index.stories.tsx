import React from 'react';
import Switch from './';

import '../../styles/stories.scss';

export default {
  title: 'Switch',
  component: Switch
};

export const BasicUsage = () => {
  const handleChange = (value) => {
    console.log(value);
  };

  return (
    <div className='storybook__container'>
      <Switch onChange={handleChange} />
    </div>
  );
};

export const DisabledUsage = () => {
  return (
    <div className='storybook__container'>
      <Switch disabled />
    </div>
  );
};

export const LoadingUsage = () => {
  return (
    <div className='storybook__container'>
      <Switch loading />
      <Switch checked loading />
    </div>
  );
};

export const SizeUsage = () => {
  return (
    <div className='storybook__container'>
      <Switch size={30} />
      <Switch size={40} />
      <Switch size={50} />
    </div>
  );
};

export const ColorUsage = () => {
  return (
    <div className='storybook__container'>
      <Switch activeColor='red' inactiveColor='blue' />
      <Switch activeColor='cyan' inactiveColor='green' />
      <Switch activeColor='black' inactiveColor='orange' />
    </div>
  );
};
