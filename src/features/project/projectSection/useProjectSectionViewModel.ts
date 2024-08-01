import { useEffect, useState } from "react";
import { ProjectApi } from "../../../api/ProjectApi";
import { IProject } from "../../../model/IProject";
import { FuzzySearch } from "../../../services/fuzzySearch/FuzzySearch";

export const useProjectSectionViewModel = () => {
  const [query, setQuery] = useState("");
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

  const filterProjects = (): IProject[] => {
    if (query.length === 0) {
      return projects;
    }

    const fuzzySearch = new FuzzySearch<IProject>();
    return fuzzySearch.search(query, projects);
  };

  const onBack = () => setSelectedProject(undefined);

  const onSearch = (query: string) => setQuery(query);

  const onSelectProject = (project: IProject) => setSelectedProject(project);

  return {
    filterProjects,
    isLoading,
    onBack,
    onSearch,
    onSelectProject,
    query,
    projects,
    selectedProject,
    setQuery,
  };
};
