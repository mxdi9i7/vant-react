import React, { ReactChild } from 'react';
import classnames from '../../utils/classNames';

export interface IPorps {
  disabled?: boolean;
  changed?: Function;
  children?: Array<ReactChild>;
}

const baseClass = 'vant-checkbox-group';

function CheckboxBroup({ disabled, children }: IPorps) {
  return (
    <div
      className={classnames(baseClass, [
        {
          disabled
        }
      ])}
    >
      {children}
    </div>
  );
}
export default CheckboxBroup;
