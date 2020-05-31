import React, { useState } from 'react';
import Popup from './';
import '../../styles/stories.scss';

export default {
  title: 'Popup',
  component: Popup
};

// const [isPopupOpen, setPopupOpen] = useState(false);

export const PopupType = () => (
  <div className='container'>
    <div onClick={() => {}}>button</div>
    <Popup>Default Button</Popup>
  </div>
);
