import React, { useState } from 'react';
import Radio from '.';

import '../../styles/stories.scss';
import Cell from '../Cell';

export default {
  title: 'Radio',
  component: Radio
};

const FormContainer = ({ children }) => {
  return <div style={{ width: '140px' }}>{children}</div>;
};

export const BasicUsage = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div className='storybook__container'>
      <FormContainer>
        <Radio checked={checked} onClick={() => setChecked(!checked)} />
      </FormContainer>
    </div>
  );
};

export const RadioDisabled = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className='storybook__container'>
      <FormContainer>
        <Radio
          disabled
          checked={checked}
          onClick={() => setChecked(!checked)}
        />
      </FormContainer>
    </div>
  );
};

export const LabelDisabled = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className='storybook__container'>
      <FormContainer>
        <Radio
          labelDisabled
          checked={checked}
          onClick={() => setChecked(!checked)}
        />
      </FormContainer>
    </div>
  );
};

export const RadioColor = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className='storybook__container'>
      <FormContainer>
        <Radio
          checkedColor='rgb(7, 193, 96)'
          checked={checked}
          onClick={() => setChecked(!checked)}
        />
      </FormContainer>
    </div>
  );
};

export const OnClick = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className='storybook__container'>
      <FormContainer>
        <Radio
          checked={checked}
          onClick={() => {
            setChecked(!checked);
            alert(checked);
          }}
        />
      </FormContainer>
    </div>
  );
};

export const RadioCell = () => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <div className='storybook__container grey'>
        <Cell
          radio={{
            label: 'Radio Cell',
            checked,
            onClick: () => setChecked(!checked)
          }}
        />
      </div>
    </>
  );
};

export const RadioCellRTL = () => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <div className='storybook__container grey'>
        <Cell
          radio={{
            label: 'Radio Cell',
            rtl: true,
            checked,
            onClick: () => setChecked(!checked)
          }}
        />
      </div>
    </>
  );
};
