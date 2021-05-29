/*
 * @Author: zhaohui
 * @Date: 2021-05-29 11:24:50
 * @LastEditTime: 2021-05-29 12:32:10
 * @LastEditors: zhaohui
 * @Description:
 * @FilePath: /vant-react/src/components/ActionSheet/index.tsx
 */
import React, { useState, useEffect } from 'react';
import Popup from '../Popup';
import { ActionSheetProps } from './types';
import ActionSheet from '.';

const ActionSheetContainer = ({ visible = false }: ActionSheetProps) => {
  const [_visible, set_visible] = useState(false);
  const onSetActive = () => {};
  debugger;
  useEffect(() => {
    if (visible !== _visible) {
      debugger;
      set_visible(visible);
    }
  }, [_visible]);
  return (
    <Popup
      type='bottom'
      isActive={_visible}
      onSetActive={() => onSetActive()}
      content={<ActionSheet />}
    />
  );
};
export default ActionSheetContainer;
