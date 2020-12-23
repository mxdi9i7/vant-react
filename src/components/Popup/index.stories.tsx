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
        onClick={() => {
          setCenterPopup(true);
        }}
        text='Default'
        type='primary'
      />
      <Popup
        isActive={centerPopup}
        onSetActive={setCenterPopup}
        size={{ width: '50vw', height: '50vh' }}
      />
    </div>
  );
};

export const PopupTypes = () => {
  const [leftPopup, setLeftPopup] = useState(false);
  const [rightPopup, setRightPopup] = useState(false);
  const [topPopup, setTopPopup] = useState(false);
  const [bottomPopup, setBottomPopup] = useState(false);

  return (
    <div className='container button'>
      <Button
        onClick={() => {
          setLeftPopup(true);
        }}
        text='From Left'
        type='primary'
      />
      <Popup
        isActive={leftPopup}
        onSetActive={setLeftPopup}
        type='left'
        size={{ width: '50vw', height: '100vh' }}
      />
      <Button
        onClick={() => {
          setRightPopup(true);
        }}
        text='From Right'
        type='info'
      />
      <Popup
        isActive={rightPopup}
        onSetActive={setRightPopup}
        type='right'
        size={{ width: '50vw', height: '100vh' }}
      />
      <Button
        onClick={() => {
          setTopPopup(true);
        }}
        text='From Top'
        type='warning'
      />
      <Popup
        isActive={topPopup}
        onSetActive={setTopPopup}
        type='top'
        size={{ width: '100vw', height: '50vh' }}
      />
      <Button
        onClick={() => {
          setBottomPopup(true);
        }}
        text='From Bottom'
        type='danger'
      />
      <Popup
        isActive={bottomPopup}
        onSetActive={setBottomPopup}
        type='bottom'
        size={{ width: '100vw', height: '50vh' }}
      />
    </div>
  );
};

export const PopupSize = () => {
  const [centerPopupA, setCenterPopupA] = useState(false);
  const [centerPopupB, setCenterPopupB] = useState(false);

  return (
    <div className='container button'>
      <Button
        onClick={() => {
          setCenterPopupA(true);
        }}
        text='Button A'
        type='primary'
      />
      <Popup
        isActive={centerPopupA}
        onSetActive={setCenterPopupA}
        size={{ width: '50vw', height: '50vh' }}
      />
      <Button
        onClick={() => {
          setCenterPopupB(true);
        }}
        text='Button B'
        type='info'
      />
      <Popup
        isActive={centerPopupB}
        onSetActive={setCenterPopupB}
        size={{ width: '200px', height: '200px' }}
      />
    </div>
  );
};

export const PopupContent = () => {
  const [centerPopupA, setCenterPopupA] = useState(false);
  const [centerPopupB, setCenterPopupB] = useState(false);

  return (
    <div className='container button'>
      <Button
        onClick={() => {
          setCenterPopupA(true);
        }}
        text='Button A'
        type='primary'
      />
      <Popup
        isActive={centerPopupA}
        onSetActive={setCenterPopupA}
        text={{
          text: 'It`s a popup',
          color: '#666',
          fontSize: '30px',
          textAlign: 'center'
        }}
      />
      <Button
        onClick={() => {
          setCenterPopupB(true);
        }}
        text='Button B'
        type='info'
      />
      <Popup
        isActive={centerPopupB}
        onSetActive={setCenterPopupB}
        size={{ width: '', height: '700px' }}
        content={<Types />}
        padding='0 30px'
      />
    </div>
  );
};

export const CloseIcon = () => {
  const [centerPopupA, setCenterPopupA] = useState(false);
  const [centerPopupB, setCenterPopupB] = useState(false);
  const [centerPopupC, setCenterPopupC] = useState(false);

  return (
    <div className='container button'>
      <Button
        onClick={() => {
          setCenterPopupA(true);
        }}
        text='Button A'
        type='primary'
      />
      <Popup
        isActive={centerPopupA}
        onSetActive={setCenterPopupA}
        closeable
        size={{ width: '50vw', height: '50vh' }}
      />
      <Button
        onClick={() => {
          setCenterPopupB(true);
        }}
        text='Button B'
        type='info'
      />
      <Popup
        isActive={centerPopupB}
        onSetActive={setCenterPopupB}
        closeable
        closeIcon={{ name: 'close', size: '20px' }}
        size={{ width: '50vw', height: '50vh' }}
      />
      <Button
        onClick={() => {
          setCenterPopupC(true);
        }}
        text='Button C'
        type='warning'
      />
      <Popup
        isActive={centerPopupC}
        onSetActive={setCenterPopupC}
        closeable
        closeIcon={{ name: 'close', size: '40px' }}
        closeIconPosition={{ top: '40px', left: '40px' }}
        size={{ width: '50vw', height: '50vh' }}
      />
    </div>
  );
};

export const RoundPopup = () => {
  const [leftPopup, setLeftPopup] = useState(false);
  const [topPopup, setTopPopup] = useState(false);

  return (
    <div className='container button'>
      <Button
        onClick={() => {
          setLeftPopup(true);
        }}
        text='From Left'
        type='primary'
      />
      <Popup
        isActive={leftPopup}
        onSetActive={setLeftPopup}
        type='left'
        borderRadius='50px'
        content={<Types />}
        size={{ width: '50vw', height: '100vh' }}
      />

      <Button
        onClick={() => {
          setTopPopup(true);
        }}
        text='From Top'
        type='warning'
      />
      <Popup
        isActive={topPopup}
        onSetActive={setTopPopup}
        type='top'
        borderRadius='30%'
        content={<AllIcons />}
        size={{ width: '100vw', height: '50vh' }}
      />
    </div>
  );
};

export const PopupColor = () => {
  const [centerPopupA, setCenterPopupA] = useState(false);
  const [centerPopupB, setCenterPopupB] = useState(false);

  return (
    <div className='container button'>
      <Button
        onClick={() => {
          setCenterPopupA(true);
        }}
        text='Button A'
        type='primary'
      />
      <Popup
        isActive={centerPopupA}
        onSetActive={setCenterPopupA}
        color='#b90000'
        size={{ width: '50vw', height: '50vh' }}
      />
      <Button
        onClick={() => {
          setCenterPopupB(true);
        }}
        text='Button B'
        type='info'
      />
      <Popup
        isActive={centerPopupB}
        onSetActive={setCenterPopupB}
        color='rgba(234, 123, 232,0.4)'
        size={{ width: '50vw', height: '50vh' }}
      />
    </div>
  );
};

export const PopupAction = () => {
  const [centerPopupA, setCenterPopupA] = useState(false);

  return (
    <div className='container button'>
      <Button
        onClick={() => {
          setCenterPopupA(true);
        }}
        text='Button'
        type='primary'
      />
      <Popup
        isActive={centerPopupA}
        onSetActive={setCenterPopupA}
        text={{
          text: 'Click me',
          color: '#000',
          fontSize: '30px',
          textAlign: 'center'
        }}
        onClick={(e) => {
          alert(e);
        }}
      />
    </div>
  );
};
