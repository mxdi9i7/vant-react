import React, { useState } from 'react';
import Switch from '.';

import '../../styles/stories.scss';

export default {
  title: 'Switch',
  component: Switch
};

export const BasicUsage = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (value) => {
    console.log(value);
    setChecked(!checked);
  };

  const handleClick = (e) => {
    console.log(e);
  };

  return (
    <div className='storybook__container'>
      <Switch onChange={handleChange} checked={checked} onClick={handleClick} />
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
  const [checked, setChecked] = useState(false);
  const handleChange = (value) => {
    console.log(value);
    setChecked(!checked);
  };
  return (
    <div className='storybook__container'>
      <Switch size={30} checked={checked} onChange={handleChange} />
      <Switch size={40} checked={checked} onChange={handleChange} />
      <Switch size={50} checked={checked} onChange={handleChange} />
    </div>
  );
};

export const ColorUsage = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (value) => {
    console.log(value);
    setChecked(!checked);
  };
  return (
    <div className='storybook__container'>
      <Switch
        activeColor='red'
        inactiveColor='blue'
        activeValue='red'
        inactiveValue='blue'
        checked={checked}
        onChange={handleChange}
      />
      <Switch
        activeColor='cyan'
        inactiveColor='green'
        checked={checked}
        onChange={handleChange}
      />
      <Switch
        activeColor='black'
        inactiveColor='orange'
        checked={checked}
        onChange={handleChange}
      />
    </div>
  );
};
