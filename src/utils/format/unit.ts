import { CSSProperties } from 'react';
import { isDef } from '../base';
import { isNumeric } from '../validate/number';

export function addUnit(value?: string | number): string | undefined {
  if (!isDef(value)) {
    return undefined;
  }

  return isNumeric(value) ? `${value}px` : String(value);
}

export function getSizeStyle(
  originSize?: string | number
): CSSProperties | void {
  if (isDef(originSize)) {
    const size = addUnit(originSize);
    return {
      width: size,
      height: size
    };
  }
}
