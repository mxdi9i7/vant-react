import React from 'react';
import Stepper from '.';
import '../../styles/stories.scss';

export default {
  title: 'Stepper',
  component: Stepper
};

export const BasicStepper = () => (
  <div className='container stepper'>
    <Stepper onChange={(value) => console.log(value)} />
  </div>
);

export const DisableStepper = () => (
  <div className='container stepper'>
    <Stepper disabled onChange={(value) => console.log(value)} />
  </div>
);

export const StepStepper = () => (
  <div className='container stepper'>
    <Stepper step={2} onChange={(value) => console.log(value)} />
  </div>
);

export const RangeStepper = () => (
  <div className='container stepper'>
    <Stepper min={0} max={8} onChange={(value) => console.log(value)} />
  </div>
);

export const SizeStepper = () => (
  <div className='container stepper'>
    <Stepper size={50} onChange={(value) => console.log(value)} />
  </div>
);

export const RoundStepper = () => (
  <div className='container stepper'>
    <Stepper theme onChange={(value) => console.log(value)} />
  </div>
);

export const DisableInputStepper = () => (
  <div className='container stepper'>
    <Stepper disableInput onChange={(value) => console.log(value)} />
  </div>
);

export const AsyncStepper = () => (
  <div className='container stepper'>
    <Stepper
      loading
      onAsyncChange={() => {}}
      onChange={(value) => console.log(value)}
    />
  </div>
);
