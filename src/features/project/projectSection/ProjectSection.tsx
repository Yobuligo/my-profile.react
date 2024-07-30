import { Search } from "../../../components/search/Search";
import { Spinner } from "../../../components/spinner/Spinner";
import { ProjectDetails } from "../projectDetails/ProjectDetails";
import { ProjectList } from "../projectList/ProjectList";
import { useProjectSectionViewModel } from "./useProjectSectionViewModel";
import styles from "./ProjectSection.module.scss";

export const ProjectSection: React.FC = () => {
  const viewModel = useProjectSectionViewModel();

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
            <Search onSearch={viewModel.onSearch} />
          </div>
          <ProjectList
            projects={viewModel.filterProjects()}
            onSelect={viewModel.onSelectProject}
          />
        </div>
      )}
    </>
  );
};
