import { ProjectList } from "../projectList/ProjectList";
import { IProjectGroupProps } from "./IProjectGroupProps";
import styles from "./ProjectGroup.module.scss";

export const ProjectGroup: React.FC<IProjectGroupProps> = (props) => {
  return (
    <div className={styles.projectGroup}>
      <h3 className={styles.title}>{props.projectGroup.title}</h3>
      <ProjectList
        onSelect={props.onSelect}
        projects={props.projectGroup.projects}
      />
    </div>
  );
};
