import React from 'react';
import Button from './';

export default {
  title: 'Button',
  component: Button
};

export const DefaultButton = () => <Button>Default Button</Button>;

export const Text = () => <Button>Default Button</Button>;

export const Emoji = () => <Button text='😀 😎 👍 💯' />;
