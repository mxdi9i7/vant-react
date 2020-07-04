import React, { useState } from 'react';
import Slider from './';

import '../../styles/stories.scss';

export default {
  title: 'Slider',
  component: Slider
};

export const DefaultSlider = () => {
  const [value, setValue] = useState();

  return (
    <div className='container'>
      <Slider
        value={value}
        setValue={setValue}
        range={{ min: -50, max: 50 }}
        size={{ width: 400, height: 10 }}
      />
    </div>
  );
};

export const Disabled = () => {
  const [value, setValue] = useState(30);

  return (
    <div className='container'>
      <Slider value={value} setValue={setValue} disabled />
    </div>
  );
};
