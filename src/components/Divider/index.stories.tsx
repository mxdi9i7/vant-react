import React from 'react';
import Divider from './index';

export default {
  title: 'Divider',
  component: Divider
};

export const BasicWithContent = () => {
  return <Divider>312</Divider>;
};
export const BasicWithOutContent = () => {
  return <Divider />;
};

export const leftContent = () => {
  return <Divider contentPosition='left'>312</Divider>;
};

export const rightContent = () => {
  return <Divider contentPosition='right'>312</Divider>;
};
export const dashed = () => {
  return <Divider dashed>312</Divider>;
};

export const hairline = () => {
  return <Divider hairline={false}>312</Divider>;
};
