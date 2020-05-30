import React, { useState } from 'react';
import Rate from '../Rate';
import '../../styles/stories.scss';

export default {
  title: 'Rate',
  component: Rate
};

export const BasicUsage = () => (
  <div className='container column grey'>
    <Rate currentRate={4} />
  </div>
);

export const CustomIcon = () => (
  <div className='container column grey'>
    <Rate currentRate={4} icon='like' voidIcon='like-o' />
  </div>
);

export const CustomColor = () => (
  <div className='container column grey'>
    <Rate currentRate={4} icon='like' voidIcon='like-o' color='#1989fa' />
  </div>
);
