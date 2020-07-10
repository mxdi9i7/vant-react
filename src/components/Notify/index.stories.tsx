import React from 'react';
import Notify from './';
import Button from '../Button';

import '../../styles/stories.scss';

export default {
  title: 'Notify',
  component: Notify
};

export const DefaultNotify = () => {
  const test = () => {
    Notify({ message: '普通提示' });
  };
  return (
    <div className='container'>
      <Button click={test} text='Default' type='primary' />
    </div>
  );
};
