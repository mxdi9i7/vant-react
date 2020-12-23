import React from 'react';
import Checkbox from '.';

import '../../styles/stories.scss';

export default {
  title: 'Checkbox',
  component: Checkbox
};

export const BasicUsage = () => (
  <div className='storybook__container'>
    <Checkbox labelText='Basic Usage' />
  </div>
);

export const Disabled = () => (
  <div className='storybook__container'>
    <Checkbox labelText='Disabled' disabled />
  </div>
);

export const CustomColor = () => (
  <div className='storybook__container'>
    <Checkbox labelText='Custom Color' checkedColor='rgb(7, 193, 96)' />
  </div>
);

export const LabelDisable = () => (
  <div className='storybook__container'>
    <Checkbox labelText='Label Disabled' labelDisabled />
  </div>
);

export const OnChange = () => (
  <div className='storybook__container'>
    <Checkbox
      labelText='On Change'
      onChange={(checked) => alert(`Checkbox is checked: ${checked}`)}
    />
  </div>
);

export const OnClick = () => (
  <div className='storybook__container'>
    <Checkbox labelText='On Click' onClicked={() => alert('clicked')} />
  </div>
);
