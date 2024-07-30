import { Spinner } from "../../../components/spinner/Spinner";
import { ProjectList } from "../projectList/ProjectList";
import { useProjectSectionViewModel } from "./useProjectSectionViewModel";

export const ProjectSection: React.FC = () => {
  const viewModel = useProjectSectionViewModel();

  return (
    <>
      {viewModel.isLoading && <Spinner color="black"/>}
      <ProjectList projects={viewModel.projects} />
    </>
  );
};
