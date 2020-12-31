import React from 'react';
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

export const BasicUsage = () => (
  <div className='storybook__container'>
    <FormContainer>
      <Radio />
    </FormContainer>
  </div>
);

export const RadioDisabled = () => (
  <div className='storybook__container'>
    <FormContainer>
      <Radio disabled />
    </FormContainer>
  </div>
);

export const LabelDisabled = () => (
  <div className='storybook__container'>
    <FormContainer>
      <Radio labelDisabled />
    </FormContainer>
  </div>
);

export const RadioColor = () => (
  <div className='storybook__container'>
    <FormContainer>
      <Radio checkedColor='rgb(7, 193, 96)' />
    </FormContainer>
  </div>
);

export const OnChange = () => (
  <div className='storybook__container'>
    <FormContainer>
      <Radio onChange={(v) => alert(v)} />
    </FormContainer>
  </div>
);
export const OnClick = () => (
  <div className='storybook__container'>
    <FormContainer>
      <Radio onClick={() => alert('clicked')} />
    </FormContainer>
  </div>
);

export const RadioCell = () => (
  <>
    <div className='storybook__container grey'>
      <Cell radio={{ label: 'Radio Cell' }} />
    </div>
  </>
);

export const RadioCellRTL = () => (
  <>
    <div className='storybook__container grey'>
      <Cell radio={{ label: 'Radio Cell', rtl: true }} />
    </div>
  </>
);
