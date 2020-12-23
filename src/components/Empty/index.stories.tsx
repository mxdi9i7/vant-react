import React, { useState } from 'react';
import Empty from '.';
import Button from '../Button';
import Image from '../Image';

export default {
  title: 'Empty',
  component: Empty
};

export const BasicUsage = () => (
  <div className='storybook__container empty'>
    <Empty />
  </div>
);

export const Description = () => (
  <div className='storybook__container empty'>
    <Empty description='description' />
  </div>
);

export const ImageType = () => {
  const [showType, setShowType] = useState('error');

  return (
    <div className='storybook__container empty'>
      <Button
        onClick={() => {
          setShowType('error');
        }}
        text='Error'
        type='primary'
      />
      <Button
        onClick={() => {
          setShowType('network');
        }}
        text='Network'
        type='info'
      />
      <Button
        onClick={() => {
          setShowType('search');
        }}
        text='Search'
        type='warning'
      />
      <Button
        onClick={() => {
          setShowType('custom');
        }}
        text='Custom'
        type='danger'
      />
      {showType === 'error' && (
        <Empty image='error' description='description' />
      )}
      {showType === 'network' && (
        <Empty image='network' description='description' />
      )}
      {showType === 'search' && (
        <Empty image='search' description='description' />
      )}
      {showType === 'custom' && (
        <Empty image={<Image src='https://img.yzcdn.cn/vant/cat.jpeg' />} />
      )}
    </div>
  );
};

export const CustomImage = () => (
  <div className='storybook__container empty'>
    <Empty
      image='https://img.yzcdn.cn/vant/custom-empty-image.png'
      description='description'
    />
  </div>
);

export const BottomContent = () => (
  <div className='storybook__container empty'>
    <Empty
      bottom={
        <Button round type='danger'>
          Button
        </Button>
      }
    />
  </div>
);
