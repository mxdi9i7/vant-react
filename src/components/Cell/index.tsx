import { IProps as CellProps } from './types';
import InternalCell from './Cell';
import Group from './Group';
export interface CompoundedComponent
  extends React.ForwardRefExoticComponent<
    CellProps & React.RefAttributes<HTMLInputElement>
  > {
  Group: typeof Group;
}
const Cell = InternalCell as CompoundedComponent;
Cell.Group = Group;
export default Cell;
