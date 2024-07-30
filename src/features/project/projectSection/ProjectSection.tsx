import { Spinner } from "../../../components/spinner/Spinner";
import { ProjectDetails } from "../projectDetails/ProjectDetails";
import { ProjectList } from "../projectList/ProjectList";
import { useProjectSectionViewModel } from "./useProjectSectionViewModel";

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
        <ProjectList
          projects={viewModel.projects}
          onSelect={viewModel.onSelectProject}
        />
      )}
    </>
  );
};
