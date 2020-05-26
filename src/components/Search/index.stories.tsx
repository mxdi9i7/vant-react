import React from 'react';
import Search from '.';
import '../../styles/stories.scss';

export default {
  title: 'Search',
  component: Search
};

export const BasicUsage = () => (
  <div className='container grey'>
    <Search />
  </div>
);
