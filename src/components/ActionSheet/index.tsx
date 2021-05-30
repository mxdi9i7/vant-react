/*
 * @Author: zhaohui
 * @Date: 2021-05-29 11:24:50
 * @LastEditTime: 2021-05-30 15:44:24
 * @LastEditors: zhaohui
 * @Description:
 * @FilePath: /vant-react/src/components/ActionSheet/index.tsx
 */
import React, { useState, useEffect } from 'react';
import Popup from '../Popup';
import { ActionSheetProps } from './types';
import ActionSheet from './ActionSheet';

const ActionSheetContainer = (props: ActionSheetProps) => {
  const [_visible, setVisible] = useState(false);
  const _maskClick = () => {
    if (props.maskClick) {
      props.maskClick();
    }
  };
  useEffect(() => {
    setVisible(props.visible);
  });
  return (
    <div>
      <Popup
        type='bottom'
        isActive={_visible}
        onSetActive={() => _maskClick()}
        content={<ActionSheet {...props} />}
      />
    </div>
  );
};
export default ActionSheetContainer;
