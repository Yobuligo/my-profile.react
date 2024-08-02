import { IProject } from "./IProject";

/**
 * Groups projects and represents them by a specific title
 */
export interface IProjectGroup {
  projects: IProject[];
  title: string;
}
