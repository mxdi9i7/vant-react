import React from 'react';
import Button from '../';
import '../../../styles/stories.scss';

export default {
  title: 'Button',
  component: Button
};

export const ButtonTypes = () => (
  <div className='container'>
    <Button type='default'>Default Button</Button>
    <Button type='primary'>Primary Button</Button>
    <Button type='info'>Info Button</Button>
    <Button type='warning'>Warning Button</Button>
    <Button type='danger'>Danger Button</Button>
  </div>
);

export const PlainButtons = () => (
  <div className='container'>
    <Button type='danger' plain>
      Danger Button
    </Button>
    <Button type='primary' plain>
      Primary Button
    </Button>
  </div>
);

export const DisabledButtons = () => (
  <div className='container'>
    <Button type='danger' disabled>
      Disabled Button
    </Button>
    <Button type='primary' disabled>
      Disabled Button
    </Button>
  </div>
);

export const Emoji = () => <Button text='😀 😎 👍 💯' />;
