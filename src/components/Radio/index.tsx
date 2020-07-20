import React from 'react';

import classnames from '../../utils/classNames';

import './index.scss';

export interface IProps {
  foo: string;
  bar: number;
}

const baseClass = 'vant-radio';

const Radio = ({ foo = 'foo', bar = 42 }: IProps) => {
  return (
    <div className={classnames(baseClass, [])}>
      <h1>
        I am a radio, {foo}, {bar}
      </h1>
    </div>
  );
};

export default Radio;
