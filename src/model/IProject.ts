import { IHavePath } from "../api/core/types/IHavePath";
import { ITimeInterval } from "../services/date/ITimeInterval";
import { IEntity } from "./IEntity";
import { Role } from "./Role";

export interface IProject extends IEntity {
  roles: Role[];
  summary: string;
  timeInterval: ITimeInterval;
  title: string;
}

export const ProjectMeta: IHavePath = { path: "/projects" };
