import React from 'react';

import classnames from '../../utils/classNames';

import { Props } from './types';

import './index.scss';
import { Network } from './Network';

const baseClass = 'vant-button';
const PRESET_IMAGES = ['error', 'search', 'default'];

export default function Empty({
  imageSize,
  description,
  image = 'default',
  bottom
}: Props) {
  console.log(imageSize);
  console.log(description);
  console.log(image);

  const containerProps = {
    className: classnames(`${baseClass}`, []),
    style: {}
  };

  const imageProps = {
    className: classnames(`${baseClass}__image`, []),
    style: {}
  };

  const bottomProps = {
    className: classnames(`${baseClass}__bottom`, []),
    style: {}
  };

  const descriptionProps = {
    className: classnames(`${baseClass}__description`, []),
    style: {}
  };

  const renderImage = () => {
    if (image === 'network') {
      return Network;
    }
    if (typeof image === 'string') {
      if (PRESET_IMAGES.includes(image)) {
        image = `https://img.yzcdn.cn/vant/empty-image-${image}.png`;
      }
      return <img src={image} />;
    } else {
      return image;
    }
  };

  return (
    <div {...containerProps}>
      <div {...imageProps}>{renderImage()}</div>
      {description && <p {...descriptionProps}>{description}</p>}
      {bottom && <div {...bottomProps}>{bottom}</div>}
    </div>
  );
}
