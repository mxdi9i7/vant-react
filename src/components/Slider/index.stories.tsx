import React, { useState } from 'react';
import Slider from './';

import '../../styles/stories.scss';

export default {
  title: 'Slider',
  component: Slider
};

export const DefaultSlider = () => {
  return (
    <div className='container'>
      <Slider />
    </div>
  );
};
