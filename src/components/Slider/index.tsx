import React, { useRef, useEffect } from 'react';

import classnames from '../../utils/classNames';
import { IProps } from './types';

import './index.scss';

const baseClass = 'vant-slider';

const Slider = ({
  disabled,
  vertical,
  barHeight,
  buttonSize,
  activeColor = '#1989fa',
  inactiveColor = '#e5e5e5',
  min = 0,
  max = 100,
  step = 1,
  value = 0
}: IProps) => {
  const containerProps = {
    className: classnames(`${baseClass}__container`, []),
    id: 'all',
    style: {}
  };

  useEffect(() => {
    init();
  }, []);
  const all = document.getElementById('all'); //容器
  const p = document.querySelector('p'); //进度百分比
  const bar = document.getElementById('bar'); //进度显示条
  const box = document.getElementById('box'); //进度按钮

  const boxL, newL, moveL, mouseX, left;
  const cha = bar.offsetWidth - box.offsetWidth;
  const index = 0; //标记状态

  const evt = new Event('change'); //本身的事件

  function init() {
    box.addEventListener('mousedown', mouseDownclickHandler);
    document.addEventListener('mousemove', mouseMoveclickHandler);
    document.addEventListener('mouseup', mouseUpclickHandler);
    document.addEventListener('change', changeHandler);
    bar.addEventListener('click', clickHandler);
  }

  function mouseDownclickHandler(e) {
    const index = 1;
    const boxL = box.offsetLeft;
    const mouseX = e.clientX; //鼠标按下拖动的位置
  }

  function mouseMoveclickHandler(e) {
    if (index === 1) {
      const moveL = e.clientX - mouseX; //鼠标移动
      const newL = boxL + moveL; //left值

      //判断最小值与最大值
      if (newL < 0) {
        const newL = 0;
      }
      if (newL >= cha) {
        const newL = cha;
      }
      // 改变left值
      box.style.left = newL + 'px';
      // 计算比例
      var bili = (newL / cha) * 100;
      p.textContent = '当前位置' + Math.ceil(bili) + '%';
      evt.elem = this; //当前指向 对象
      document.dispatchEvent(evt); //朝谁发送 抛发
    }
  }

  function mouseUpclickHandler(e) {
    const index = 0;
    constevt.elem = this; //当前指向 对象
    document.dispatchEvent(evt); //朝谁发送 抛发
  }

  function clickHandler(e) {
    const left = e.clientX - all.offsetLeft - box.offsetWidth / 2;
    if (left < 0) {
      const left = 0;
    }
    if (left >= cha) {
      const left = cha;
    }
    box.style.left = left + 'px';
    const bili = (left / cha) * 100;
    p.innerHTML = '当前位置' + Math.ceil(bili) + '%';
    evt.elem = this; //当前指向 对象
    document.dispatchEvent(evt); //朝谁发送 抛发
  }

  function changeHandler(e) {
    console.log(e);
  }

  // if (size)
  //   Object.assign(popupProps, {
  //     style: {
  //       ...popupProps.style,
  //       width: size[0],
  //       height: size[1]
  //     }
  //   });

  return (
    <div {...containerProps}>
      <p>当前位置0%</p>
      <div id='bar'>
        <div id='box'></div>
      </div>
    </div>
  );
};

export default Slider;
