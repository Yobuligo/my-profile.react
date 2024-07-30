import { IProject } from "../../../model/IProject";

export interface IProjectListProps {
  onSelect?: (project: IProject) => void;
  projects: IProject[];
}
