import { useEffect, useState } from "react";
import { ProjectApi } from "../../../api/ProjectApi";
import { IProject } from "../../../model/IProject";
import { IProjectGroup } from "../../../model/IProjectGroup";
import { DateTime } from "../../../services/date/DateTime";
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

  const getProjectGroups = (): IProjectGroup[] => {
    const projectGroupMap: { [year: string]: IProjectGroup } = {};
    filterProjects().forEach((project) => {
      const year = DateTime.toYear(project.timeInterval.to);
      if (!projectGroupMap[year]) {
        projectGroupMap[year] = { projects: [], title: year };
      }
      projectGroupMap[year].projects.push(project);
    });

    return Object.values(projectGroupMap).sort((left, right) => {
      if (left.title < right.title) {
        return 1;
      }
      if (left.title > right.title) {
        return -1;
      }
      return 0;
    });
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
    getProjectGroups,
    projects,
    selectedProject,
    setQuery,
  };
};
