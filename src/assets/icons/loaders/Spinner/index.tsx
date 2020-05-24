// eslint-disable-next-line no-unused-vars
import React, { ReactElement } from 'react';
import './index.scss';

interface Props {
  className: string;
  loadingSize?: string;
}

export default function SpinnerLoading({
  className,
  loadingSize
}: Props): ReactElement {
  return (
    <div
      className='loading spinner-loading'
      style={{ height: loadingSize || '40px', width: loadingSize || '40px' }}
    >
      <svg
        className={className}
        viewBox='0 0 100 100'
        preserveAspectRatio='xMidYMid'
      >
        <g transform='rotate(0 50 50)'>
          <rect x='48.5' y='24' rx='0' ry='0'>
            <animate
              attributeName='opacity'
              values='1;0'
              keyTimes='0;1'
              dur='0.7142857142857142s'
              begin='-0.6547619047619048s'
              repeatCount='indefinite'
            />
          </rect>
        </g>
        <g transform='rotate(30 50 50)'>
          <rect x='48.5' y='24' rx='0' ry='0'>
            <animate
              attributeName='opacity'
              values='1;0'
              keyTimes='0;1'
              dur='0.7142857142857142s'
              begin='-0.5952380952380952s'
              repeatCount='indefinite'
            />
          </rect>
        </g>
        <g transform='rotate(60 50 50)'>
          <rect x='48.5' y='24' rx='0' ry='0'>
            <animate
              attributeName='opacity'
              values='1;0'
              keyTimes='0;1'
              dur='0.7142857142857142s'
              begin='-0.5357142857142857s'
              repeatCount='indefinite'
            />
          </rect>
        </g>
        <g transform='rotate(90 50 50)'>
          <rect x='48.5' y='24' rx='0' ry='0'>
            <animate
              attributeName='opacity'
              values='1;0'
              keyTimes='0;1'
              dur='0.7142857142857142s'
              begin='-0.47619047619047616s'
              repeatCount='indefinite'
            />
          </rect>
        </g>
        <g transform='rotate(120 50 50)'>
          <rect x='48.5' y='24' rx='0' ry='0'>
            <animate
              attributeName='opacity'
              values='1;0'
              keyTimes='0;1'
              dur='0.7142857142857142s'
              begin='-0.41666666666666663s'
              repeatCount='indefinite'
            />
          </rect>
        </g>
        <g transform='rotate(150 50 50)'>
          <rect x='48.5' y='24' rx='0' ry='0'>
            <animate
              attributeName='opacity'
              values='1;0'
              keyTimes='0;1'
              dur='0.7142857142857142s'
              begin='-0.35714285714285715s'
              repeatCount='indefinite'
            />
          </rect>
        </g>
        <g transform='rotate(180 50 50)'>
          <rect x='48.5' y='24' rx='0' ry='0'>
            <animate
              attributeName='opacity'
              values='1;0'
              keyTimes='0;1'
              dur='0.7142857142857142s'
              begin='-0.2976190476190476s'
              repeatCount='indefinite'
            />
          </rect>
        </g>
        <g transform='rotate(210 50 50)'>
          <rect x='48.5' y='24' rx='0' ry='0'>
            <animate
              attributeName='opacity'
              values='1;0'
              keyTimes='0;1'
              dur='0.7142857142857142s'
              begin='-0.23809523809523808s'
              repeatCount='indefinite'
            />
          </rect>
        </g>
        <g transform='rotate(240 50 50)'>
          <rect x='48.5' y='24' rx='0' ry='0'>
            <animate
              attributeName='opacity'
              values='1;0'
              keyTimes='0;1'
              dur='0.7142857142857142s'
              begin='-0.17857142857142858s'
              repeatCount='indefinite'
            />
          </rect>
        </g>
        <g transform='rotate(270 50 50)'>
          <rect x='48.5' y='24' rx='0' ry='0'>
            <animate
              attributeName='opacity'
              values='1;0'
              keyTimes='0;1'
              dur='0.7142857142857142s'
              begin='-0.11904761904761904s'
              repeatCount='indefinite'
            />
          </rect>
        </g>
        <g transform='rotate(300 50 50)'>
          <rect x='48.5' y='24' rx='0' ry='0'>
            <animate
              attributeName='opacity'
              values='1;0'
              keyTimes='0;1'
              dur='0.7142857142857142s'
              begin='-0.05952380952380952s'
              repeatCount='indefinite'
            />
          </rect>
        </g>
        <g transform='rotate(330 50 50)'>
          <rect x='48.5' y='24' rx='0' ry='0'>
            <animate
              attributeName='opacity'
              values='1;0'
              keyTimes='0;1'
              dur='0.7142857142857142s'
              begin='0s'
              repeatCount='indefinite'
            />
          </rect>
        </g>
      </svg>
    </div>
  );
}
