import { IHaveClassName } from "../../../core/types/IHaveClassName";
import { Role } from "../../../model/Role";

export interface IRoleListProps extends IHaveClassName {
  roles: Role[];
}
