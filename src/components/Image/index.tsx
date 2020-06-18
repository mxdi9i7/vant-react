import React, { useState } from 'react';
import Icon from '../Icons';
import classnames from '../../utils/classNames';

import './index.scss';

export interface IProps {
  src?: string;
  fit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  alt?: string;
  width?: number | string;
  height?: number | string;
  radius?: number | string;
  round?: boolean;
  showError?: boolean;
  showLoading?: boolean;
  errorIcon?: string;
  loadingIcon?: string;
}

// TODO: LazyLoad, need lazyLoad component

const baseClass = 'vant-image';

const Image = ({
  src,
  fit = 'fill',
  alt,
  width,
  height,
  radius = 0,
  round = false,
  showError = true,
  showLoading = true,
  errorIcon = 'warning-o',
  loadingIcon = 'photo-o'
}: IProps) => {
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);

  const className = classnames(baseClass, [
    {
      contain: fit === 'contain'
    },
    {
      cover: fit === 'cover'
    },
    {
      fill: fit === 'fill'
    },
    {
      'scale-down': fit === 'scale-down'
    },
    {
      none: fit === 'none'
    },
    {
      round
    }
  ]);

  return (
    <div className={className}>
      {isLoading && showLoading && <Icon name={loadingIcon} />}
      {isError && showError && <Icon name={errorIcon} />}
      <img
        width={width}
        height={height}
        style={{
          borderRadius: round ? '50%' : radius,
          display: isLoading ? 'none' : 'block'
        }}
        src={src}
        alt={alt}
        onError={() => setError(true)}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
};

export default Image;
