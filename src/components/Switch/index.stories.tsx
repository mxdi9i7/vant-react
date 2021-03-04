import React, { useState } from 'react';
import Switch from './';

import '../../styles/stories.scss';

export default {
  title: 'Switch',
  component: Switch
};

export const BasicUsage = () => {
  const [checked, setChecked] = useState(false);
  const onClick = () => {
    setChecked(!checked);
  };
  return (
    <div className='storybook__container'>
      <Switch checked={checked} onClick={onClick} />
    </div>
  );
};

export const DisabledUsage = () => {
  const [checked, setChecked] = useState(false);
  const onClick = () => {
    setChecked(!checked);
  };
  return (
    <div className='storybook__container'>
      <Switch disabled checked={checked} onClick={onClick} />
    </div>
  );
};

export const LoadingUsage = () => {
  const [checked, setChecked] = useState(false);
  const onClick = () => {
    setChecked(!checked);
  };
  return (
    <div className='storybook__container'>
      <Switch loading checked={checked} onClick={onClick} />
    </div>
  );
};

export const SizeUsage = () => {
  const [checked, setChecked] = useState(false);
  const onClick = () => {
    setChecked(!checked);
  };
  return (
    <div className='storybook__container'>
      <Switch size={30} checked={checked} onClick={onClick} />
      <Switch size={40} checked={checked} onClick={onClick} />
      <Switch size={50} checked={checked} onClick={onClick} />
    </div>
  );
};

export const ColorUsage = () => {
  const [checked, setChecked] = useState(false);
  const onClick = () => {
    setChecked(!checked);
  };
  return (
    <div className='storybook__container'>
      <Switch
        activeColor='red'
        inactiveColor='blue'
        checked={checked}
        onClick={onClick}
      />
      <Switch
        activeColor='cyan'
        inactiveColor='green'
        checked={checked}
        onClick={onClick}
      />
      <Switch
        activeColor='black'
        inactiveColor='orange'
        checked={checked}
        onClick={onClick}
      />
    </div>
  );
};
