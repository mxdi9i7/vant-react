/*
 * @Author: zhaohui
 * @Date: 2021-05-29 11:34:24
 * @LastEditTime: 2021-05-29 12:02:05
 * @LastEditors: zhaohui
 * @Description: 
 * @FilePath: /vant-react/src/components/ActionSheet/types.ts
 */
export interface ActionSheetProps {
    visible?: boolean;
    actions?: ActionItem[];
    title?: string | React.ReactNode;
    cancelText?: string | React.ReactNode;
    description?: string | React.ReactNode;
    closeable?: boolean;
    closeIcon?: string | React.ReactNode;
    duration?: number;
    overlay?: boolean;
    safeAreaInsetBottom?: boolean;	
}

export interface ActionItem {
    name: string | React.ReactNode;
    subname?: string | React.ReactNode;
    color?: string;
    className?: string;
    loading?: boolean;
    disabled?: boolean;
    callback?: Function
}
export const BaseClass = 'vant-action-sheet'
