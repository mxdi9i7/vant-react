import React, { useState } from 'react';
import Search from '.';
import '../../styles/stories.scss';
import Button from '../Button';

export default {
  title: 'Search',
  component: Search
};

export const BasicUsage = () => (
  <div className='container column grey'>
    <Search />
    <Search shape='round' />
  </div>
);

export const CustomLabel = () => (
  <div className='container column grey'>
    <Search
      placeholder='Label width of 65px'
      label='Address'
      labelWidth='65px'
    />
    <Search label='Address' labelAlign='center' />
    <Search label='Address' labelAlign='right' />
  </div>
);

export const BackgroundColor = () => (
  <div className='container grey'>
    <Search background='rgb(79, 192, 141)' />
  </div>
);

export const MaxLength = () => (
  <div className='container grey'>
    <Search maxLength={5} />
  </div>
);

export const PlaceholderAutoFocus = () => (
  <div className='container grey column'>
    <Search placeholder='This is a placeholder' />
    <Search placeholder='This is a auto focus' autofocus />
  </div>
);

export const SearchActions = () => {
  const handleClick = (e) => {
    e.preventDefault();
    alert('Action clicked');
  };
  const [value, setValue] = useState('');
  const [focus, setFocus] = useState(false);
  return (
    <div className='container column grey'>
      <h1>Value: {value}</h1>
      <Search cancel={handleClick} showAction />
      <Search cancel={handleClick} showAction actionText='Clear' />
      <Search
        showAction
        action={
          <Button
            click={handleClick}
            text='Action'
            type='primary'
            size='small'
            block
          />
        }
      />
      <Search
        placeholder='Search Action, press Enter to search'
        search={() => alert('Searched')}
      />

      <Search
        rightIcon={focus ? 'success' : 'cross'}
        clearable={false}
        placeholder='Focus blur and input actions'
        input={(e) => setValue(e.target.value)}
        focus={() => setFocus(true)}
        blur={() => setFocus(false)}
      />
    </div>
  );
};

export const DisabledReadonlyError = () => (
  <div className='container column grey'>
    <Search disabled />
    <Search readonly />
    <Search error errorMessage='Something is up' />
  </div>
);

export const AlignmentAndIcon = () => (
  <div className='container column grey'>
    <Search inputAlign='center' placeholder='This is a placeholder' />
    <Search inputAlign='right' placeholder='This is a placeholder' />
    <Search leftIcon='smile-o' />
    <Search leftIcon='' rightIcon='search' clearable={false} />
  </div>
);
