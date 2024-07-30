import { IProjectItemProps } from "./IProjectItemProps";

export const ProjectItem: React.FC<IProjectItemProps> = (props) => {
  return <>{props.project.title}</>;
};
