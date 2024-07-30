import { useEffect, useState } from "react";
import { ProjectApi } from "../../../api/ProjectApi";
import { IProject } from "../../../model/IProject";

export const useProjectSectionViewModel = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [projects, setProjects] = useState<IProject[]>([]);

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

  return {
    isLoading,
    projects,
  };
};
