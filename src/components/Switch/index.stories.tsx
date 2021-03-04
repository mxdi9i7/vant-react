import React, { useState } from 'react';
import Switch from './';

import '../../styles/stories.scss';

export default {
  title: 'Switch',
  component: Switch
};

export const BasicUsage = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className='storybook__container'>
      <Switch onChange={(active) => setIsActive(active)} active={isActive} />
    </div>
  );
};

export const DisableUsage = () => {
  const [isActive, setIsActive] = useState(false);
  const isDisable = true;

  return (
    <div className='storybook__container'>
      <Switch
        disable={isDisable}
        onChange={(active) => setIsActive(active)}
        active={isActive}
      />
    </div>
  );
};

export const CustomizeSizeUsage = () => {
  const [isActive, setIsActive] = useState(false);
  const size = 40;

  return (
    <div className='storybook__container'>
      <Switch
        size={size}
        onChange={(active) => setIsActive(active)}
        active={isActive}
      />
    </div>
  );
};

export const CustomizeColorUsage = () => {
  const [isActive, setIsActive] = useState(false);
  const onChange = (active: any) => {
    setIsActive(active);
    console.log('now status：' + active);
  };

  return (
    <div className='storybook__container'>
      <Switch
        onChange={onChange}
        activeColor='red'
        inactiveColor='blue'
        active={isActive}
      />
    </div>
  );
};
