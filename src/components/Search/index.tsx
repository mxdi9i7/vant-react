import React from 'react';

import Icon from '../Icons';

import classnames from '../../utils/classNames';

import './index.scss';

interface Props {
  label?: string;
}

const baseClass = 'vant-search';

const Search = ({ label }: Props) => {
  const searchProps = {
    className: classnames(baseClass, [
      {
        label
      }
    ])
  };
  const ICON_SIZE = '16px';
  return (
    <form {...searchProps}>
      <Icon name='search' size={ICON_SIZE} />
      <input type='text' />
      <Icon name='clear' size={ICON_SIZE} color='#c8c9cc' />
    </form>
  );
};

export default Search;
