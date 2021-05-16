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
    </div>
  );
};

export const LoadingText = () => {
  return (
    <div>
      <Loading text='加载中...' />
      <Loading type='spinner' text='加载中...' />
    </div>
  );
};

export const LoadingColor = () => {
  return (
    <div>
      <Loading color='#1989fa' />
      <Loading type='spinner' color='#1989fa' />
      <Loading
        type='spinner'
        text='加载中...'
        color='#1989fa'
        textColor='#DC143C'
      />
    </div>
  );
};

export const LoadingSize = () => {
  return (
    <div>
      <Loading size='40px' />
      <Loading type='spinner' size='50px' />
      <Loading type='spinner' text='加载中...' size='60px' />
    </div>
  );
};

export const LoadingVertical = () => {
  return (
    <div>
      <Loading vertical />
      <Loading type='spinner' vertical />
      <Loading type='spinner' text='加载中...' vertical />
    </div>
  );
};
