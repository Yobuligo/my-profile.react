import { ProjectItem } from "../projectItem/ProjectItem";
import { IProjectListProps } from "./IProjectListProps";

export const ProjectList: React.FC<IProjectListProps> = (props) => {
  const items = props.projects.map((project) => (
    <ProjectItem
      key={project.id}
      onSelect={() => props.onSelect?.(project)}
      project={project}
    />
  ));

  return <>{items}</>;
};
