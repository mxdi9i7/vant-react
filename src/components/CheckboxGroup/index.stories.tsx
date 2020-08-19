import React from 'react';
import CheckboxGroup from '.';
import Checkbox from '../Checkbox/index';

export default {
  title: 'CheckboxGroup',
  component: CheckboxGroup
};

export const BasicUsage = () => (
  <div className='storybook__container'>
    <CheckboxGroup changed={(e) => console.log(e)}>
      <Checkbox name='a' labelText='Basic Usage' />
      <Checkbox name='b' labelText='Basic Usage' />
      <Checkbox name='c' labelText='Basic Usage' />
    </CheckboxGroup>
  </div>
);
