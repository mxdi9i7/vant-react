import React, { useState } from 'react';
import Popup from './';
import { Types } from '../Tag/index.stories';
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
        type='center'
        borderRadius='20px'
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
      <Popup
        isActive={centerPopup2}
        setActive={setCenterPopup2}
        Content={Types}
        borderRadius='20px'
        type='left'
      >
        Default Button
      </Popup>
    </div>
  );
};
