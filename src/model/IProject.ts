import { IHavePath } from "../api/core/types/IHavePath";
import { ITimeInterval } from "../services/date/ITimeInterval";
import { IEntity } from "./IEntity";
import { Role } from "./Role";
import { Technology } from "./Technology";

/**
 * An implementation of this interface represents any kind of project
 */
export interface IProject extends IEntity {
  customer: string;
  roles: Role[];
  summary: string;
  technologies: Technology[];
  timeInterval: ITimeInterval;
  title: string;
  url: string;
}

export const ProjectMeta: IHavePath = { path: "/projects" };
