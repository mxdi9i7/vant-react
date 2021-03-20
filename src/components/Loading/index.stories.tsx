import React from 'react';
import Loading from './';

import '../../styles/stories.scss';

export default {
  title: 'Loading',
  component: Loading
};

export const Types = () => (
  <div className='storybook__container'>
    <Loading />
  </div>
);
