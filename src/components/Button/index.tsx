import React from 'react';

interface Props {
  text?: String;
  children?: String;
}

export default function Button({ text, children }: Props) {
  return <button>{text || children}</button>;
}
