import React, { useState } from 'react';
import Layout from './';
import '../../styles/stories.scss';

const SPAN_SIZE = 'span: 8';

export default {
  title: 'Layout',
  component: Layout
};

export const BasicUsage = () => (
  <div className='container column grey'>
    <Layout
      text={{
        text: SPAN_SIZE,
        fontSize: '13px',
        lineHight: '30px',
        textAlign: 'center'
      }}
    />
  </div>
);
