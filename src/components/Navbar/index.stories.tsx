import React from 'react';
import Navbar from '.';
import '../../styles/stories.scss';

export default {
  title: 'Navbar',
  component: Navbar
};

export const NavbarTitle = () => (
  <div className='storybook__container grey'>
    <Navbar title='Settings' />
  </div>
);

export const NavbarLeftAndRightText = () => (
  <div className='storybook__container column grey'>
    <Navbar title='Settings' leftText='Back' rightText='More' />
    <Navbar
      title='Profile'
      leftIcon='arrow-left'
      leftText='Back'
      rightIcon='search'
      rightText='Search'
    />
    <Navbar title='Home' leftIcon='user-o' rightIcon='search' />
  </div>
);

export const NavbarFixed = () => (
  <div className='storybook__container column grey'>
    <Navbar
      fixed
      title='Profile'
      leftIcon='arrow-left'
      leftText='Back'
      rightIcon='search'
    />
  </div>
);
export const NavbarBorder = () => (
  <div className='storybook__container column grey'>
    <Navbar
      border
      title='Profile'
      leftIcon='arrow-left'
      leftText='Back'
      rightIcon='search'
    />
  </div>
);

export const NavbarWithLongTitle = () => (
  <div className='storybook__container column grey'>
    <Navbar
      title='This is a very very very very very very very very very very long text'
      leftIcon='arrow-left'
      leftText='Back'
      rightIcon='search'
    />
  </div>
);

export const NavbarClickHandler = () => (
  <div className='storybook__container column grey'>
    <Navbar
      title='Title'
      leftIcon='arrow-left'
      leftText='Back'
      rightIcon='search'
      onClickLeft={(e) => alert(e.target.innerHTML + ' Left Click')}
      onClickRight={(e) => alert(e.target.innerHTML + ' Right Click')}
    />
  </div>
);
