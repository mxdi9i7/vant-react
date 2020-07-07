import React from 'react';

import './style.scss';

export default function DocLoading({ error, timedOut, pastDelay }) {
  if (error) {
    return <Error />;
  }

  if (timedOut) {
    return <Error />;
  }

  if (pastDelay) {
    return <Loading />;
  }

  return null;
}

function Loading() {
  return (
    <div className="van-doc-loading">
      <div className="van-doc-loading-ripple">
        <div />
        <div />
      </div>
    </div>
  );
}

function Error() {
  return (
    <div className="van-doc-loading-error">Oops! An error occurred.</div>
  );
}
