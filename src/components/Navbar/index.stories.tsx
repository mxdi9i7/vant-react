import React from 'react';
import Navbar from '.';
import '../../styles/stories.scss';

export default {
  title: 'Navbar',
  component: Navbar
};

export const NavbarTitle = () => (
  <div className='container grey'>
    <Navbar title='Settings' />
  </div>
);

export const NavbarLeftAndRightText = () => (
  <div className='container grey'>
    <Navbar title='Settings' leftText='Back' rightText='More' />
  </div>
);
