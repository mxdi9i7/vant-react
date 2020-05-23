import React from 'react';
import classnames from '../../utils/classNames';
import './index.scss';

interface Props {
  text?: string;
  children?: string;
  plain?: boolean;
  disabled?: boolean;
  type?: 'default' | 'primary' | 'warning' | 'info' | 'danger';
}
const baseClass = 'vant-button';

export default function Button({
  text,
  children,
  type = 'default',
  plain,
  disabled
}: Props) {
  return (
    <button
      className={classnames(
        baseClass,
        `${baseClass}__${type}`,
        plain ? `${baseClass}__plain` : '',
        disabled ? `${baseClass}__disabled` : ''
      )}
      disabled={disabled}
    >
      {text || children}
    </button>
  );
}
