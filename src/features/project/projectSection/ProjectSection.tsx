import { Search } from "../../../components/search/Search";
import { Spinner } from "../../../components/spinner/Spinner";
import { ProjectDetails } from "../projectDetails/ProjectDetails";
import { ProjectGroup } from "../projectGroup/ProjectGroup";
import styles from "./ProjectSection.module.scss";
import { useProjectSectionViewModel } from "./useProjectSectionViewModel";

export const ProjectSection: React.FC = () => {
  const viewModel = useProjectSectionViewModel();

  const getProjectGroupsItems = () =>
    viewModel
      .getProjectGroups()
      .map((projectGroup) => (
        <ProjectGroup
          key={projectGroup.title}
          projectGroup={projectGroup}
          onSelect={viewModel.onSelectProject}
        />
      ));

  return (
    <>
      {viewModel.isLoading && <Spinner color="black" />}
      {viewModel.selectedProject ? (
        <ProjectDetails
          onBack={viewModel.onBack}
          project={viewModel.selectedProject}
        />
      ) : (
        <div className={styles.projectList}>
          <div className={styles.search}>
            <Search onSearch={viewModel.onSearch} query={viewModel.query} />
          </div>
          <div className={styles.projectGroup}>{getProjectGroupsItems()}</div>
        </div>
      )}
    </>
  );
};
