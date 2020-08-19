import React, { ReactElement } from 'react';
import classnames from '../../utils/classNames';

export interface IPorps {
  disabled?: boolean;
  changed?: Function;
  children?: [ReactElement];
}

const baseClass = 'vant-checkbox-group';

function CheckboxBroup({ disabled, changed, children }: IPorps) {
  const handleChanged = (checked, name) => {
    changed && changed(checked, name);
  };

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        changed: handleChanged
      });
    } else {
      return children;
    }
  });

  return (
    <div
      className={classnames(baseClass, [
        {
          disabled
        }
      ])}
    >
      {childrenWithProps}
    </div>
  );
}
export default CheckboxBroup;
