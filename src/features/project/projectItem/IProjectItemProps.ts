import { IHaveClassName } from "../../../core/types/IHaveClassName";
import { IProject } from "../../../model/IProject";

export interface IProjectItemProps extends IHaveClassName {
  onSelect?: () => void;
  project: IProject;
}
