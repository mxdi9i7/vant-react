import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './';

export default {
	title: 'Button',
	component: Button,
};

export const Text = () => <Button text={'Hello world'} />;

export const Emoji = () => (
	<Button onClick={action('clicked')} text={'😀 😎 👍 💯'} />
);
