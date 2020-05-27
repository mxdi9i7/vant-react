import React, { ReactElement } from 'react';

import SpinnerLoading from '../../assets/icons/loaders/Spinner';
import CircularLoading from '../../assets/icons/loaders/Circular';

import { LoadingIconProps } from './types';

export const renderLoadingIcon = ({
  className,
  loadingType = 'circular',
  loadingText,
  loadingSize
}: LoadingIconProps): ReactElement => {
  return (
    <React.Fragment>
      {loadingType === 'spinner' ? (
        <SpinnerLoading loadingSize={loadingSize} className={className} />
      ) : (
        <CircularLoading loadingSize={loadingSize} className={className} />
      )}
      {loadingText && <span>{loadingText}</span>}
    </React.Fragment>
  );
};

export const getContrastTextColor = (colorHex: string): string => {
  let r, g, b;
  if (colorHex.length !== 6 && colorHex.slice(0, 3) !== 'rgb') {
    return 'black';
  } // return black if color is not supplied
  else if (colorHex.length === 6) {
    r = parseInt(colorHex[0] + colorHex[1], 16);
    g = parseInt(colorHex[2] + colorHex[3], 16);
    b = parseInt(colorHex[4] + colorHex[5], 16);
  } else if (colorHex.length !== 6 && colorHex.slice(0, 3) === 'rgb') {
    const startIndex = colorHex.indexOf('(');
    const endIndex = colorHex.indexOf(')');
    const rgb = colorHex
      .slice(startIndex + 1, endIndex - startIndex)
      .split(',');
    r = rgb[0];
    g = rgb[1];
    b = rgb[2];
  }
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 125 ? 'black' : 'white';
};

export const colorType = (colorHex: string): string => {
  if (colorHex.length !== 6 && colorHex.slice(0, 3) === 'rgb') return colorHex;
  const result = '#' + colorHex;
  return result;
};
