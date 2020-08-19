import React, { useState, ReactElement, useEffect } from 'react';
import classnames from '../../utils/classNames';

export interface IPorps {
  disabled?: boolean;
  changed?: Function;
  children?: [ReactElement];
}

const baseClass = 'vant-checkbox-group';

function CheckboxBroup({ disabled, changed, children }: IPorps) {
  const [state, setState] = useState({});

  const handleChanged = (checked, name) => {
    setState({ ...state, [name]: checked });
  };

  useEffect(() => {
    const result = [];
    for (const key in state) {
      if (Object.prototype.hasOwnProperty.call(state, key)) {
        if (state[key]) {
          result.push(key);
        }
      }
    }
    changed && changed(result);
  }, [state]);

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
