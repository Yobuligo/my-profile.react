import { IProject } from "../../../model/IProject";
import { IProjectGroup } from "../../../model/IProjectGroup";

export interface IProjectGroupProps {
  projectGroup: IProjectGroup;
  onSelect?: (project: IProject) => void;
}
