import React from 'react';

const renderStop = (color: string, offset: number, opacity?: number) => (
  <stop stopColor={color} offset={`${offset}%`} stopOpacity={opacity} />
);

export const Network = (
  <svg viewBox='0 0 160 160'>
    <defs>
      <linearGradient id='c' x1='64.022%' y1='100%' x2='64.022%' y2='0%'>
        {renderStop('#FFF', 0, 0.5)}
        {renderStop('#F2F3F5', 100)}
      </linearGradient>
      <linearGradient id='d' x1='64.022%' y1='96.956%' x2='64.022%' y2='0%'>
        {renderStop('#F2F3F5', 0, 0.3)}
        {renderStop('#F2F3F5', 100)}
      </linearGradient>
      <linearGradient id='h' x1='50%' y1='0%' x2='50%' y2='84.459%'>
        {renderStop('#EBEDF0', 0)}
        {renderStop('#DCDEE0', 100, 0)}
      </linearGradient>
      <linearGradient id='i' x1='100%' y1='0%' x2='100%' y2='100%'>
        {renderStop('#EAEDF0', 0)}
        {renderStop('#DCDEE0', 100)}
      </linearGradient>
      <linearGradient id='k' x1='100%' y1='100%' x2='100%' y2='0%'>
        {renderStop('#EAEDF0', 0)}
        {renderStop('#DCDEE0', 100)}
      </linearGradient>
      <linearGradient id='m' x1='0%' y1='43.982%' x2='100%' y2='54.703%'>
        {renderStop('#EAEDF0', 0)}
        {renderStop('#DCDEE0', 100)}
      </linearGradient>
      <linearGradient id='n' x1='94.535%' y1='43.837%' x2='5.465%' y2='54.948%'>
        {renderStop('#EAEDF0', 0)}
        {renderStop('#DCDEE0', 100)}
      </linearGradient>
      <radialGradient
        id='g'
        cx='50%'
        cy='0%'
        fx='50%'
        fy='0%'
        r='100%'
        gradientTransform='matrix(0 1 -.54835 0 .5 -.5)'
      >
        {renderStop('#EBEDF0', 0)}
        {renderStop('#FFF', 100, 0)}
      </radialGradient>
    </defs>
    <g fill='none' fillRule='evenodd'>
      <g opacity='.8'>
        <path
          d='M0 124V46h20v20h14v58H0z'
          fill='url(#c)'
          transform='matrix(-1 0 0 1 36 7)'
        />
        <path
          d='M40.5 5a8.504 8.504 0 018.13 6.009l.12-.005L49 11a8 8 0 11-1 15.938V27H34v-.174a6.5 6.5 0 11-1.985-12.808A8.5 8.5 0 0140.5 5z'
          fill='url(#d)'
          transform='translate(2 7)'
        />
        <path
          d='M96.016 0a4.108 4.108 0 013.934 2.868l.179-.004c2.138 0 3.871 1.71 3.871 3.818 0 2.109-1.733 3.818-3.871 3.818-.164 0-.325-.01-.484-.03v.03h-6.774v-.083a3.196 3.196 0 01-.726.083C90.408 10.5 89 9.111 89 7.398c0-1.636 1.284-2.976 2.911-3.094a3.555 3.555 0 01-.008-.247c0-2.24 1.842-4.057 4.113-4.057z'
          fill='url(#d)'
          transform='translate(2 7)'
        />
        <path
          d='M121 8h22.231v14H152v77.37h-31V8z'
          fill='url(#c)'
          transform='translate(2 7)'
        />
      </g>
      <path fill='url(#g)' d='M0 139h160v21H0z' />
      <path
        d='M37 18a7 7 0 013 13.326v26.742c0 1.23-.997 2.227-2.227 2.227h-1.546A2.227 2.227 0 0134 58.068V31.326A7 7 0 0137 18z'
        fill='url(#h)'
        fillRule='nonzero'
        transform='translate(43 36)'
      />
      <g opacity='.6' strokeLinecap='round' strokeWidth='7'>
        <path
          d='M20.875 11.136a18.868 18.868 0 00-5.284 13.121c0 5.094 2.012 9.718 5.284 13.12'
          stroke='url(#i)'
          transform='translate(43 36)'
        />
        <path
          d='M9.849 0C3.756 6.225 0 14.747 0 24.146c0 9.398 3.756 17.92 9.849 24.145'
          stroke='url(#i)'
          transform='translate(43 36)'
        />
        <path
          d='M57.625 11.136a18.868 18.868 0 00-5.284 13.121c0 5.094 2.012 9.718 5.284 13.12'
          stroke='url(#k)'
          transform='rotate(-180 76.483 42.257)'
        />
        <path
          d='M73.216 0c-6.093 6.225-9.849 14.747-9.849 24.146 0 9.398 3.756 17.92 9.849 24.145'
          stroke='url(#k)'
          transform='rotate(-180 89.791 42.146)'
        />
      </g>
      <g transform='translate(31 105)' fillRule='nonzero'>
        <rect fill='url(#m)' width='98' height='34' rx='2' />
        <rect fill='#FFF' x='9' y='8' width='80' height='18' rx='1.114' />
        <rect fill='url(#n)' x='15' y='12' width='18' height='6' rx='1.114' />
      </g>
    </g>
  </svg>
);
