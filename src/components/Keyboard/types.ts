export interface KBKProps {
  type: KeyTypes;
  keyNumber?: string;
  isActive?:boolean;
  size?: { width: number; height: number };
  closeColor?: string;
  closeIcon?: string;
  deleteIcon?: string;
  notCloseable?:boolean;
}

export interface KBProps {
  isActive: boolean;
  closeColor?: string;
  title?: string;
  borderRadius?: string;
  size?: { width: string; height: string };
  maxDigit?: number;
}

export type KeyTypes = 'button' | 'blank';
