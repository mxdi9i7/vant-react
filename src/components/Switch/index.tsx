import React, { MouseEvent } from 'react';

import classnames from '../../utils/classNames';

import './index.scss';

export interface IProps {
  active: any; // 	开关选中状态 [Switch on state]
  loading?: boolean; // 是否为加载状态  [Whether it is in the loading state]
  disable?: boolean; // 是否为禁用状态 [Is it disabled]
  size?: number | string; // 开关尺寸，默认单位为px [Switch size, the default unit is px] -- 30px
  activeColor?: string; // 打开时的背景色 [Background color when opened] -- #1989fa
  inactiveColor?: string; // 关闭时的背景色 [Background color when closed] -- white
  activeValue?: any; // 打开时对应的值 [Corresponding value when opened]	 -- true
  inactiveValue?: any; // 关闭时对应的值 [Corresponding value when closed]	-- false

  onClick?: Function; // 点击事件 - 加载和禁用时点击依旧执行 [Click Event - Click to still execute when loading and partial]
  onChange?: Function; // 切换事件 [Change Event]
}

const baseClassName = 'vant-switch';

const Switch = ({
  active,
  loading = false,
  disable = false,
  size = '30px',
  activeColor = '#1989fa',
  inactiveColor = 'white',
  activeValue = true,
  inactiveValue = false,

  onClick,
  onChange
}: IProps) => {
  const isActive = active === activeValue;

  // 加载渲染 Loading Render
  const loadingRender = () => {
    // TODO: Load component is not developed
    return loading ? <span /> : '';
  };

  // 点击事件 Click Event
  const handleClick = (event: MouseEvent): void => {
    onClick && onClick(event);

    if (loading === true || disable === true) return;
    onChange && onChange(isActive ? inactiveValue : activeValue);
  };

  // 当前颜色 Current Color
  const currentColor = isActive ? activeColor : inactiveColor;

  // 开关Props  Switch Props
  const switchProps = {
    onClick: handleClick,
    className: classnames(baseClassName, [
      { active },
      { disable },
      { loading }
    ]),
    style: {
      fontSize: typeof size === 'number' ? size + 'px' : size,
      backgroundColor: currentColor
    }
  };

  return (
    <div {...switchProps}>
      <div className={baseClassName + '__node'}>{loadingRender()}</div>
    </div>
  );
};

export default Switch;
