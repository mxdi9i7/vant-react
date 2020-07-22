import React from 'react';
import Swipe from './';

const dummyImage = 'https://img.yzcdn.cn/vant/cat.jpeg';
const nonExistentImage = 'https://img.yzcdn.cn/vant/cat123.jpeg';

export default {
  title: 'Swipe',
  component: Swipe
};

export const BasicUsage = () => {
  return (
    <div>
      <Swipe>
        <img src={dummyImage} alt='image' />
        <img src={nonExistentImage} alt='image' />
        <img src={dummyImage} alt='image' />
        <img src={nonExistentImage} alt='image' />
      </Swipe>
    </div>
  );
};
