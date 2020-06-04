import React, { ReactElement } from 'react';

interface Props {
  icon: ReactElement;
  className: string;
  handleClick: Function;
  index: number;
  gutter: string;
}

const RateIcon = ({ handleClick, index, gutter, icon, className }: Props) => {
  return (
    <span
      style={{ marginRight: gutter }}
      onClick={() => handleClick(index)}
      className={className}
    >
      {icon}
    </span>
  );
};

export default RateIcon;
