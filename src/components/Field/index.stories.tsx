import React, { useState } from 'react';
import Field from '.';
import '../../styles/stories.scss';
import Button from '../Button';

export default {
  title: 'Field',
  component: Field
};

export const BasicUsage = () => (
  <div className='container column grey'>
    <Field />
  </div>
);

export const RequiredField = () => (
  <div className='container column grey'>
    <Field label='Required' required />
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
    <Field label='Colon' colon />
  </div>
);

export const ShowIcon = () => {
  return (
    <div className='container column grey'>
      <Field label='Left Icon' leftIcon='music-o' />
      <Field label='Right Icon' rightIcon='success' />
      <Field labelWidth='150px' label='Label Icon' labelIcon='search' />
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
        clickInput={() => alert('Input clicked')}
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
  const [clickOutside, setClickOutside] = useState(false);

  window.addEventListener('click', (e) => {
    if (
      containerRef !== undefined &&
      // @ts-ignore: Object is possibly 'null'.
      containerRef.current &&
      // @ts-ignore: Object is possibly 'null'.
      !containerRef.current.contains(e.target)
    ) {
      setClickOutside(true);
    } else {
      setClickOutside(false);
    }
  });

  return (
    <div className='container column grey'>
      <p>
        Container Ref element name:
        {
          // @ts-ignore: Object is possibly 'null'.
          containerRef && containerRef.current.localName
        }
      </p>
      <p>
        Field Ref element name:{' '}
        {
          // @ts-ignore: Object is possibly 'null'.
          fieldRef && fieldRef.current.localName
        }
      </p>
      <Field
        placeholder={`Click outside? ${clickOutside}`}
        leftIcon='music-o'
        rightIcon='success'
        getContainerRef={(ref) => setContainerRef(ref)}
        getFieldRef={(ref) => setFieldRef(ref)}
      />
    </div>
  );
};

export const AutoFocus = () => {
  return (
    <div className='container column grey'>
      <Field autofocus placeholder='Autofocus input field' />
    </div>
  );
};

export const ErrorInfo = () => {
  return (
    <div className='container column grey'>
      <Field label='Error input' error errorMessage='Invalid input info' />
    </div>
  );
};

export const MaxLengthWordLimit = () => {
  const [value, setValue] = useState('');
  return (
    <div className='container column grey'>
      <Field
        value={value}
        input={(e) => setValue(e.target.value)}
        label='Max length'
        maxLength={5}
        showWordLimit
      />
    </div>
  );
};

export const FieldWithButton = () => {
  return (
    <div className='container column grey'>
      <Field
        label='SMS'
        placeholder='SMS'
        button={
          <Button
            size='small'
            click={() => alert('Message sent!')}
            text='Send SMS'
            type='primary'
          />
        }
      />
    </div>
  );
};

const pattern = new RegExp(/^[a-zA-Z]*$/);

export const Formatter = () => {
  const [value, setValue] = useState('');
  return (
    <div className='container column grey'>
      <Field
        label='Text Only'
        placeholder='No Numbers'
        value={value}
        input={(e) => setValue(e.target.value)}
        formatter={(value) => pattern.test(value)}
      />
    </div>
  );
};

export const LabelUtilities = () => (
  <div className='container column grey'>
    <Field label='Long 220px label' labelClass='pant' labelWidth='220px' />
  </div>
);

export const LabelInputAlignment = () => (
  <div className='container column grey'>
    <Field
      label='Label Center'
      placeholder='Input Right'
      labelWidth='190px'
      labelAlign='center'
      inputAlign='right'
    />
    <Field
      label='Label Right'
      placeholder='Input Center'
      labelWidth='190px'
      inputAlign='center'
      labelAlign='right'
    />
    <Field
      label='Error Center'
      placeholder='Input Center'
      labelWidth='190px'
      inputAlign='center'
      labelAlign='right'
      error
      errorMessage='Something went wrong'
      errorAlign='center'
    />
    <Field
      label='Error Right'
      placeholder='Input Center'
      labelWidth='190px'
      inputAlign='center'
      labelAlign='right'
      errorMessage='Something went wrong'
      errorAlign='right'
      error
    />
  </div>
);

export const AutoResize = () => (
  <div className='container column grey'>
    <Field />
  </div>
);
