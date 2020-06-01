import React from 'react';
import Stepper from '.';
import '../../styles/stories.scss';

export default {
  title: 'Stepper',
  component: Stepper
};

export const basicStepper = () => (
  <div className='container stepper'>
    <Stepper />
  </div>
);

export const disableStepper = () => (
  <div className='container stepper'>
    <Stepper disabled />
  </div>
);

export const stepStepper = () => (
  <div className='container stepper'>
    <Stepper step={2} />
  </div>
);

export const rangeStepper = () => (
  <div className='container stepper'>
    <Stepper min={0} max={8} />
  </div>
);

export const sizeStepper = () => (
  <div className='container stepper'>
    <Stepper size={50} />
  </div>
);

export const roundStepper = () => (
  <div className='container stepper'>
    <Stepper theme />
  </div>
);

export const disableInputStepper = () => (
  <div className='container stepper'>
    <Stepper disableInput />
  </div>
);
