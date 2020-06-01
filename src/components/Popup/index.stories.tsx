import React, { useState } from 'react';
import Popup from './';
import '../../styles/stories.scss';

export default {
  title: 'Popup',
  component: Popup
};

export const PopupType = () => {
  const [centerPopup, setCenterPopup] = useState(false);

  return (
    <div className='container'>
      <div
        onClick={() => {
          setCenterPopup(true);
        }}
      >
        button
      </div>
      <Popup
        isActive={centerPopup}
        setActive={setCenterPopup}
        position='center'
        closeable
      >
        Default Button
      </Popup>
    </div>
  );
};
