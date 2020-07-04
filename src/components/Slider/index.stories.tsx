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
        <Slider value={value} setValue={setValue} />
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
          setValue={setValue}
          range={{ min: -50, max: 50 }}
        />
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
        <Slider value={value} setValue={setValue} disabled />
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
        setValue={setValue}
        sliderStyle={{
          color: '#000',
          fontSize: '12px',
          backgroundColor: '#fff',
          borderRadius: '5px',
          borderColor: '#000'
        }}
        sliderSize={{ width: 30, height: 20 }}
        hasValue
      />
    </div>
  );
};

export const CustomSize = () => {
  const [valueA, setValueA] = useState(0);
  const [valueB, setValueB] = useState(-50);

  return (
    <div className='slider-container'>
      <div className='slider-block'>
        <p>{`Current Value : ${valueA}`}</p>
        <Slider
          id='a'
          value={valueA}
          setValue={setValueA}
          size={{ width: 300, height: 10 }}
        />
      </div>
      <div className='slider-block'>
        <p>{`Current Value : ${valueB}`}</p>
        <Slider
          id='b'
          value={valueB}
          setValue={setValueB}
          sliderSize={{ width: 30, height: 30 }}
        />
      </div>
    </div>
  );
};

export const CustomStyle = () => {
  const [valueA, setValueA] = useState(0);
  const [valueB, setValueB] = useState(-50);

  return (
    <div className='slider-container'>
      <div className='slider-block'>
        <p>{`Current Value : ${valueA}`}</p>
        <Slider
          id='a'
          value={valueA}
          setValue={setValueA}
          size={{ width: 400, height: 10 }}
          activeColor='#b90000'
        />
      </div>
      <div className='slider-block'>
        <p>{`Current Value : ${valueB}`}</p>
        <Slider
          id='b'
          value={valueB}
          setValue={setValueB}
          inactiveColor='transparent'
        />
      </div>
    </div>
  );
};
