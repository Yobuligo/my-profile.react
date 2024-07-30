import { texts } from "../../../hooks/useTranslation/texts";
import { useTranslation } from "../../../hooks/useTranslation/useTranslation";
import { ProjectItem } from "../projectItem/ProjectItem";
import { IProjectListProps } from "./IProjectListProps";
import styles from "./ProjectList.module.scss";

export const ProjectList: React.FC<IProjectListProps> = (props) => {
  const { t } = useTranslation();

  const items = props.projects.map((project) => (
    <ProjectItem
      key={project.id}
      onSelect={() => props.onSelect?.(project)}
      project={project}
    />
  ));

  return (
    <div className={styles.projectList}>
      {items.length === 0 ? (
        <>{t(texts.projectList.noProjectsFound)}</>
      ) : (
        <>{items}</>
      )}
    </div>
  );
};
