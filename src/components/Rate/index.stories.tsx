import React, { useState } from 'react';
import Rate from '../Rate';
import '../../styles/stories.scss';

export default {
  title: 'Rate',
  component: Rate
};

export const BasicUsage = () => (
  <div className='container column grey'>
    <Rate currentRate={4} disabled />
  </div>
);
