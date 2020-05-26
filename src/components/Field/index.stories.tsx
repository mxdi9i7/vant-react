import React, { useState, useEffect } from 'react';
import Field from '.';
import '../../styles/stories.scss';

export default {
  title: 'Field',
  component: Field
};

export const BasicUsage = () => (
  <div className='container column grey'>
    <Field />
  </div>
);

export const CustomTypes = () => (
  <div className='container column grey'>
    <Field label='Text' type='text' />
    <Field label='Phone' type='tel' />
    <Field label='Digit' type='digit' />
    <Field label='Number' type='number' />
    <Field label='Password' type='password' />
  </div>
);

export const Disabled = () => (
  <div className='container column grey'>
    <Field disabled value='Input Disabled' />
    <Field readonly value='Input Readonly' />
  </div>
);

export const Colon = () => (
  <div className='container column grey'>
    <Field colon />
  </div>
);

export const ShowIcon = () => {
  return (
    <div className='container column grey'>
      <Field leftIcon='music-o' rightIcon='success' />
    </div>
  );
};

export const FieldEvents = () => {
  const [value, setValue] = useState('');
  const [isFocus, setFocus] = useState(false);
  return (
    <div className='container column grey'>
      <p>Value: {value}</p>
      <Field
        leftIcon='smile-o'
        placeholder='Show clear icon'
        rightIcon='success'
        value={value}
        input={(e) => setValue(e.target.value)}
        clear={() => setValue('')}
        clearable
      />
      <Field leftIcon='smile-o' placeholder='Click event' rightIcon='success' />
      <Field
        leftIcon='smile-o'
        placeholder='Input focus state'
        rightIcon={isFocus ? 'success' : 'cross'}
        focus={() => setFocus(true)}
        blur={() => setFocus(false)}
      />
      <Field
        leftIcon='smile-o'
        placeholder='Input click event'
        clickable
        clickInput={(e) => alert('Input clicked')}
      />
      <Field
        leftIcon='smile-o'
        rightIcon='fire-o'
        placeholder='Input left and right icon click'
        clickable
        clickLeftIcon={() => alert('Left Icon Clicked')}
        clickRightIcon={() => alert('Right Icon Clicked')}
      />
    </div>
  );
};

export const FieldRef = () => {
  const [containerRef, setContainerRef] = useState(null);
  const [fieldRef, setFieldRef] = useState(null);

  window.addEventListener('click', (e) => {
    if (containerRef) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        alert('Click outside of container detected');
      }
    }
  });

  return (
    <div className='container column grey'>
      <p>
        Container Ref element name:
        {containerRef && containerRef.current.localName}
      </p>
      <p>Field Ref element name: {fieldRef && fieldRef.current.localName}</p>
      <Field
        leftIcon='music-o'
        rightIcon='success'
        getContainerRef={(ref) => setContainerRef(ref)}
        getFieldRef={(ref) => setFieldRef(ref)}
      />
    </div>
  );
};
