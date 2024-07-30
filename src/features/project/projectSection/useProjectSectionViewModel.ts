import { useEffect, useState } from "react";
import { ProjectApi } from "../../../api/ProjectApi";
import { IProject } from "../../../model/IProject";

export const useProjectSectionViewModel = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [projects, setProjects] = useState<IProject[]>([]);
  const [selectedProject, setSelectedProject] = useState<IProject | undefined>(
    undefined
  );

  const loadProjects = async () => {
    setIsLoading(true);
    const projectApi = new ProjectApi();
    const projects = await projectApi.findAll();
    setProjects(projects);
    setIsLoading(false);
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const onBack = () => setSelectedProject(undefined);

  const onSelectProject = (project: IProject) => setSelectedProject(project);

  return {
    isLoading,
    onBack,
    onSelectProject,
    projects,
    selectedProject,
  };
};
