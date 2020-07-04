import React, { useRef, useEffect, useState } from 'react';

import classnames from '../../utils/classNames';
import { IProps } from './types';

import './index.scss';

const baseClass = 'vant-slider';

const Slider = ({
  range = { min: 0, max: 100 },
  size = { width: 100, height: 5 },
  disabled,
  vertical,
  barHeight,
  buttonSize,
  activeColor = '#1989fa',
  inactiveColor = '#e5e5e5',
  step = 1,
  value = 0
}: IProps) => {
  const [values, setValues] = useState(0);
  const sliderRange = range.max - range.min;
  const containerProps = {
    className: classnames(`${baseClass}__container`, []),
    id: 'all',
    style: {}
  };
  useEffect(() => {
    init();
  }, []);
  const init = () => {
    var wrapper = document.getElementById('wrapper');
    var fill = document.getElementById('fill');
    var slider = document.getElementById('slider');
    move(wrapper, slider, fill);
  };

  const move = (dom1, dom2, dom3) => {
    //drag用来存储滑块允许拖拽和不允许拖拽的状态
    var drag = 0;
    //在滑动条上绑定click事件以实现点击任意位置,自动调整滑块和填充块的效果
    dom1.addEventListener('click', function (e) {
      if (e.target === dom2) {
        //点击滑块自身不做任何事情
      } else {
        if (e.offsetX > size.width) {
          dom2.style.left = `${size.width}px`;
          dom3.style.width = `${size.width}px`;
        } else if (e.offsetX < 0) {
          dom2.style.left = '0px';
          dom3.style.width = '0px';
        } else {
          dom2.style.left = e.offsetX - 1 + 'px';
          dom3.style.width = e.offsetX - 1 + 'px';
        }
      }
    });
    //修改drag的状态
    dom2.addEventListener('mousedown', function () {
      drag = 1;
    });
    //释放按钮绑定在document上,保证在整个页面容器里面任何地方松开按钮都能修改drag的状态
    document.addEventListener('mouseup', function (e) {
      drag = 0;

      const result = Math.round(
        ((e.pageX - dom1.offsetLeft) / size.width) * sliderRange + range.min
      );
      console.log(result);
      result && setValues(result);
    });
    // 使滑块和填充块跟随移动,这里使用的pageX,需要计算和视窗左侧的距离而不是和滑动块左侧的距离
    document.addEventListener('mousemove', function (e) {
      if (e.offsetX && drag == 1) {
        if (e.pageX > dom1.offsetLeft + size.width) {
          dom2.style.left = `${size.width}px`;
          dom3.style.width = `${size.width}px`;
        } else if (e.pageX < dom1.offsetLeft) {
          dom2.style.left = '0px';
          dom3.style.width = '0px';
        } else {
          dom2.style.left = e.pageX - dom1.offsetLeft - 1 + 'px';
          dom3.style.width = e.pageX - dom1.offsetLeft - 1 + 'px';
        }

        // if (e.offsetX > 180) {
        //   dom2.style.left = '180px';
        //   dom3.style.width = '180px';
        // } else if (e.offsetX < 20) {
        //   dom2.style.left = '0px';
        //   dom3.style.width = '0px';
        // } else {
        //   dom2.style.left = `${e.offsetX + 1}px`;
        //   dom3.style.width = `${e.offsetX + 1}px`;
        // }
      }
    });
  };

  // slider.init();

  // if (size)
  //   Object.assign(popupProps, {
  //     style: {
  //       ...popupProps.style,
  //       width: size[0],
  //       height: size[1]
  //     }
  //   });

  return (
    <div
      id='wrapper'
      style={{
        width: `${size.width}px`,
        height: `${size.height}px`
      }}
    >
      <div
        id='fill'
        style={{
          height: `${size.height}px`
        }}
      ></div>
      <div id='slider'>{values}</div>
    </div>
  );
};

export default Slider;
