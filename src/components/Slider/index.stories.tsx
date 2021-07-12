import React, { useState } from 'react';
import Slider from './';

import '../../styles/stories.scss';

export default {
  title: 'Slider',
  component: Slider
};

export const BasicUsage = () => {
  const [value, setValue] = useState(0);

  return (
    <div className='slider-container'>
      <div className='slider-block'>
        <p>{`Current Value : ${value}`}</p>
        <Slider value={value} onSetValue={setValue} />
      </div>
    </div>
  );
};

export const SlideRange = () => {
  const [value, setValue] = useState(0);

  return (
    <div className='slider-container'>
      <div className='slider-block'>
        <p>{`Current Value : ${value}`}</p>
        <Slider
          value={value}
          onSetValue={setValue}
          range={{ min: '-50px', max: '50px' }}
        />
      </div>
    </div>
  );
};

export const SlideStep = () => {
  const [value, setValue] = useState(0);

  return (
    <div className='slider-container'>
      <div className='slider-block'>
        <p>{`Current Value : ${value}`}</p>
        <Slider value={value} onSetValue={setValue} step={10} />
      </div>
    </div>
  );
};

export const Disabled = () => {
  const [value, setValue] = useState(30);

  return (
    <div className='slider-container'>
      <div className='slider-block'>
        <p>{`Current Value : ${value}`}</p>
        <Slider value={value} onSetValue={setValue} disabled />
      </div>
    </div>
  );
};

export const ShowValue = () => {
  const [value, setValue] = useState(30);

  return (
    <div className='slider-container'>
      <Slider
        value={value}
        onSetValue={setValue}
        sliderStyle={{
          color: '#000',
          fontSize: '12px',
          backgroundColor: '#fff',
          borderRadius: '5px',
          borderColor: '#000'
        }}
        sliderSize={{ width: '30px', height: '20px' }}
        hasValue
      />
    </div>
  );
};

export const CustomSize = () => {
  const [valueA, setValueA] = useState(80);
  const [valueB, setValueB] = useState(-50);

  return (
    <div className='slider-container'>
      <div className='slider-block'>
        <p>{`Current Value : ${valueA}`}</p>
        <Slider
          id='a'
          value={valueA}
          onSetValue={setValueA}
          size={{ width: '300px', height: '10px' }}
        />
      </div>
      <div className='slider-block'>
        <p>{`Current Value : ${valueB}`}</p>
        <Slider
          id='b'
          value={valueB}
          onSetValue={setValueB}
          sliderSize={{ width: '30px', height: '30px' }}
        />
      </div>
    </div>
  );
};

export const CustomStyle = () => {
  const [valueA, setValueA] = useState(30);
  const [valueB, setValueB] = useState(-50);

  return (
    <div className='slider-container'>
      <div className='slider-block'>
        <p>{`Current Value : ${valueA}`}</p>
        <Slider
          id='a'
          value={valueA}
          onSetValue={setValueA}
          size={{ width: '400px', height: '10px' }}
          activeColor='#b90000'
        />
      </div>
      <div className='slider-block'>
        <p>{`Current Value : ${valueB}`}</p>
        <Slider
          id='b'
          value={valueB}
          onSetValue={setValueB}
          sliderStyle={{ backgroundColor: '#2F4F4F' }}
          inactiveColor='transparent'
        />
      </div>
    </div>
  );
};
