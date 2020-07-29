import React from 'react';
import Swipe from './';

const dummyImage = 'https://img.yzcdn.cn/vant/cat.jpeg';
const dummyImage2 =
  'https://walkthechat.com/wp-content/uploads/2019/12/%E4%B8%AD%E5%9B%BD%E6%9C%89%E8%B5%9E_2019_V2-1.001-copy-1200x675.jpg';
const dummyImage3 =
  'https://www.anime-planet.com/images/characters/youzan-miura-132242.jpg';

export default {
  title: 'Swipe',
  component: Swipe
};

export const BasicUsage = () => {
  return (
    <div>
      <Swipe>
        <img src={dummyImage} alt='image' />
        <img src={dummyImage2} alt='image' />
        <img src={dummyImage3} alt='image' />
        <img src={dummyImage2} alt='image' />
      </Swipe>
    </div>
  );
};
