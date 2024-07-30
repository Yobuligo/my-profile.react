import { IProject } from "../../../model/IProject";

export interface IProjectItemProps {
  className?: string;
  onSelect?: () => void;
  project: IProject;
}
