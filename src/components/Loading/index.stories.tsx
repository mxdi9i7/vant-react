import React from 'react';
import Loading from './index';

import '../../styles/stories.scss';

export default {
  title: 'Loading',
  component: Loading
};

export const BasicUsage = () => {
  return (
    <div>
      <Loading />
      <Loading type='spinner' />
      <Loading type='spinner' color='#1989fa' size='40px' />
      <Loading text='加载中...' />
      <Loading type='spinner' text='加载中...' />
      <Loading type='spinner' text='加载中...' vertical />
      <Loading
        type='spinner'
        text='加载中...'
        color='#1989fa'
        textColor='#1989fa'
      />
    </div>
  );
};
