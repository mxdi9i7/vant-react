import React from 'react';

import classnames from '../../utils/classNames';

import './index.scss';

export interface IProps {
  foo: string;
  bar: number;
}

const baseClass = 'vant-template';

const Template = ({ foo = 'foo', bar = 42 }: IProps) => {
  return (
    <div className={classnames(baseClass, [])}>
      <h1>
        I am a template, {foo}, {bar}
      </h1>
    </div>
  );
};

export default Template;
