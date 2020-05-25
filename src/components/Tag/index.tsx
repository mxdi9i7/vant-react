import React, { useRef } from 'react';

import Icon from '../Icons';

import classnames from '../../utils/classNames';

import './index.scss';
import { getContrastTextColor } from '../Button/helper';

export interface IProps {
  type?: 'default' | 'primary' | 'info' | 'danger' | 'warning';
  text: string;
  size?: 'small' | 'medium' | 'large';
  color?: string;
  children?: string;
  plain?: boolean;
  mark?: boolean;
  round?: boolean;
  closeable?: boolean;
}

const baseClass = 'vant-tag';

// TODO: Fix closeable error
// TODO: Fix tag padding when closeable is true

const Tag = ({
  type,
  closeable,
  text,
  children,
  size = 'small',
  color,
  plain,
  round,
  mark
}: IProps) => {
  const tagRef = useRef(null) || { current: {} };
  const contrastingColor = color ? getContrastTextColor(color) : 'ffffff';
  const props = {
    className: classnames(baseClass, [
      { type },
      { plain },
      { round },
      { mark },
      { closeable },
      {
        [size]: size
      }
    ]),
    style: {}
  };

  if (color)
    Object.assign(props, {
      style: {
        ...props.style,
        color: contrastingColor,
        backgroundColor: `#${color}`,
        borderColor: `#${color}`
      }
    });

  return (
    <span ref={tagRef} {...props}>
      {children || text}
      {closeable && (
        <span
        // onClick={() => {
        //   if (tagRef !== null) {
        //     const current = tagRef.current;
        //     if (current) {
        //       const style = current.style;
        //       style.display = 'none';
        //     }
        //   }
        // }}
        >
          <Icon size='10px' color={contrastingColor} name='cross' />
        </span>
      )}
    </span>
  );
};

export default Tag;
