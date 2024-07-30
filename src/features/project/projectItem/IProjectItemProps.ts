import { IProject } from "../../../model/IProject";

export interface IProjectItemProps {
  onSelect?: () => void;
  project: IProject;
}
