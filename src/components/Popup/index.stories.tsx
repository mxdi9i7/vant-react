import React, { useState } from 'react';
import Popup from './';
import '../../styles/stories.scss';

export default {
  title: 'Popup',
  component: Popup
};

export const PopupType = () => {
  const [centerPopup, setCenterPopup] = useState(false);
  const [centerPopup2, setCenterPopup2] = useState(false);

  return (
    <div className='container'>
      <button
        onClick={() => {
          setCenterPopup(true);
        }}
      >
        button A
      </button>
      <Popup
        isActive={centerPopup}
        setActive={setCenterPopup}
        position='center'
        text='popup A'
        closeable
      >
        Default Button
      </Popup>
      <button
        onClick={() => {
          setCenterPopup2(true);
        }}
      >
        button B
      </button>
      <Popup isActive={centerPopup2} setActive={setCenterPopup2} text='popup B'>
        Default Button
      </Popup>
    </div>
  );
};
