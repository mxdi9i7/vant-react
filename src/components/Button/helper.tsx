import React, { ReactElement } from 'react';

import SpinnerLoading from '../../assets/icons/loaders/Spinner';
import CircularLoading from '../../assets/icons/loaders/Circular';

import { LoadingIconProps } from './types';

export const renderLoadingIcon = ({
  className,
  loadingType = 'circular',
  loadingText
}: LoadingIconProps): ReactElement => {
  return (
    <React.Fragment>
      {loadingType === 'spinner' ? (
        <SpinnerLoading className={className} />
      ) : (
        <CircularLoading className={className} />
      )}
      {loadingText && <span>{loadingText}</span>}
    </React.Fragment>
  );
};

export const getContrastTextColor = (colorHex) => {
  if (colorHex.length !== 6) return 'black'; // return black if color is not supplied
  const r = parseInt(colorHex[0] + colorHex[1], 16);
  const g = parseInt(colorHex[2] + colorHex[3], 16);
  const b = parseInt(colorHex[4] + colorHex[5], 16);

  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 125 ? 'black' : 'white';
};
