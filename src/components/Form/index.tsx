import React, { useState } from 'react';

import classnames from '../../utils/classNames';

import { IProps } from './types';

import Field from '../Field';
import Button from '../Button';

import './index.scss';

const baseClass = 'vant-form';

export default function Form({
  name,
  children,
  layout = 'vertical',
  itemAlign,
  submit
}: IProps) {
  const [input, setInput] = useState();

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    if (submit) return submit(input);
  };

  const formProps = {
    className: classnames(baseClass, [{ [layout]: layout }, { itemAlign }]),
    name,
    onChange: handleInput,
    onSubmit: handleSubmit
  };

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      if (child.type === Field) {
        return React.cloneElement(child, {
          onChange: handleInput
        });
      }
      if (child.type === Button) {
        return React.cloneElement(child, {
          onClick: handleSubmit
        });
      }
    } else {
      return child;
    }
  });

  console.log(input);

  return (
    <div>
      <form {...formProps}>{childrenWithProps}</form>
    </div>
  );
}
