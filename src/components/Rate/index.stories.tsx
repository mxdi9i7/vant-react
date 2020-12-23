import React, { useState } from 'react';
import Rate from '../Rate';
import '../../styles/stories.scss';

export default {
  title: 'Rate',
  component: Rate
};

export const BasicUsage = () => (
  <div className='storybook__container column grey'>
    <Rate currentRate={4} />
  </div>
);

export const CustomIcon = () => (
  <div className='storybook__container column grey'>
    <Rate currentRate={4} icon='like' voidIcon='like-o' />
  </div>
);

export const CustomColor = () => (
  <div className='storybook__container column grey'>
    <Rate currentRate={4} icon='like' voidIcon='like-o' color='#1989fa' />
  </div>
);

export const CustomCount = () => (
  <div className='storybook__container column grey'>
    <Rate
      count={10}
      currentRate={4}
      icon='like'
      voidIcon='like-o'
      color='#1989fa'
    />
  </div>
);

export const Disabled = () => (
  <div className='storybook__container column grey'>
    <Rate
      disabled
      currentRate={4}
      icon='like'
      voidIcon='like-o'
      color='#1989fa'
    />
  </div>
);

export const ReadOnly = () => (
  <div className='storybook__container column grey'>
    <Rate
      readonly
      currentRate={4}
      icon='like'
      voidIcon='like-o'
      color='#1989fa'
    />
  </div>
);

export const CustomGutter = () => (
  <div className='storybook__container column grey'>
    <Rate
      gutter='8px'
      currentRate={4}
      icon='like'
      voidIcon='like-o'
      color='#1989fa'
    />
  </div>
);

export const ListenOnChange = () => {
  const [currentRate, setRate] = useState(4);

  return (
    <div className='storybook__container column grey'>
      <h1>{currentRate}</h1>
      <Rate
        onChange={(rate) => setRate(rate)}
        currentRate={currentRate}
        icon='like'
        voidIcon='like-o'
        color='#1989fa'
      />
    </div>
  );
};
