import React, { useState } from 'react';
import Popup from './';
import Button from '../Button';
import { AllIcons } from '../Icons/index.stories';
import { Types } from '../Tag/index.stories';

import '../../styles/stories.scss';

export default {
  title: 'Popup',
  component: Popup
};

export const DefaultPopup = () => {
  const [centerPopup, setCenterPopup] = useState(false);

  return (
    <div className='container'>
      <Button
        click={() => {
          setCenterPopup(true);
        }}
        text='Default'
        type='primary'
      />
      <Popup isActive={centerPopup} setActive={setCenterPopup} />
    </div>
  );
};

export const PopupTypes = () => {
  const [leftPopup, setLeftPopup] = useState(false);
  const [rightPopup, setRightPopup] = useState(false);
  const [topPopup, setTopPopup] = useState(false);
  const [bottomPopup, setBottomPopup] = useState(false);

  return (
    <div className='container'>
      <Button
        click={() => {
          setLeftPopup(true);
        }}
        text='From Left'
        type='primary'
      />
      <Popup isActive={leftPopup} setActive={setLeftPopup} type='left' />
      <Button
        click={() => {
          setRightPopup(true);
        }}
        text='From Right'
        type='info'
      />
      <Popup isActive={rightPopup} setActive={setRightPopup} type='right' />
      <Button
        click={() => {
          setTopPopup(true);
        }}
        text='From Top'
        type='warning'
      />
      <Popup isActive={topPopup} setActive={setTopPopup} type='top' />
      <Button
        click={() => {
          setBottomPopup(true);
        }}
        text='From Bottom'
        type='danger'
      />
      <Popup isActive={bottomPopup} setActive={setBottomPopup} type='bottom' />
    </div>
  );
};

export const PopupSize = () => {
  const [centerPopupA, setCenterPopupA] = useState(false);
  const [centerPopupB, setCenterPopupB] = useState(false);

  return (
    <div className='container'>
      <Button
        click={() => {
          setCenterPopupA(true);
        }}
        text='Button A'
        type='primary'
      />
      <Popup
        isActive={centerPopupA}
        setActive={setCenterPopupA}
        size={['200px', '200px']}
      />
      <Button
        click={() => {
          setCenterPopupB(true);
        }}
        text='Button B'
        type='info'
      />
      <Popup
        isActive={centerPopupB}
        setActive={setCenterPopupB}
        size={['80vw', '80vh']}
      />
    </div>
  );
};

export const PopupContent = () => {
  const [centerPopupA, setCenterPopupA] = useState(false);
  const [centerPopupB, setCenterPopupB] = useState(false);

  return (
    <div className='container'>
      <Button
        click={() => {
          setCenterPopupA(true);
        }}
        text='Button A'
        type='primary'
      />
      <Popup
        isActive={centerPopupA}
        setActive={setCenterPopupA}
        text={['It`s a popup', '#666', '30px', 'center']}
        size={['300px', '60px']}
      />
      <Button
        click={() => {
          setCenterPopupB(true);
        }}
        text='Button B'
        type='info'
      />
      <Popup
        isActive={centerPopupB}
        setActive={setCenterPopupB}
        content={<Types />}
      />
    </div>
  );
};

export const CloseIcon = () => {
  const [centerPopupA, setCenterPopupA] = useState(false);
  const [centerPopupB, setCenterPopupB] = useState(false);
  const [centerPopupC, setCenterPopupC] = useState(false);

  return (
    <div className='container'>
      <Button
        click={() => {
          setCenterPopupA(true);
        }}
        text='Button A'
        type='primary'
      />
      <Popup isActive={centerPopupA} setActive={setCenterPopupA} closeable />
      <Button
        click={() => {
          setCenterPopupB(true);
        }}
        text='Button B'
        type='info'
      />
      <Popup
        isActive={centerPopupB}
        setActive={setCenterPopupB}
        closeable
        closeIcon={['close', '20px']}
      />
      <Button
        click={() => {
          setCenterPopupC(true);
        }}
        text='Button C'
        type='warning'
      />
      <Popup
        isActive={centerPopupC}
        setActive={setCenterPopupC}
        closeable
        closeIcon={['close', '40px']}
        closeIconPosition={{ top: '40px', left: '40px' }}
      />
    </div>
  );
};

export const RoundPopup = () => {
  const [leftPopup, setLeftPopup] = useState(false);
  const [topPopup, setTopPopup] = useState(false);

  return (
    <div className='container'>
      <Button
        click={() => {
          setLeftPopup(true);
        }}
        text='From Left'
        type='primary'
      />
      <Popup
        isActive={leftPopup}
        setActive={setLeftPopup}
        type='left'
        borderRadius='50px'
        content={<Types />}
      />

      <Button
        click={() => {
          setTopPopup(true);
        }}
        text='From Top'
        type='warning'
      />
      <Popup
        isActive={topPopup}
        setActive={setTopPopup}
        type='top'
        borderRadius='30%'
        content={<AllIcons />}
      />
    </div>
  );
};

export const PopupColor = () => {
  const [centerPopupA, setCenterPopupA] = useState(false);
  const [centerPopupB, setCenterPopupB] = useState(false);

  return (
    <div className='container'>
      <Button
        click={() => {
          setCenterPopupA(true);
        }}
        text='Button A'
        type='primary'
      />
      <Popup
        isActive={centerPopupA}
        setActive={setCenterPopupA}
        color='#b90000'
      />
      <Button
        click={() => {
          setCenterPopupB(true);
        }}
        text='Button B'
        type='info'
      />
      <Popup
        isActive={centerPopupB}
        setActive={setCenterPopupB}
        color='rgba(234, 123, 232,0.4)'
      />
    </div>
  );
};

export const PopupAction = () => {
  const [centerPopupA, setCenterPopupA] = useState(false);

  return (
    <div className='container'>
      <Button
        click={() => {
          setCenterPopupA(true);
        }}
        text='Button'
        type='primary'
      />
      <Popup
        isActive={centerPopupA}
        setActive={setCenterPopupA}
        text={['Click me', '#000', '30px', 'center']}
        size={['300px', '60px']}
        click={(e) => {
          alert(e);
        }}
      />
    </div>
  );
};
