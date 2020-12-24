import React from 'react';
import Divider from '.';
import '../../styles/stories.scss';

export default {
  title: 'Divier',
  component: Divider
};

export const BasicUsage = () => (
  <div className='storybook__container divider'>
    <Divider />
  </div>
);

export const WithText = () => (
  <div className='storybook__container divider'>
    <Divider>Text</Divider>
  </div>
);

export const contentPosition = () => (
  <div className='storybook__container divider divider__content-position'>
    <div>
      <Divider contentPosition='left'>Text</Divider>
    </div>
    <div>
      <Divider contentPosition='right'>Text</Divider>
    </div>
  </div>
);

export const Dashed = () => (
  <div className='storybook__container divider'>
    <Divider dashed>Text</Divider>
  </div>
);

export const CustomStyle = () => (
  <div className='storybook__container divider'>
    <Divider
      style={{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }}
    >
      Text
    </Divider>
  </div>
);
