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
