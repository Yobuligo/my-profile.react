import { IProject } from "../../../model/IProject";

export interface IProjectDetailsProps {
  onBack?: () => void;
  project: IProject;
}
