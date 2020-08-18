import React, { ReactElement, useState } from 'react';
import { KBKProps } from './types';
import Button from '../Button';
import Popup from '../Popup';

export const numberKeys = ({
  keyNumber,
  type = 'button'
}: KBKProps): ReactElement => {
  return (
    <Button
      click={() => {
        return keyNumber;
      }}
      size='large'
      text={keyNumber}
    />
  );
};

export const deleteKey = ({ type = 'button' }: KBKProps): ReactElement => {
  return (
    <Button
      click={(e) => {
        e.target.value = e.target.value.slice(0, e.value.length - 1);
      }}
      size='large'
      icon='url for delete'
    />
  );
};

export const closeKey = ({ type = 'blank' }: KBKProps): ReactElement => {
  const [bottomPopup, setBottomPopup] = useState(false);

  return (
    <Button
      click={() => {
        setBottomPopup(true);
      }}
      size='large'
      icon='url for close'
    />
  );
};
