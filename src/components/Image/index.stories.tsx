import React from 'react';
import Image from '.';
import '../../styles/stories.scss';

export default {
  title: 'Image',
  component: Image
};

const dummyImage = 'https://img.yzcdn.cn/vant/cat.jpeg';

export const BasicUsage = () => (
  <div className='storybook__container grey'>
    <Image src={dummyImage} />
  </div>
);

export const FillMode = () => (
  <div className='storybook__container grey'>
    <div className='image-container'>
      <Image src={dummyImage} fit='contain' />
      <span>contain</span>
    </div>
    <div className='image-container'>
      <Image src={dummyImage} fit='cover' />
      <span>cover</span>
    </div>
    <div className='image-container'>
      <Image src={dummyImage} fit='fill' />
      <span>fill</span>
    </div>
    <div className='image-container'>
      <Image src={dummyImage} fit='none' />
      <span>none</span>
    </div>
    <div className='image-container'>
      <Image src={dummyImage} fit='scale-down' />
      <span>scale-down</span>
    </div>
  </div>
);

export const RoundImage = () => (
  <div className='storybook__container grey'>
    <div className='image-container'>
      <Image round src={dummyImage} fit='contain' />
      <span>contain</span>
    </div>
    <div className='image-container'>
      <Image round src={dummyImage} fit='cover' />
      <span>cover</span>
    </div>
    <div className='image-container'>
      <Image round src={dummyImage} fit='fill' />
      <span>fill</span>
    </div>
    <div className='image-container'>
      <Image round src={dummyImage} fit='none' />
      <span>none</span>
    </div>
    <div className='image-container'>
      <Image round src={dummyImage} fit='scale-down' />
      <span>scale-down</span>
    </div>
  </div>
);

export const Loading = () => (
  <div className='storybook__container grey'>
    <Image loadingIcon='picture-o' src={dummyImage + '123'} />
  </div>
);
