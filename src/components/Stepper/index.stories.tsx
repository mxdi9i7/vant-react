import React from 'react';
import Stepper from '.';
import '../../styles/stories.scss';

export default {
  title: 'Stepper',
  component: Stepper
};

export const BasicStepper = () => (
  <div className='container stepper'>
    <Stepper />
  </div>
);

export const DisableStepper = () => (
  <div className='container stepper'>
    <Stepper disabled />
  </div>
);

export const StepStepper = () => (
  <div className='container stepper'>
    <Stepper step={2} />
  </div>
);

export const RangeStepper = () => (
  <div className='container stepper'>
    <Stepper min={0} max={8} />
  </div>
);

export const SizeStepper = () => (
  <div className='container stepper'>
    <Stepper size={50} />
  </div>
);

export const RoundStepper = () => (
  <div className='container stepper'>
    <Stepper theme />
  </div>
);

export const DisableInputStepper = () => (
  <div className='container stepper'>
    <Stepper disableInput />
  </div>
);

export const AsyncStepper = () => (
  <div className='container stepper'>
    <Stepper loading />
  </div>
);
