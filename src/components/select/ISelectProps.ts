import { IHaveClassName } from "../../core/types/IHaveClassName";
import { ISelectOption } from "./ISelectOption";

export interface ISelectProps<T extends ISelectOption<any>>
  extends IHaveClassName {
  onSelect?: (option: T) => void;
  options: T[];
  selected?: T;
}
